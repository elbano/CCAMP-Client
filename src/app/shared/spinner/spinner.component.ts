import { Component, Input, OnInit } from '@angular/core';
import * as fromRoot from '../../app.reducer';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() diameter: number;
  @Input() strokeWidth: number;
  @Input() topStyle?: number;
  @Input() rightStyle?: number;
  isLoading: boolean;

  constructor( private rootStore: Store<fromRoot.State>) { }

  ngOnInit() {
    this.rootStore.pipe(select(fromRoot.getIsSpinnerLoading)).subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}
