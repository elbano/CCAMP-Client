import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelDashboardComponent } from './channel-dashboard/channel-dashboard.component';
import { AdMarketplaceComponent } from './ad-marketplace/ad-marketplace.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChannelDashboardComponent, AdMarketplaceComponent]
})
export class ChannelModule { }
