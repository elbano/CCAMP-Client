import { Action } from '@ngrx/store';
import { ContentCreator } from '../../models/content-creator.class';

export const GET_CREATOR_LIST = '[SlideList] Get Creator List';
export const STORE_CREATOR_LIST = '[SlideList] Store Creator List';

export class GetCreatorList implements Action {
  readonly type = GET_CREATOR_LIST;
}

export class StoreCreatorList implements Action {
  readonly type = STORE_CREATOR_LIST;
  constructor (public payload: ContentCreator[]) { }
}

export type MarketActions = GetCreatorList | StoreCreatorList;
