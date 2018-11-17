import { Component, OnInit } from '@angular/core';
import { ChannelDashboardDataSource } from './channel-dashboard.datasource';

import * as SpinnerActions from '../../shared/spinner/store/spinner.actions';
import * as fromRoot from '../../app.reducer';


import { Store } from '@ngrx/store';
import { EDealStatus, Deal } from 'src/app/models/deal.class';

@Component({
  selector: 'app-channel-dashboard',
  templateUrl: './channel-dashboard.component.html',
  styleUrls: ['./channel-dashboard.component.css']
})
export class ChannelDashboardComponent implements OnInit {

  dataSourceProposal: ChannelDashboardDataSource;
  dataSourceCompleted: ChannelDashboardDataSource;
  dataSourceFinished: ChannelDashboardDataSource;

  displayedColumnsProposal = ['campaign', 'modality', 'startdate', 'sponsor', 'terms'];
  displayedColumnsCompleted = ['campaign', 'views', 'enddate', 'sponsor', 'terms'];
  displayedColumnsFinished = ['campaign', 'amount', 'enddate', 'sponsor', 'terms'];

  SELECTED_TAB_CSS_COLOR: String = ' element-app-blue';
  HIDDEN_TAB_STYLE: String = 'none';

  tabList: Tab[] = [new Tab({ name: 'Proposals', css: this.SELECTED_TAB_CSS_COLOR }),
  new Tab({ name: 'Completed', css: '', style: this.HIDDEN_TAB_STYLE }),
  new Tab({ name: 'Payed', css: '', style: this.HIDDEN_TAB_STYLE })];


  constructor(private rootStore: Store<fromRoot.State>) { }

  ngOnInit() {

    this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(true));
    
    this.dataSourceProposal = new ChannelDashboardDataSource(this.rootStore, this.filterProposal);
    this.dataSourceProposal.fetchDeals();

    this.dataSourceCompleted = new ChannelDashboardDataSource(this.rootStore, this.filterCompleted);
    this.dataSourceCompleted.fetchDeals();

    this.dataSourceFinished = new ChannelDashboardDataSource(this.rootStore, this.filterFinished);
    this.dataSourceFinished.fetchDeals();
    
  }

  filterProposal(deal: Deal): Boolean {
    return  deal.Status == EDealStatus.dm_Proposal || deal.Status == EDealStatus.dm_Accepted;
  }

  filterCompleted(deal: Deal): Boolean {
    return  deal.Status == EDealStatus.dm_Completed;
  }

  filterFinished(deal: Deal): Boolean {
    return  deal.Status == EDealStatus.dm_Finished;
  }


  openTab(value): void {
    for(let i = 0; i < this.tabList.length; i++) {
      if(this.tabList[i].name === value) {
        this.tabList[i].css = this.SELECTED_TAB_CSS_COLOR;
        this.tabList[i].style = '';
      } else {
        this.tabList[i].style = this.HIDDEN_TAB_STYLE;
        this.tabList[i].css = '';
      }
    }
  }
}

export class Tab {
  name: String;
  css: String;
  style: String;

  constructor(options: any) {
    this.name = options.name;
    this.css = options.css;
    this.style = options.style;
  }
}
