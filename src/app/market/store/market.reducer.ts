import { GET_CREATOR_LIST, STORE_CREATOR_LIST, MarketActions } from './market.actions';
import { ContentCreator } from '../../models/content-creator.class';


export interface State {
  creatorList: ContentCreator[];
}

export const initialState: State = {
  creatorList: null
};

export function marketReducer(state = initialState, action: MarketActions) {
  switch (action.type) {
    // Note : This Get Slide list will call Effects under the hood.
    case GET_CREATOR_LIST :
      return {
        ...state
      };
    case STORE_CREATOR_LIST :
      return {
        ...state,
        creatorList: action.payload
      };
      return {
        ...state
      };
    default: {
      return state;
    }
  }
}

export const getCreatorList = (state: State) => {
   state = typeof state === 'undefined' ? initialState : state;
   return state.creatorList;
};

