import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverBaseURL } from '../shared/serverBasedUrl';
import { User } from '../models/user.class';

export class ContentCreatorEndpoint {

    constructor(private http: HttpClient) { }

    public fetchCreatorListData(): Observable<User[]> {
        return this.http.get<User[]>(serverBaseURL + 'api/User/');
    }

    public fetchCreatorData(guid: string): Observable<User> {
        return this.http.get<User>(serverBaseURL + 'api/User/' + guid);
    }    
}
