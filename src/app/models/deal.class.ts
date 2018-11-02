import { Campaign } from './campaign.class';
import { Channel } from './channel.class';

export enum EDealStatus {
    dm_Proposal = 0,
    dm_Accepted = 1,  // marked by content creator
    dm_Completed = 2, // marked by content creator
    dm_Finished = 3, // marked by sponsor
    dm_Denied = 4
}

export enum EDealModality {
    dm_Total = 0,
    dm_PerView = 1
}

export class Deal {
    id: number;
    guid: string;
    campaign: Campaign;
    channel: Channel;
    amount: number;
    modality: EDealModality;
    status: EDealStatus; // PROPOSAL, ACCEPTED or ONGOING, FINISHED

    constructor(options: any) {
        this.id = options.id;
        this.guid = options.guid;
        this.campaign = options.campaign;
        this.channel = options.channel;
        this.status = options.status;
        this.amount = options.amount;
        this.modality = options.modality;
    }
}
