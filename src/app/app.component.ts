import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { LogService } from './core/services/logger.service';
import * as fromRoot from './app.reducer';
import * as AuthActions from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCAMPClient';

  constructor(private rootStore: Store<fromRoot.State>, private logger: LogService) {
    this.rootStore.dispatch(new AuthActions.CallHandleAuthentication());
    this.logger.log('message from AppComponent constructor to server log', 'DEBUG');
 }
}
