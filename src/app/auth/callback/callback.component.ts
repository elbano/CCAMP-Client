import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../app.reducer';
import { select, Store } from '@ngrx/store';
import { getIsAuth } from '../../app.reducer';
import { Router } from '@angular/router';
import * as SpinnerActions from '../../shared/spinner/store/spinner.actions';

@Component({
   selector: 'app-callback',
   templateUrl: './callback.component.html',
   styleUrls: ['./callback.component.scss', '../../app.component.scss']
})
export class CallbackComponent implements OnInit {
   // override top css class value to 20%
   // this will convert to styles{ top: 20% and right: 43%}
   callbackTopStyle = 20;
   callbackRightStyle = 43;

   constructor( private rootStore: Store<fromRoot.State>, private router: Router) { }

   ngOnInit() {
      this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(true));
      // The callback component is being double tapped at log in because Auth0 holds
      // the the user's authentication information in the hash URL (first tap). Angular then removes
      // the hash which directs up back to this route. (second tap)
      // Subscribing to the getIsAuth redirects us to the slides page after the second visit
      // to the callback which fixes not being routed the the slides page in Firefox.
      // TODO: Still need to fix callback page being double tapped.
      
     this.rootStore.pipe(select(getIsAuth)).subscribe((isAuth) => {
        if (isAuth) {
            this.router.navigate(['channel/1']);
            this.rootStore.dispatch(new SpinnerActions.SetSpinnerLoadingState(false));
        } else {
            this.router.navigate(['']);
        }
     });
   }

}
