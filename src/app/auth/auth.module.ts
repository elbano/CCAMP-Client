import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth.reducer';
import { AuthEffects } from './auth.effects';

import { AuthInterceptor, UnauthorizedInterceptor, NoDataInterceptor } from './auth-interceptor';

/**
 * All declarations and imports for authentication goes into this module.
*/

@NgModule({
   declarations: [
      CallbackComponent
   ],
   imports: [
      SharedModule,
      AuthRoutingModule,
      StoreModule.forFeature('auth', authReducer),
      EffectsModule.forFeature([AuthEffects])
   ],
   providers: [
      AuthService,
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: NoDataInterceptor, multi: true }
   ]
})
export class AuthModule { }
