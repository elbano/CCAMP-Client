import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import * as fromRoot from '../app.reducer';
import * as AuthActions from '../auth/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;

  constructor(private rootStore: Store<fromRoot.State>, private router: Router) { }

  ngOnInit() {
    this.isAuthenticated$ = this.rootStore.pipe(select(fromRoot.getIsAuth));

    this.isAuthenticated$
       .pipe(take(1)).subscribe((isAuth) => {
          if (isAuth) {
             this.router.navigate(['discovery']);
          }
       });
  }

  login() {
    this.rootStore.dispatch(new AuthActions.CallAuthorize());
 }

}
