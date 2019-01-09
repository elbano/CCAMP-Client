import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverBaseURL } from '../shared/serverBasedUrl';

export class TokenEndpoint{

    constructor(private http: HttpClient) { }

    public fetchToken(): Observable<string>{
        return this.http.get<string>(serverBaseURL + 'api/test/token');
    }

    public prueba(): Observable<string> {
        return this.http.get<string>(serverBaseURL + 'api/test/video/oz2q09y20HY');
    }

}