import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelDashboardComponent } from './channel-dashboard/channel-dashboard.component';
import { AdMarketplaceComponent } from './ad-marketplace/ad-marketplace.component';
import { ChannelRoutingModule } from './channel-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ChannelRoutingModule
  ],
  declarations: [ChannelDashboardComponent, AdMarketplaceComponent]
})
export class ChannelModule { }
