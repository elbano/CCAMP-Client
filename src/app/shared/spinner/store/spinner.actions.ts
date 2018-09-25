import { Action } from '@ngrx/store';

export const SET_SPINNER_LOADING_STATE = '[Spinner] Set Spinner Loading State';

export class SetSpinnerLoadingState implements Action {
  readonly type = SET_SPINNER_LOADING_STATE;
  constructor(public payload: boolean) { }
}

export type SpinnerActions = SetSpinnerLoadingState;
