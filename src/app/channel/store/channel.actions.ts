import { Action } from '@ngrx/store';
import { Deal } from '../../models/Deal.class';

export const GET_DEAL_LIST = '[Channel] Get Deal List'; // DEAL class
export const STORE_DEAL_LIST = '[Channel] Store Deal List';

export class GetDealList implements Action {
  readonly type = GET_DEAL_LIST;
}

export class StoreDealList implements Action {
  readonly type = STORE_DEAL_LIST;
  constructor (public payload: Deal[]) { }
}

export type ChannelActions =  StoreDealList | GetDealList;
