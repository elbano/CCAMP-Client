import { GET_PROPOSAL_LIST, STORE_PROPOSAL_LIST, ChannelActions } from './channel.actions';
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
    case GET_PROPOSAL_LIST:
      return {
        ...state
      };
    case STORE_PROPOSAL_LIST:
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

export const getProposalList = (state: State) => {
  state = typeof state === 'undefined' ? initialState : state;
  return state.dealList;
};

