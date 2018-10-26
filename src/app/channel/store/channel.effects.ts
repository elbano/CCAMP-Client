import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import * as fromRoot from '../../app.reducer';
import * as ChannelActions from './channel.actions';
import { Deal } from '../../models/deal.class';
import { ChannelDashboardService } from '../channel-dashboard/channel-dashboard.service';

@Injectable()
export class ChannelEffects {

  constructor(
    private actions$: Actions,
    private channelDashboardService: ChannelDashboardService,
    private rootStore: Store<fromRoot.State>
 ) {}


   @Effect({ dispatch: false})
   getDealList$ = this.actions$.pipe(
     ofType(ChannelActions.GET_PROPOSAL_LIST),
     map(() => {
       // return the API response
       const response = this.channelDashboardService.getDeals();
       return response;
     }),
     switchMap((dealListJSON) => {
        // dealListJSON is an an Observable containing an JSON
        return dealListJSON.pipe(map(dealList => {
           return dealList.map(deal => {
              return new Deal(deal);
           });
        }));
     }),
     map((list: Deal[]) => {       
       return this.rootStore.dispatch(new ChannelActions.StoreProposalList(list));
     })
   );
}
