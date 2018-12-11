import { Channel } from "./channel.class";
import { Campaign } from "./campaign.class";

export enum EStatusMode {
    sm_Inactive = 0,
    sm_Active = 1,
    sm_Suspended = 2,
}

export class User {
    Id: number;
    Name: string;
    LastName: string;
    CompanyName: string;
    Guid: string;
    Email: string;
    UserName: string;
    Status: EStatusMode;
    CreationDate: Date;
    ChannelList: Channel[];
    CampaignList: Campaign[];

    constructor(options?: any) {
        if (options) {
            this.Guid = options.Guid;
            this.Name = options.Came;
            this.LastName = options.CastName;
            this.CompanyName = options.CompanyName;
            this.ChannelList = options.ChannelList;
        }

    }
}
