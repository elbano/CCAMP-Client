import { Action } from '@ngrx/store';

import { AuthResult } from './auth.models';
import { ActionWithPayload } from '../core/store.model';

export const SET_AUTHENTICATED = '[Auth] Set Authenticated';
export const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated';
export const CALL_AUTHORIZE = '[Auth] Call Authorize';
export const CALL_HANDLEAUTHENTICATION = '[Auth] Call Handle Authorization';

export class SetAuthenticated implements Action {
  readonly type = SET_AUTHENTICATED;
  constructor(public payload: {authResult: AuthResult}) {}
}

export class SetUnauthenticated implements ActionWithPayload<null> {
  readonly type = SET_UNAUTHENTICATED;
}

/**
 * The application state is pending return of 3rd party auth
 */
export class CallAuthorize implements Action {
   readonly type = CALL_AUTHORIZE;
}

/**
 * Setup the automatic handling of the 3rd party auth response
 */
export class CallHandleAuthentication implements Action {
   readonly type = CALL_HANDLEAUTHENTICATION;
}

export type AuthActions = SetAuthenticated | SetUnauthenticated | CallAuthorize;
