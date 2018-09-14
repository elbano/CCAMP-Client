import { Campaign } from './campaign.class';
import { ContentCreator } from './contentCreator.class';

export class Deal {
    id: number;
    guid: string;
    campaign: Campaign;
    contentCreator: ContentCreator;
}
