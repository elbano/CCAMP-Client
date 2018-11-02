import { CollectionViewer, DataSource } from '@angular/cdk/collections';

import { Observable, BehaviorSubject } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as SpinnerActions from '../../shared/spinner/store/spinner.actions';
import { GetProposalList } from '../store/channel.actions';
import { getProposalList } from '../../app.reducer';
import { Deal } from 'src/app/models/deal.class';

export class ChannelDashboardDataSource extends DataSource<Deal> {

    private dealListSubject = new BehaviorSubject<Deal[]>([]);

    constructor(private rootStore: Store<fromRoot.State>) {
        super();
    }

    fetchDeals(): any {
        // Dispatch a Ngrx action to fetch data from Store
        this.rootStore.dispatch(new GetProposalList());

        this.rootStore.pipe(select(getProposalList))
            .subscribe(dealList => {
                if (dealList) {
                    // stop the spinner
                    this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(false));
                    return this.dealListSubject.next(dealList);
                }
            });
    }

    connect(collectionViewer: CollectionViewer): Observable<Deal[]> {
        return this.dealListSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        // Must end the subject subscription to avoid memory leaks.
        this.dealListSubject.complete();
    }
}
