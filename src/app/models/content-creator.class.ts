import { User } from './user.class';
import { Channel } from './channel.class';

export class ContentCreator extends User {
    Id: number;
    Name: string;
    LastName: string;
    CompanyName: string;
    ChannelList: Channel[];

    constructor(options: any) {
        super();
        this.Guid = options.Guid;
        this.Name = options.Came;
        this.LastName = options.CastName;
        this.CompanyName = options.CompanyName;
        this.ChannelList = options.ChannelList;
    }
}
