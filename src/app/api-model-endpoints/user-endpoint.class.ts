import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverBaseURL } from '../shared/serverBasedUrl';
import { User } from '../models/user.class';
import { catchError, map } from 'rxjs/operators';

export class UserEndpoint {

    constructor(private http: HttpClient) { }

    public fetchCreatorListData(): Observable<User[]> {
        return this.http.get<User[]>(serverBaseURL + 'api/user/');
    }

    public fetchCreatorData(guid: string): Observable<User> {
        return this.http.get<User>(serverBaseURL + 'api/user/' + guid);
    }    

    public setUserData(): Observable<object> {
        return this.http.post<object>(serverBaseURL + 'api/user/', {});        
    }   
    
    public setUserDataWithUser(user: User): Observable<object> {
        return this.http.post<object>(serverBaseURL + 'api/user/', user);
    }   
}
