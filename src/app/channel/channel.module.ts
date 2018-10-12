import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelDashboardComponent } from './channel-dashboard/channel-dashboard.component';
import { AdMarketplaceComponent } from './ad-marketplace/ad-marketplace.component';
import { ChannelRoutingModule } from './channel-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ChannelRoutingModule,
    SharedModule
  ],
  declarations: [ChannelDashboardComponent, AdMarketplaceComponent]
})
export class ChannelModule { }
