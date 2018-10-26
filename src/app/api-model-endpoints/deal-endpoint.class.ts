import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deal } from '../models/deal.class';
import { serverBaseURL } from '../shared/serverBasedUrl';

export class DealEndpoint {

    constructor(private http: HttpClient) { }

    public fetchDealListData(): Observable<Deal[]> {
        return this.http.get<Deal[]>(serverBaseURL + 'api/deals/');
    }
}