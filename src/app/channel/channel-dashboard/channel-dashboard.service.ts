import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deal } from '../../models/deal.class';
import { DealEndpoint } from '../../api-model-endpoints/deal-endpoint.class';
import { TokenEndpoint } from '../../api-model-endpoints/token-endpoint.class';

@Injectable()
export class ChannelDashboardService {

    private dealEndpoint: DealEndpoint;
    private tokenEndpoint: TokenEndpoint;

    constructor(private http: HttpClient) {
        this.dealEndpoint = new DealEndpoint(http);
        this.tokenEndpoint = new TokenEndpoint(http);
    }

    public getDeals(): Observable<Deal[]> {
        return this.dealEndpoint.fetchDealListData();
    }

    public getToken(): Observable<string> {
        return this.tokenEndpoint.prueba();
    }
}
