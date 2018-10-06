import { CollectionViewer, DataSource } from '@angular/cdk/collections';

import { Observable, BehaviorSubject } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as SpinnerActions from '../../shared/spinner/store/spinner.actions';
import { ContentCreator } from '../../models/content-creator.class';
import { GetCreatorList, GetChannelList } from '../store/market.actions';
import { getCreatorList, getChannelList } from '../../app.reducer';
import { CreatorDiscoveryService } from './creator-discovery.service';
import { Channel } from '../../models/channel.class';

/**
 * This is the data source for the slide list data table.
 * Doing the data source this way sets up to do filtering, sorting and
 * pagination on the server side.
 * See https://blog.angular-university.io/angular-material-data-table/
 * as a reference on how this can be done.
 */
export class CreatorDiscoveryDataSource extends DataSource<Channel> {

    private channelListSubject = new BehaviorSubject<Channel[]>([]);

    constructor(private creatorDiscoveryService: CreatorDiscoveryService, private rootStore: Store<fromRoot.State>) {
        super();
    }

    fetchChannels(): any {
        // Dispatch a Ngrx action to fetch data from Store
        this.rootStore.dispatch(new GetChannelList());

        this.rootStore.pipe(select(getChannelList))
            .subscribe(channelList => {
                if (channelList) {
                    // stop the spinner
                    this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(false));
                    return this.channelListSubject.next(channelList);
                }
            });
    }

    connect(collectionViewer: CollectionViewer): Observable<Channel[]> {
        return this.channelListSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        // Must end the subject subscription to avoid memory leaks.
        this.channelListSubject.complete();
    }
}
