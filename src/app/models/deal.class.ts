import { Campaign } from './campaign.class';
import { Channel } from './channel.class';

export class Deal {
    id: number;
    guid: string;
    campaign: Campaign;
    channel: Channel;
}
