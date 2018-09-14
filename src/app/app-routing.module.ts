import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

/**
 * Load the routes eagerly until we have more routing tests in place,
 * then we can lazy load appropriate modules.
 */
const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'}, // BETTER ROUTE NAME FOR THIS?
   { path: 'home', component: HomeComponent }
];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ]
})
export class AppRoutingModule { }
