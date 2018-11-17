import { ActionReducerMap, createFeatureSelector, createSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromAuth from './auth/auth.reducer';
import * as fromSpinner from './shared/spinner/store/spinner.reducer';
import * as fromMarket from './market/store/market.reducer';
import * as fromChannel from './channel/store/channel.reducer';
import { RouterStateUrl } from './router-store-utils';
import { environment } from '../environments/environment';


export interface State {
   auth: fromAuth.State;
   router: fromRouter.RouterReducerState<RouterStateUrl>;
   spinner: fromSpinner.State;
   market: fromMarket.State;
   channel: fromChannel.State;
}

export const reducers: ActionReducerMap<State> = {
   auth: fromAuth.authReducer,
   router: fromRouter.routerReducer,
   spinner: fromSpinner.spinnerReducer,
   market: fromMarket.marketReducer,
   channel: fromChannel.channelReducer
};

// The parameter 'auth' must match the name in the interface State auth.
export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);
export const getAuthHeader = createSelector(getAuthState, fromAuth.getAuthHeader);

// Spinner Loading Status
export const getSpinnerState = createFeatureSelector<fromSpinner.State>('spinner');
export const getIsSpinnerLoading = createSelector(getSpinnerState, fromSpinner.isLoading);

// Market Selectors
export const getMarketState = createFeatureSelector<fromMarket.State>('market');
export const getCreatorList = createSelector(getMarketState, fromMarket.getCreatorList);
export const getChannelList = createSelector(getMarketState, fromMarket.getChannelList);

// Market Selectors
export const getChannelState = createFeatureSelector<fromChannel.State>('channel');
export const getDealList = createSelector(getChannelState, fromChannel.getDealList);

/// BELOW THIS LINE DEVELOPMENT ONLY
// From the ngrx example app
/**
 * A logger function that will only be used in nonproduction environments
 * @see https://github.com/ngrx/platform/blob/master/example-app/app/reducers/index.ts
 */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
   return function(state: State, action: any): State {
      // Log the current state and the action that will be performed from that state.
      console.log('state', state);
      console.log('action', action);
     return reducer(state, action);
   };
}
/// ABOVE THIS LINE DEVELOPMENT ONLY
/**
 * Add the local storage sync
 * @param reducer action of reducer
 * @see https://github.com/btroncone/ngrx-store-localstorage/blob/master/README.md
 */
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
   return localStorageSync({keys: ['auth'], rehydrate: true})(reducer);
 }

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 * @see https://github.com/ngrx/platform/blob/master/example-app/app/reducers/index.ts
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, localStorageSyncReducer]
  : [localStorageSyncReducer];
