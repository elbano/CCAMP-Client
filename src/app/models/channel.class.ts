import { Deal } from './deal.class';
import { Content } from 'src/app/models/content.class';
import { User } from './user.class';

export class Channel {
    Id: number;
    Guid: string;
    Name: string;
    CreationDate: Date;
    ThumbnailURL: string;
    ContentCreatorUser: User;
    ContentList: Content[];
    DealList: Deal[];

    constructor(options: any) {
        this.Guid = options.Guid;
        this.Name = options.Name;
        this.CreationDate = options.CreationDate;
        this.ContentCreatorUser = options.ContentCreatorUser;
        this.ContentList = options.ContentList;
        this.DealList = options.DealList;
  }
}
