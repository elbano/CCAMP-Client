import { Component, OnInit } from '@angular/core';
import { ContentCreator } from '../../models/content-creator.class';
import { CreatorDiscoveryService } from './creator-discovery.service';
import { CreatorDiscoveryDataSource } from './creator-discovery.datasource';
import * as SpinnerActions from '../../shared/spinner/store/spinner.actions';
import * as fromRoot from '../../app.reducer';
import { Store, select } from '@ngrx/store';
import * as MarketActions from '../store/market.actions';
import { SubscriptionLike } from 'rxjs';
import { getChannelList } from '../../app.reducer';
import { GetChannelList } from '../store/market.actions';
import { Channel } from 'src/app/models/channel.class';

@Component({
  selector: 'app-creator-discovery',
  templateUrl: './creator-discovery.component.html',
  styleUrls: ['./creator-discovery.component.css']
})
export class CreatorDiscoveryComponent implements OnInit {

  dataSource: CreatorDiscoveryDataSource;
  channelListSubscription: SubscriptionLike;
  channelList: Channel[];

  displayedColumns = ['thumbnail', 'name', 'creationdate'];

  contentCreatorList: ContentCreator[];

  constructor(private rootStore: Store<fromRoot.State>, private creatorDiscoveryService: CreatorDiscoveryService) { }

  ngOnInit() { 

    this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(true));
    // this.dataSource = new CreatorDiscoveryDataSource(this.creatorDiscoveryService, this.rootStore);
    // this.dataSource.fetchChannels();

    // Make the call to the ngrx store to fetch the channel list against the api
    this.rootStore.dispatch(new MarketActions.GetChannelList());

    // We retrieve the channel list by subscribing and setting the value to local variable channelList
    this.channelListSubscription = this.rootStore.pipe(select(getChannelList)).subscribe(channelListResponse => {
      if (channelListResponse) {
         this.channelList = channelListResponse;
      }
   });

    
  }

}
