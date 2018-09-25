import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentCreator } from '../models/content-creator.class';
import { serverBaseURL } from '../shared/serverBasedUrl';

export class ContentCreatorEndpoint {

    constructor(private http: HttpClient) { }

    public fetchCreatorListData(): Observable<ContentCreator[]> {
        return this.http.get<ContentCreator[]>(serverBaseURL + 'api/ContentCreators/');
    }

    public fetchCreatorData(guid: string): Observable<ContentCreator> {
        return this.http.get<ContentCreator>(serverBaseURL + 'api/ContentCreators/' + guid);
    }
}
