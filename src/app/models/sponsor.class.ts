import { User } from './user.class';
import { Campaign } from './campaign.class';

export class Sponsor extends User {
    id: number;
    companyName: string;
    campaignList: Campaign[];
}
