import { User } from './user.class';
import { Channel } from './channel.class';

export class ContentCreator extends User {
    id: number;
    name: string;
    lastName: string;
    companyName: string;
    channelList: Channel[];

    constructor(options: any) {
        super();
        this.guid = options.guid;
        this.name = options.name;
        this.lastName = options.lastName;
        this.companyName = options.companyName;
        this.channelList = options.channelList;
    }
}
