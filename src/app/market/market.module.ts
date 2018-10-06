import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignDashboardComponent } from './campaign-dashboard/campaign-dashboard.component';
import { CreatorDiscoveryComponent } from './creator-discovery/creator-discovery.component';
import { MarketRoutingModule } from './market-routing.module';
import { CreatorDiscoveryService } from './creator-discovery/creator-discovery.service';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { marketReducer } from './store/market.reducer';
import { MarketEffects } from './store/market.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MarketRoutingModule,
    StoreModule.forFeature('market', marketReducer),
    EffectsModule.forFeature([MarketEffects])
  ],
  declarations: [CampaignDashboardComponent, CreatorDiscoveryComponent],
  providers: [
    CreatorDiscoveryService
  ]
})
export class MarketModule { }
