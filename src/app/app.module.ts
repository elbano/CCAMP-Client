import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

// ngrx imports
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

// Module imports
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { MarketModule } from './market/market.module';
import { MaterialModule } from './material.module';
import { ChannelModule } from './channel/channel.module';

// Components and services
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { reducers, metaReducers } from './app.reducer';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AccountModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChannelModule,
    MarketModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router' // name of the reducer key
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
