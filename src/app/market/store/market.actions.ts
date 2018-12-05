import { Action } from '@ngrx/store';
import { ContentCreator } from '../../models/content-creator.class';
import { Channel } from '../../models/channel.class';

export const GET_CREATOR_LIST = '[Market] Get Creator List';
export const STORE_CREATOR_LIST = '[Market] Store Creator List';
export const GET_CREATOR = '[Market] Get Creator';
export const STORE_CREATOR = '[Market] Store Creator';
export const GET_CHANNEL_LIST = '[Market] Get Channel List';
export const STORE_CHANNEL_LIST = '[Market] Store Channel List';
export const GET_CHANNEL_LIST_BY_KEYWORD = '[Market] Get Channel List By Keyword';
export const STORE_CHANNEL_LIST_BY_KEYWORD = '[Market] Store Channel List By Keyword';

export class GetCreatorList implements Action {
  readonly type = GET_CREATOR_LIST;
}

export class StoreCreatorList implements Action {
  readonly type = STORE_CREATOR_LIST;
  constructor (public payload: ContentCreator[]) { }
}

export class GetCreator implements Action {
  readonly type = GET_CREATOR;
  constructor(public payload: string) { }
}

export class StoreCreator implements Action {
  readonly type = STORE_CREATOR;
  constructor (public payload: ContentCreator) { }
}

export class GetChannelList implements Action {
  readonly type = GET_CHANNEL_LIST;
}

export class StoreChannelList implements Action {
  readonly type = STORE_CHANNEL_LIST;
  constructor (public payload: Channel[]) { }
}

export class GetChannelListByKeyWord implements Action {
  readonly type = GET_CHANNEL_LIST_BY_KEYWORD;
  constructor (public payload: string) { }
}

export class StoreChannelListByKeyWord implements Action {
  readonly type = STORE_CHANNEL_LIST_BY_KEYWORD;
  constructor (public payload: Channel[]) { }
}

export type MarketActions = GetCreatorList | StoreCreatorList | GetCreator | StoreCreator |
  GetChannelList | StoreChannelList | GetChannelListByKeyWord | StoreChannelListByKeyWord;
