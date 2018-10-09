import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import * as AuthActions from './auth.actions';
import { AuthService } from './auth.service';
import { ActionWithPayload } from '../core/store.model';
import { AuthResult } from './auth.models';

@Injectable()
export class AuthEffects {
   /**
    * Observables decorated with the @Effect() decorator are expected to be
    * a stream of actions to be dispatched. Pass { dispatch: false } to the
    * decorator to prevent actions from being dispatched.
    * @see https://github.com/ngrx/effects/blob/master/docs/api.md
    */
   @Effect({ dispatch: false })
   callAuthorize$ = this.actions$.pipe(
      ofType(AuthActions.CALL_AUTHORIZE),
      tap((action: AuthActions.CallAuthorize) => this.authService.callAuthorize())
   );

   @Effect({ dispatch: false })
   setAuthenticated$ = this.actions$.pipe(
      ofType(AuthActions.SET_AUTHENTICATED),
      map((action: ActionWithPayload<AuthResult>) => action.payload),
   );

   @Effect({ dispatch: false })
   setUnauthenticated$ = this.actions$.pipe(
      ofType(AuthActions.SET_UNAUTHENTICATED),
      tap((action: AuthActions.SetUnauthenticated) => this.authService.logout()),
      tap(() => this.router.navigate(['/main']))
   );

   @Effect({ dispatch: false })
   callHandleAuthorization$ = this.actions$.pipe(
      ofType(AuthActions.CALL_HANDLEAUTHENTICATION),
      tap((action: AuthActions.CallHandleAuthentication) => this.authService.handleAuthentication())
   );

   constructor(private actions$: Actions,
      private authService: AuthService,
      private router: Router,
   ) { }
}
