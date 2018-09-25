import { SpinnerActions, SET_SPINNER_LOADING_STATE } from './spinner.actions';
export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false
};

export function spinnerReducer(state = initialState, action: SpinnerActions) {
  switch (action.type) {
    case SET_SPINNER_LOADING_STATE:
      return {
        ...state,
        loading : action.payload
      };
    default: {
      return state;
    }
  }
}

export const isLoading = (state: State) => {
  state = typeof state === 'undefined' ? initialState : state;
  if (state.loading) {
    return state.loading;
  } else {
    return false;
  }
};
