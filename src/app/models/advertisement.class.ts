import { Campaign } from './campaign.class';
import { Transaction } from './transaction.class';

export class Advertisement {
    Id: number;
    Guid: string;
    Name: string;
    Type: string;
    StorageURLMediaPath: string;
    Campaign: Campaign;
    TransactionList: Transaction[];
}
