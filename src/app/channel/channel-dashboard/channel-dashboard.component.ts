import { Component, OnInit } from '@angular/core';
import { ChannelDashboardDataSource } from './channel-dashboard.datasource';
import { ChannelDashboardService } from './channel-dashboard.service';

import * as SpinnerActions from '../../shared/spinner/store/spinner.actions';
import * as fromRoot from '../../app.reducer';


import { Store } from '@ngrx/store';

@Component({
  selector: 'app-channel-dashboard',
  templateUrl: './channel-dashboard.component.html',
  styleUrls: ['./channel-dashboard.component.css']
})
export class ChannelDashboardComponent implements OnInit {

  dataSource: ChannelDashboardDataSource;

  SELECTED_TAB_CSS_COLOR: String = ' element-app-blue';
  HIDDEN_TAB_STYLE: String = 'none';

  tabList: Tab[] = [new Tab({ name: 'Proposals', css: this.SELECTED_TAB_CSS_COLOR }),
  new Tab({ name: 'Paiments', css: '', style: this.HIDDEN_TAB_STYLE }),
  new Tab({ name: 'Finished', css: '', style: this.HIDDEN_TAB_STYLE })];


  constructor(private rootStore: Store<fromRoot.State>, private channelDashboardService: ChannelDashboardService) { }

  ngOnInit() {

    this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(true));
    this.dataSource = new ChannelDashboardDataSource(this.channelDashboardService, this.rootStore);
    this.dataSource.fetchDeals();
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
