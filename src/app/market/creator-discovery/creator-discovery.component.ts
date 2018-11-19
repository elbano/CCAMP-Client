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
import { PaginationService } from 'src/app/services/index';
//borrar prueba
//import { Http, Headers, RequestOptions, Response } from '@angular/http';

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

  //Pagination 
  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];
  //constructor(private rootStore: Store<fromRoot.State>, private creatorDiscoveryService: CreatorDiscoveryService, private paginationService: PaginationService, private http: Http) { }
  constructor(private rootStore: Store<fromRoot.State>, private creatorDiscoveryService: CreatorDiscoveryService, private paginationService: PaginationService) { }

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
         this.setPage(1);
      }
   });
    
    if (this.channelList){
      this.allItems = this.channelList;
      this.setPage(1);
    }
    
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.paginationService.getPager(this.channelList.length, page);

    // get current page of items
    this.pagedItems = this.channelList.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
