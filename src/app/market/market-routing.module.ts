import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignDashboardComponent } from './campaign-dashboard/campaign-dashboard.component';
import { CreatorDiscoveryComponent } from './creator-discovery/creator-discovery.component';
// import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
   { path: 'dashboard/:id', component: CampaignDashboardComponent/*, canActivate: [AuthGuard]*/},
   { path: 'discovery', component: CreatorDiscoveryComponent/*, canActivate: [AuthGuard]*/}
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
//    providers: [AuthGuard]
 })
 export class MarketRoutingModule { }

