import { ContentCreator } from './contentCreator.class';
import { Transaction } from './transaction.class';

export class Content {
    id: number;
    guid: string;
    title: string;
    urlMediaPath: string;
    creationDate: Date;
    contentCreator: ContentCreator;
    transactionList: Transaction[];
}
