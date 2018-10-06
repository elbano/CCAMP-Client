import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthGuard implements CanActivate {

   constructor(private rootStore: Store<fromRoot.State>) { }

   canActivate(): Observable<boolean>  {

      return this.rootStore.pipe(
         select(fromRoot.getIsAuth),
         map(isAuth => {
           if (!isAuth) {
             this.rootStore.dispatch(new AuthActions.CallAuthorize());
             return false;
           }

           return true;
         }),
         take(1)
       );
   }
}
