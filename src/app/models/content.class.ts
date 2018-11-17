import { Channel } from './channel.class';
import { Transaction } from './transaction.class';

export class Content {
    Id: number;
    Guid: string;
    Title: string;
    UrlMediaPath: string;
    CreationDate: Date;
    Channel: Channel;
    TransactionList: Transaction[];
}
