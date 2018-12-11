import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as fromRoot from '../../app.reducer';
import * as MarketActions from './market.actions';
import { CreatorDiscoveryService } from '../creator-discovery/creator-discovery.service';
import { Channel } from '../../models/channel.class';
import { User } from 'src/app/models/user.class';

@Injectable()
export class MarketEffects {

  constructor(
    private actions$: Actions,
    private creatorDiscoveryService: CreatorDiscoveryService,
    private rootStore: Store<fromRoot.State>
 ) {}


   @Effect({ dispatch: false})
   getCreatorList$ = this.actions$.pipe(
     ofType(MarketActions.GET_CREATOR_LIST),
     map(() => {
       // return the API response
       const response = this.creatorDiscoveryService.getCreators();
       return response;
     }),
     switchMap((creatorListJSON) => {
        // creatorListJSON is an an Observable containing an JSON of Creatpr list
        // Note map here iterates through each element of array and modifies them
        return creatorListJSON.pipe(map(creatorList => {
           return creatorList.map(creator => {
              return new User(creator);
           });
        }));
     }),
     map((list: User[]) => {
       return this.rootStore.dispatch(new MarketActions.StoreCreatorList(list));
     })
   );

   @Effect({ dispatch: false})
   getChannelList$ = this.actions$.pipe(
     ofType(MarketActions.GET_CHANNEL_LIST),
     map(() => {
       // return the API response
       const response = this.creatorDiscoveryService.getChannels();
       return response;
     }),
     switchMap((channelListJSON) => {
        return channelListJSON.pipe(map(channelList => {
           return channelList.map(channel => {
              return new Channel(channel);
           });
        }));
     }),
     map((list: Channel[]) => {
       return this.rootStore.dispatch(new MarketActions.StoreChannelList(list));
     })
   );

   @Effect({ dispatch: false})
   getChannelListKeys$ = this.actions$.pipe(
     ofType(MarketActions.GET_CHANNEL_LIST_BY_KEYWORD),
     map((action: any) => {
      return action.payload;
     }),
     switchMap((keyWords: string) => {
      // return the API response from annotation end point
      return this.creatorDiscoveryService.getChannelsByKeyWords(keyWords);
   }),
     map((list: Channel[]) => {
       return this.rootStore.dispatch(new MarketActions.StoreChannelListByKeyWord(list));
     })
   );
}
