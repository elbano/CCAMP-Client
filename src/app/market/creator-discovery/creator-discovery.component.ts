import { Component, OnInit } from '@angular/core';
import { ContentCreator } from '../../models/content-creator.class';
import { CreatorDiscoveryService } from './creator-discovery.service';
import { CreatorDiscoveryDataSource } from './creator-discovery.datasource';
import * as SpinnerActions from '../../shared/spinner/store/spinner.actions';
import * as fromRoot from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-creator-discovery',
  templateUrl: './creator-discovery.component.html',
  styleUrls: ['./creator-discovery.component.css']
})
export class CreatorDiscoveryComponent implements OnInit {

  dataSource: CreatorDiscoveryDataSource;

  displayedColumns = ['thumbnail', 'label', 'slideName', 'acquisitionDate'];

  contentCreatorList: ContentCreator[];

  constructor(private rootStore: Store<fromRoot.State>, private creatorDiscoveryService: CreatorDiscoveryService) { }

  ngOnInit() {
    // this.contentCreatorList = this.creatorDiscoveryService.getCreators();
    this.creatorDiscoveryService.getCreatorsArray();

    this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(true));
    this.dataSource = new CreatorDiscoveryDataSource(this.creatorDiscoveryService, this.rootStore);
    this.dataSource.fetchCreators();
  }

}
