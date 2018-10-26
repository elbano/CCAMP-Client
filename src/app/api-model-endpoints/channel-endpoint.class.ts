import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverBaseURL } from '../shared/serverBasedUrl';
import { Channel } from '../models/channel.class';

export class ChannelEndpoint {

    constructor(private http: HttpClient) { }

    public fetchChannelListData(): Observable<Channel[]> {
        return this.http.get<Channel[]>(serverBaseURL + 'api/Channel/');
    }
}
