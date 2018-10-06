import { Channel } from './channel.class';
import { Transaction } from './transaction.class';

export class Content {
    id: number;
    guid: string;
    title: string;
    urlMediaPath: string;
    creationDate: Date;
    channel: Channel;
    transactionList: Transaction[];
}
