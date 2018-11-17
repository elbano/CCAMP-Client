import { Advertisement } from './advertisement.class';
import { Sponsor } from './sponsor.class';
import { Deal } from './deal.class';

export class Campaign {
    Id: number;
    Guid: string;
    Name: string;
    StartDate: Date;
    EndDate: Date;
    Sponsor: Sponsor;
    AdvertisementList: Advertisement[];
    DealList: Deal[];
}
