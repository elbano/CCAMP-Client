import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Module imports
import { AccountModule } from './account/account.module';
import { MarketModule } from './market/market.module';
import { MaterialModule } from './material.module';
import { ChannelModule } from './channel/channel.module';

// Components and services
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    AccountModule,
    BrowserModule,
    BrowserAnimationsModule,
    ChannelModule,
    MarketModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
