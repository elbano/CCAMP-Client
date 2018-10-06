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

@Component({
  selector: 'app-creator-discovery',
  templateUrl: './creator-discovery.component.html',
  styleUrls: ['./creator-discovery.component.css']
})
export class CreatorDiscoveryComponent implements OnInit {

  dataSource: CreatorDiscoveryDataSource;
  channelListSubscription: SubscriptionLike;

  displayedColumns = ['thumbnail', 'name', 'creationdate'];

  contentCreatorList: ContentCreator[];

  constructor(private rootStore: Store<fromRoot.State>, private creatorDiscoveryService: CreatorDiscoveryService) { }

  ngOnInit() {

    this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(true));
    this.dataSource = new CreatorDiscoveryDataSource(this.creatorDiscoveryService, this.rootStore);
    this.dataSource.fetchChannels();
    console.log(this.dataSource);
  }

}
