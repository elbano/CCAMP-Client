import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentCreatorEndpoint } from '../../api-model-endpoints/content-creator-endpoint.class';
import { ContentCreator } from '../../models/content-creator.class';
import { Observable } from 'rxjs';

@Injectable()
export class CreatorDiscoveryService {

    private contentCreatorEndpoint: ContentCreatorEndpoint;

    constructor(private http: HttpClient) {
        this.contentCreatorEndpoint = new ContentCreatorEndpoint(http);
    }

    public getCreatorsArray(): ContentCreator[] {
        let creatorList: ContentCreator[];
        this.contentCreatorEndpoint.fetchCreatorListData().subscribe(result => {
            console.log(result);
            creatorList = result;
        });
        return creatorList;
    }

    public getCreators(): Observable<ContentCreator[]> {
        return this.http.get<ContentCreator[]>('http://localhost:44958/api/ContentCreators/');
    }
}
