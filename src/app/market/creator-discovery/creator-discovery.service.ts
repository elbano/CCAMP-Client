import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserEndpoint } from '../../api-model-endpoints/user-endpoint.class';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel.class';
import { ChannelEndpoint } from '../../api-model-endpoints/channel-endpoint.class';
import { User } from 'src/app/models/user.class';

@Injectable()
export class CreatorDiscoveryService {

    private userEndpoint: UserEndpoint;
    private channelEndpoint: ChannelEndpoint

    constructor(private http: HttpClient) {
        this.userEndpoint = new UserEndpoint(http);
        this.channelEndpoint = new ChannelEndpoint(http);
    }

    public getCreators(): Observable<User[]> {
        return this.userEndpoint.fetchCreatorListData();
    }

    public getChannels(): Observable<Channel[]> {
        return this.channelEndpoint.fetchChannelListData();
    }

    public getChannelsByKeyWords(keyWords: string): Observable<Channel[]> {
        return this.channelEndpoint.fetchChannelListDataByKeyWords(keyWords);
    }
}
