import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
   { path: 'callback', component: CallbackComponent}
];

/**
 * Load the routes eagerly because authentication is needed at the start
 * of the app.
 */
@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class AuthRoutingModule {

 }

