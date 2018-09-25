import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './account/profile/profile.component';
import { AccountComponent } from './account/account.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [ProfileComponent, AccountComponent]
})
export class AccountModule { }
