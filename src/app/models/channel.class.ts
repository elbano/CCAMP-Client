import { Deal } from './deal.class';
import { ContentCreator } from './content-creator.class';
import { Content } from 'src/app/models/content.class';

export class Channel {
    Id: number;
    Guid: string;
    Name: string;
    CreationDate: Date;
    ThumbnailURL: string;
    ContentCreator: ContentCreator;
    ContentList: Content[];
    DealList: Deal[];

    constructor(options: any) {
        this.Guid = options.Guid;
        this.Name = options.Name;
        this.CreationDate = options.CreationDate;
        this.ContentCreator = options.ContentCreator;
        this.ContentList = options.ContentList;
        this.DealList = options.DealList;
  }
}
