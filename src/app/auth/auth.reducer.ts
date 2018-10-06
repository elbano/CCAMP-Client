import { Action } from '@ngrx/store';

import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED, CALL_AUTHORIZE } from './auth.actions';
import { AuthResult } from './auth.models';
import { ActionWithPayload } from '../core/store.model';

export interface State {
   isAuthenticated: boolean;
   authResult: AuthResult;
}

const initialState: State = {
   isAuthenticated: false,
   authResult: null
};

export function authReducer(state = initialState, action: ActionWithPayload<any>) {
   switch (action.type) {
      case SET_AUTHENTICATED:
         return {
            ...state,
            isAuthenticated: true,
            authResult: action.payload
         };

      /**
       * Set the application state back to the initial state
       * This sets the localstorage in the browser to the initialState above
       */
      case SET_UNAUTHENTICATED:
         return initialState;
      case CALL_AUTHORIZE:
         return initialState;
      default: {
         return state;
      }
   }
}

export const getIsAuth = (state: State) => state.isAuthenticated;

/**
 * Returns the header string with the bearer token when there is an access token or null
 * when no access token exists.
 */
export const getAuthHeader = (state: State) => {
   if (state == null || state.authResult == null || state.authResult.accessToken == null) {
      return null;
   } else {
      return 'Bearer ' + state.authResult.accessToken;
   }
};



