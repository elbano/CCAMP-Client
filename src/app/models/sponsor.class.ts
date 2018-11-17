import { User } from './user.class';
import { Campaign } from './campaign.class';

export class Sponsor extends User {
    Id: number;
    CompanyName: string;
    CampaignList: Campaign[];
}
