import { Advertisement } from './advertisement.class';
import { Sponsor } from './sponsor.class';
import { Deal } from './deal.class';

export class Campaign {
    id: number;
    guid: string;
    name: string;
    startDate: Date;
    endDate: Date;
    sponsor: Sponsor;
    advertisementList: Advertisement[];
    dealList: Deal[];
}
