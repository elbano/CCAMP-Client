import { User } from './user.class';
import { Content } from './content.class';
import { Deal } from './deal.class';

export class ContentCreator extends User {
    id: number;
    name: string;
    lastName: string;
    companyName: string;
    contentList: Content[];
    dealList: Deal[];
}
