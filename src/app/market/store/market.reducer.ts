import { GET_CREATOR_LIST, STORE_CREATOR_LIST, GET_CREATOR, STORE_CREATOR,
  GET_CHANNEL_LIST, STORE_CHANNEL_LIST, MarketActions, GET_CHANNEL_LIST_BY_KEYWORD, 
  STORE_CHANNEL_LIST_BY_KEYWORD } from './market.actions';
import { ContentCreator } from '../../models/content-creator.class';
import { Channel } from '../../models/channel.class';


export interface State {
  creatorList: ContentCreator[];
  creator: ContentCreator;
  channelList: Channel[];
}

export const initialState: State = {
  creatorList: null,
  creator: null,
  channelList: null
};

export function marketReducer(state = initialState, action: MarketActions) {
  switch (action.type) {
    // Note : This Get Slide list will call Effects under the hood.
    case GET_CREATOR_LIST:
      return {
        ...state
      };
    case STORE_CREATOR_LIST:
      return {
        ...state,
        creatorList: [ ...action.payload ]
      };
    case GET_CREATOR:
      return {
        ...state
      };
    case STORE_CREATOR:
      return {
        ...state,
        creator: { ...action.payload }
      };
    case GET_CHANNEL_LIST:
      return {
        ...state
      };
    case STORE_CHANNEL_LIST:
      return {
        ...state,
        channelList: [ ...action.payload ]
      };
    case GET_CHANNEL_LIST_BY_KEYWORD:
      return {
        ...state
      };
    case STORE_CHANNEL_LIST_BY_KEYWORD:
      return {
        ...state,
        channelList: [ ...action.payload ]
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

export const getChannelList = (state: State) => {
  state = typeof state === 'undefined' ? initialState : state;
  return state.channelList;
};

