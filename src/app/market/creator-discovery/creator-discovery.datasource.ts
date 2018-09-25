import { CollectionViewer, DataSource } from '@angular/cdk/collections';

import { Observable, BehaviorSubject } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as SpinnerActions from '../../shared/spinner/store/spinner.actions';
import { ContentCreator } from '../../models/content-creator.class';
import { GetCreatorList } from '../store/market.actions';
import { getCreatorList } from '../../app.reducer';
import { CreatorDiscoveryService } from './creator-discovery.service';

/**
 * This is the data source for the slide list data table.
 * Doing the data source this way sets up to do filtering, sorting and
 * pagination on the server side.
 * See https://blog.angular-university.io/angular-material-data-table/
 * as a reference on how this can be done.
 */
export class CreatorDiscoveryDataSource extends DataSource<ContentCreator> {

    private creatorListSubject = new BehaviorSubject<ContentCreator[]>([]);

    constructor(private creatorDiscoveryService: CreatorDiscoveryService, private rootStore: Store<fromRoot.State>) {
        super();
    }

    /**
     * fetchSlides function dispatches an Ngrx action(GET_SLIDE_LIST) to fetch data from Store
     * GET_SLIDE_LIST Action checks if the data is there or not, if not there then do network request which
     * If not there then it makes a network request to get all the slides for the currently logged in user.
     * The response from this call will be shown in the slide list data table.
     */
    fetchCreators(): any {
        // Dispatch a Ngrx action to fetch data from Store
        this.rootStore.dispatch(new GetCreatorList());

        this.rootStore.pipe(select(getCreatorList))
            .subscribe(creatorList => {
                if (creatorList) {
                    // If slides are there then stop the spinner
                    this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(false));
                    return this.creatorListSubject.next(creatorList);
                }
            });
    }

    connect(collectionViewer: CollectionViewer): Observable<ContentCreator[]> {
        return this.creatorListSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        // Must end the subject subscription to avoid memory leaks.
        this.creatorListSubject.complete();
    }
}
