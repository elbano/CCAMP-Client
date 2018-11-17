import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelDashboardComponent } from './channel-dashboard/channel-dashboard.component';
import { AdMarketplaceComponent } from './ad-marketplace/ad-marketplace.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
   { path: 'channel', component: ChannelDashboardComponent, canActivate: [AuthGuard]},
//    { path: 'marketplace/:id', component: AdMarketplaceComponent/*, canActivate: [AuthGuard]*/}
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
   providers: [AuthGuard]
 })
 export class ChannelRoutingModule { }

