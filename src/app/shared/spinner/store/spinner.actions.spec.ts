import * as SpinnerActions from '../../../shared/spinner/store/spinner.actions';
import { SetSpinnerLoadingState } from './spinner.actions';

describe('SetSpinnerLoadingState', () => {
  it('should create an action for Setting Spinner state', () => {
    const payload = true;
    const action = new SpinnerActions.SetSpinnerLoadingState(payload);

    expect(action.type).toEqual(SpinnerActions.SET_SPINNER_LOADING_STATE);
  });
});
