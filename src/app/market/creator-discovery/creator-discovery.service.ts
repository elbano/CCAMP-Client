import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentCreatorEndpoint } from '../../api-model-endpoints/content-creator-endpoint.class';
import { ContentCreator } from '../../models/content-creator.class';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channel.class';

@Injectable()
export class CreatorDiscoveryService {

    private contentCreatorEndpoint: ContentCreatorEndpoint;

    constructor(private http: HttpClient) {
        this.contentCreatorEndpoint = new ContentCreatorEndpoint(http);
    }

    public getCreators(): Observable<ContentCreator[]> {
        return this.contentCreatorEndpoint.fetchCreatorListData();
    }

    public getChannels(): Observable<Channel[]> {
        return this.contentCreatorEndpoint.fetchChannelListData();
    }
}
