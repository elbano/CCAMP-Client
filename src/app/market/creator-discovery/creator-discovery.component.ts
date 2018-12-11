import { Component, OnInit } from '@angular/core';
import { CreatorDiscoveryService } from './creator-discovery.service';
import { CreatorDiscoveryDataSource } from './creator-discovery.datasource';
import * as SpinnerActions from '../../shared/spinner/store/spinner.actions';
import * as fromRoot from '../../app.reducer';
import { Store, select } from '@ngrx/store';
import * as MarketActions from '../store/market.actions';
import { SubscriptionLike } from 'rxjs';
import { getChannelList } from '../../app.reducer';
import { Channel } from 'src/app/models/channel.class';
import { PaginationService } from 'src/app/services/index';

@Component({
  selector: 'app-creator-discovery',
  templateUrl: './creator-discovery.component.html',
  styleUrls: ['./creator-discovery.component.css']
})
export class CreatorDiscoveryComponent implements OnInit {

  CHAR_CODE_KEY_ENTER = 13;
  dataSource: CreatorDiscoveryDataSource;
  channelListSubscription: SubscriptionLike;
  channelList: Channel[];
  searchString: string;

  displayedColumns = ['thumbnail', 'name', 'creationdate'];

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

    if (this.channelList) {
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

  searchKeyWords() {

    if (this.searchString && this.searchString.trim().length > 0) {
      this.rootStore.dispatch(new MarketActions.GetChannelListByKeyWord(this.searchString.trim()));
    } else {
      this.rootStore.dispatch(new MarketActions.GetChannelList());
    }


    // We retrieve the channel list by subscribing and setting the value to local variable channelList
    this.channelListSubscription = this.rootStore.pipe(select(getChannelList)).subscribe(channelListResponse => {
      if (channelListResponse) {
        this.channelList = channelListResponse;
        this.setPage(1);
      }
    });
  }

  searchKeyUp(event: any): void {
    if (event.target) {
      const code = (event.keyCode ? event.keyCode : event.which);
      // When the user clicks the enter key, key code 13, fire the resolution
      // change event to update the resolution.
      if (code === this.CHAR_CODE_KEY_ENTER) {
        this.searchKeyWords();
      }
    }
  }

}
