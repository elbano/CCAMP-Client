import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deal } from '../../models/deal.class';
import { DealEndpoint } from '../../api-model-endpoints/deal-endpoint.class';

@Injectable()
export class ChannelDashboardService {

    private dealEndpoint: DealEndpoint;

    constructor(private http: HttpClient) {
        this.dealEndpoint = new DealEndpoint(http);
    }

    public getDeals(): Observable<Deal[]> {
        return this.dealEndpoint.fetchDealListData();
    }
}
