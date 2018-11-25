import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as auth0js from 'auth0-js';

import * as fromRoot from '../app.reducer';
import { environment } from '../../environments/environment';
import * as AuthActions from './auth.actions';
import { LogService } from '../core/services/logger.service';

/**
 * A class to contain all of the authentication specific implmentation
 * details regardless of the 3rd party service used
 * @class AuthService
 */
@Injectable()
export class AuthService {

    /**
     * Configure the auth0 instance
     * @param configObject The auth0 configObject that points to the client
     * @see https://manage.auth0.com/#/clients/
     */
    auth0 = new auth0js.WebAuth({
        clientID: environment.authClientID,
        domain: environment.authDomain,
        responseType: 'token id_token',
        audience: environment.serverBaseURL + 'api', // Allows authenticated calls to the server API
        redirectUri: environment.clientBaseURLPort + 'callback',
        scope: 'openid profile email',
        connection: 'google'
    });
    /**
     * Here we inject the NGRX store and router
     * @constructor
     * @param rootStore
     * @description Inject the fromRoot state and the Router state
     * TODO: Move the router state to the store ticket:71 private store: Store<fromRoot.State>
     * TODO: Update state on the store with the dispatch method.
     * TODO: Get state from the store with the select method.
     */
    constructor(private rootStore: Store<fromRoot.State>, private logger: LogService) { }

    /**
     * The main function to start the login process
     * @description Executes the 3rd party login
     * @see https://auth0.com/docs/quickstart/spa/angular2
     */
    public callAuthorize(): void {
        this.auth0.authorize();
    }

    /**
     * handleAuthentication: looks for the result of authentication in the URL hash.
     * Then, the result is processed with the parseHash method from auth0.js
     * @see https://auth0.com/docs/quickstart/spa/angular2
     */
    public handleAuthentication(): void {
        /**
         * Parse the url hash and extract the Auth response from a Auth flow started with {@link authorize}
         *
         * Only validates id_tokens signed by Auth0 using the RS256 algorithm using the public key exposed
         * by the `/.well-known/jwks.json` endpoint of your account.
         * Tokens signed with other algorithms, e.g. HS256 will not be accepted.
         *
         * @method parseHash
         * @param {Object} options
         * @param {String} options.hash the url hash. If not provided it will extract from window.location.hash
         * @param {String} [options.state] value originally sent in `state` parameter to {@link authorize} to mitigate XSRF
         * @param {String} [options.nonce] value originally sent in `nonce` parameter to {@link authorize} to prevent replay attacks
         * @param {String} [options.responseType] type of the response used by OAuth 2.0 flow.
         *  It can be any space separated list of the values `token`, `id_token`. For this specific method,
         *  we'll only use this value to check if the hash contains the tokens requested in the responseType.
         * @param {authorizeCallback} cb
         * @see https://github.com/auth0/auth0.js/blob/d5741becf9dff8aa9c0de7399f7550e6ea111a7a/src/web-auth/index.js
         */
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                authResult.expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
                this.rootStore.dispatch(new AuthActions.SetAuthenticated(authResult));
            } else if (err) {
                this.rootStore.dispatch(new AuthActions.SetUnauthenticated());
                this.logger.log(err);
            }
        });
    }

    /**
     * logout: Resets the auth0 state, and redirects the user to the home page on success
     * Also clears the localStorage removing any stragglers
     * @see https://auth0.com/docs/quickstart/spa/angular2
     */
    public logout(): void {
        this.auth0.logout({
            returnTo: environment.clientBaseURLPort +  'main',
            clientID: environment.authClientID
        });

        localStorage.clear();
    }
}
