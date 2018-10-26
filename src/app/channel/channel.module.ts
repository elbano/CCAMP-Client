import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelDashboardComponent } from './channel-dashboard/channel-dashboard.component';
import { AdMarketplaceComponent } from './ad-marketplace/ad-marketplace.component';
import { ChannelRoutingModule } from './channel-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChannelDashboardService } from './channel-dashboard/channel-dashboard.service'
import { StoreModule } from '@ngrx/store';
import { channelReducer } from './store/channel.reducer';
import { ChannelEffects } from './store/channel.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  imports: [
    CommonModule,
    ChannelRoutingModule,
    SharedModule,
    StoreModule.forFeature('channel', channelReducer),
    EffectsModule.forFeature([ChannelEffects])
  ],
  declarations: [ChannelDashboardComponent, AdMarketplaceComponent],
  providers: [
    ChannelDashboardService
  ]
})
export class ChannelModule { }
