import { GET_DEAL_LIST, STORE_DEAL_LIST, ChannelActions } from './channel.actions';
import { Deal } from '../../models/Deal.class';


export interface State {
  dealList: Deal[];
}

export const initialState: State = {
  dealList: null
};

export function channelReducer(state = initialState, action: ChannelActions) {
  switch (action.type) {
    // Note : This Get Slide list will call Effects under the hood.
    case GET_DEAL_LIST:
      return {
        ...state
      };
    case STORE_DEAL_LIST:
      return {
        ...state,
        dealList: [ ...action.payload ]
      };
      return {
        ...state
      };
    default: {
      return state;
    }
  }
}

export const getDealList = (state: State) => {
  state = typeof state === 'undefined' ? initialState : state;
  return state.dealList;
};

