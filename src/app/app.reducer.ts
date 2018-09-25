import { ActionReducerMap, createFeatureSelector, createSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromSpinner from './shared/spinner/store/spinner.reducer';
import * as fromMarket from './market/store/market.reducer';
import { RouterStateUrl } from './router-store-utils';
import { environment } from '../environments/environment';


export interface State {
//    auth: fromAuth.State;
//    viewer: fromViewer.State;
   router: fromRouter.RouterReducerState<RouterStateUrl>;
   spinner: fromSpinner.State;
   market: fromMarket.State;
}

export const reducers: ActionReducerMap<State> = {
//    auth: fromAuth.authReducer,
//    viewer: fromViewer.slideViewerReducer,
   router: fromRouter.routerReducer,
   spinner: fromSpinner.spinnerReducer,
   market: fromMarket.marketReducer
};

// The parameter 'auth' must match the name in the interface State auth.
// export const getAuthState = createFeatureSelector<fromAuth.State>('auth');
// export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);
// export const getAuthHeader = createSelector(getAuthState, fromAuth.getAuthHeader);

// Slide viewer selectors
// export const getSlideViewerState = createFeatureSelector<fromViewer.State>('viewer');
// export const getSlideScanData = createSelector(getSlideViewerState, fromViewer.calculateSlideScan);
// export const isFLSlide = createSelector(getSlideViewerState, fromViewer.calculateIsFLSlide);
// export const getSelectedLayer = createSelector(getSlideViewerState, fromViewer.calculateSelectedLayer);
// export const getLayersForToggleVisibility = createSelector(getSlideViewerState, fromViewer.calculateVisibilityAllLayers);
// export const getLayerSelectedForColorChange = createSelector(getSlideViewerState, fromViewer.calculateSelectedLayer);
// export const getScanLayerList = createSelector(getSlideViewerState, fromViewer.calculateScanLayerList);
// export const getAnnotationList = createSelector(getSlideViewerState, fromViewer.calculateAnnotationList);
// export const getContributionStudy = createSelector(getSlideViewerState, fromViewer.calculateContributionStudy);
// export const canAnnotate = createSelector(getSlideViewerState, fromViewer.calculateCanAnnotate);
// export const getAnnotationMode = createSelector(getSlideViewerState, fromViewer.calculateAnnotationMode);

// Spinner Loading Status
export const getSpinnerState = createFeatureSelector<fromSpinner.State>('spinner');
export const getIsSpinnerLoading = createSelector(getSpinnerState, fromSpinner.isLoading);

// Market Selectors
export const getCreatorListState = createFeatureSelector<fromMarket.State>('market');
export const getCreatorList = createSelector(getCreatorListState, fromMarket.getCreatorList);
// export const getPrevSlide = createSelector(getSlideListState, fromSlideList.getPrevSlide);
// export const getNextSlide = createSelector(getSlideListState, fromSlideList.getNextSlide);


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
