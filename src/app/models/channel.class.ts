import { Deal } from './deal.class';
import { ContentCreator } from './content-creator.class';
import { Content } from 'src/app/models/content.class';

export class Channel {
    id: number;
    guid: string;
    name: string;
    creationDate: Date;
    thumbnailURL: string;
    contentCreator: ContentCreator;
    contentList: Content[];
    dealList: Deal[];

    constructor(options: any) {
        this.guid = options.guid;
        this.name = options.name;
        this.creationDate = options.creationDate;
        this.contentCreator = options.contentCreator;
        this.contentList = options.contentList;
        this.dealList = options.dealList;
  }
}
