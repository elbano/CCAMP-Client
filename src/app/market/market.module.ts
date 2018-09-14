import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDashboardComponent } from './campaign-dashboard/campaign-dashboard.component';
import { CreatorDiscoveryComponent } from './creator-discovery/creator-discovery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CampaignDashboardComponent, CreatorDiscoveryComponent]
})
export class MarketModule { }
