import { Campaign } from './campaign.class';
import { Transaction } from './transaction.class';

export class Advertisement {
    id: number;
    guid: string;
    name: string;
    type: string;
    storageURLMediaPath: string;
    campaign: Campaign;
    transactionList: Transaction[];
}
