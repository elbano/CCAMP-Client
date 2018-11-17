import { Content } from './content.class';
import { Advertisement } from './advertisement.class';

export class Transaction {
    Id: number;
    Guid: string;
    CreationDate: Date;
    Content: Content;
    Advertisement: Advertisement;
}
