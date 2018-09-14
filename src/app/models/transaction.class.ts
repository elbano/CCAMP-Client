import { Content } from './content.class';
import { Advertisement } from './advertisement.class';

export class Transaction {
    id: number;
    guid: string;
    creationDate: Date;
    content: Content;
    advertisement: Advertisement;
}
