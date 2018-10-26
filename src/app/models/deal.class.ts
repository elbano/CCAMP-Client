import { Campaign } from './campaign.class';
import { Channel } from './channel.class';

export class Deal {
    id: number;
    guid: string;
    campaign: Campaign;
    channel: Channel;
    amount: number;
    state: string; // PROPOSAL, ACCEPTED or ONGOING, FINISHED

    constructor(options: any) {
        this.id = options.id;
        this.guid = options.guid;
        this.campaign = options.campaign;
        this.channel = options.channel;
  }
}
