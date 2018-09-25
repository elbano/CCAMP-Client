import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
// import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
   { path: 'account/:id', component: AccountComponent/*, canActivate: [AuthGuard]*/}
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
//    providers: [AuthGuard]
 })
 export class AccountRoutingModule { }

