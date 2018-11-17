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
    Id: number;
    Guid: string;
    Campaign: Campaign;
    Channel: Channel;
    Amount: number;
    Modality: EDealModality;
    Status: EDealStatus; // PROPOSAL, ACCEPTED or ONGOING, FINISHED

    constructor(options: any) {
        this.Id = options.Id;
        this.Guid = options.Guid;
        this.Campaign = options.Campaign;
        this.Channel = options.Channel;
        this.Status = options.Status;
        this.Amount = options.Amount;
        this.Modality = options.Modality;
    }
}
