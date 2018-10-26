import { Action } from '@ngrx/store';
import { Deal } from '../../models/Deal.class';

export const GET_PROPOSAL_LIST = '[Channel] Get Proposal List'; // DEAL class
export const STORE_PROPOSAL_LIST = '[Channel] Store Proposal List';

export class GetProposalList implements Action {
  readonly type = GET_PROPOSAL_LIST;
}

export class StoreProposalList implements Action {
  readonly type = STORE_PROPOSAL_LIST;
  constructor (public payload: Deal[]) { }
}

export type ChannelActions = GetProposalList | StoreProposalList;
