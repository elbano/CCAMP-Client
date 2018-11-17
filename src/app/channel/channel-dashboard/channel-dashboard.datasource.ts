import { CollectionViewer, DataSource } from '@angular/cdk/collections';

import { Observable, BehaviorSubject } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as SpinnerActions from '../../shared/spinner/store/spinner.actions';
import { GetDealList } from '../store/channel.actions';
import { getDealList } from '../../app.reducer';
import { Deal, EDealStatus } from 'src/app/models/deal.class';

export class ChannelDashboardDataSource extends DataSource<Deal> {

    private dealListSubject = new BehaviorSubject<Deal[]>([]);

    constructor(private rootStore: Store<fromRoot.State>, private filterDeal: any) {
        super();
    }

    fetchDeals(): any {
        // Dispatch a Ngrx action to fetch data from Store
        this.rootStore.dispatch(new GetDealList());

        this.rootStore.pipe(select(getDealList))
            .subscribe(dealList => {
                if (dealList) {
                    // stop the spinner
                    console.log(this.filterDeal);
                    this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(false));
                    return this.dealListSubject.next(dealList.filter(this.filterDeal));
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
