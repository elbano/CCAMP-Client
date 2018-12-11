import { Advertisement } from './advertisement.class';
import { Deal } from './deal.class';
import { User } from './user.class';

export class Campaign {
    Id: number;
    Guid: string;
    Name: string;
    StartDate: Date;
    EndDate: Date;
    SponsorUser: User;
    AdvertisementList: Advertisement[];
    DealList: Deal[];
}
