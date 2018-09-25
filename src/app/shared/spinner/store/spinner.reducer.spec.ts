import * as fromSpinnerReducer from './spinner.reducer';
import * as fromSpinnerActions from './spinner.actions';

describe('SpinnerReducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;
    const result = fromSpinnerReducer.spinnerReducer(undefined, action);
    const { initialState } = fromSpinnerReducer;
    expect(result).toEqual(initialState);
  });
});

describe('SET_SPINNER_LOADING_STATE Action', () => {
  it('should update the spinner state', () => {
    const { initialState } = fromSpinnerReducer;
    const payload = true;
    const action = new fromSpinnerActions.SetSpinnerLoadingState(payload);
    const state = fromSpinnerReducer.spinnerReducer(initialState, action);
    expect(state.loading).toEqual(payload);
  });
});
