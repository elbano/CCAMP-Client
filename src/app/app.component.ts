import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { OAuthService, AuthConfig, JwksValidationHandler } from 'angular-oauth2-oidc';

import { LogService } from './core/services/logger.service';
import * as fromRoot from './app.reducer';
import * as AuthActions from './auth/auth.actions';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  authConfig: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin + '/index.html',
    clientId: environment.googleClientId,
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
  };

  constructor(private rootStore: Store<fromRoot.State>, private logger: LogService, private oauthService: OAuthService) {
    this.rootStore.dispatch(new AuthActions.CallHandleAuthentication());
    this.logger.log('message from AppComponent constructor to server log', 'DEBUG');

    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}

