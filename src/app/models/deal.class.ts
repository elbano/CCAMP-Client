import { Campaign } from './campaign.class';
import { ContentCreator } from './content-creator.class';

export class Deal {
    id: number;
    guid: string;
    campaign: Campaign;
    contentCreator: ContentCreator;
}
