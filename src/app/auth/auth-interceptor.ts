import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';

import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import * as fromRoot from '../app.reducer';
import { getAuthHeader } from '../app.reducer';
import * as AuthActions from './auth.actions';

import { LogService } from '../core/services/logger.service';

/**
 * The AuthInterceptor automatically attaches authentication information to requests.
 * If the JSON Web Token (JWT) access token exists it will be added to the header of
 * all requests. If the JWT does not exists, the request is unaltered.
 * @see https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8
 * for a write up on using HttpInterceptors.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

      constructor(private rootStore: Store<fromRoot.State>) { }

      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            // Get the auth header from the store.
            let authHeader;
            this.rootStore.pipe(select(getAuthHeader), take(1))
                  .subscribe(header => authHeader = header);

            if (authHeader) {
                  // There is a token. Clone the request and add the new header with the bearer token.
                  const authRequest = request.clone({ headers: request.headers.set('Authorization', authHeader) });

                  // Pass on the cloned request instead of the original request.
                  return next.handle(authRequest);
            } else {
                  // There is no token, pass on the original request.
                  return next.handle(request);
            }
      }
}

/**
 * An Interceptor to redirect the user to the login page when 401 errors occur on
 * requests from the server.
 */
@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

      constructor(private rootStore: Store<fromRoot.State>) { }

      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

            return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
                  // do nothing with the response for now.
            }, (err: any) => {
                  if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                              // Show the Auth0 log in page
                              this.rootStore.dispatch(new AuthActions.CallAuthorize());
                        }
                  }
            }));
      }
}

/**
 * An Interceptor to redirect the user to the login page when 401 errors occur on
 * requests from the server.
 */
@Injectable()
export class NoDataInterceptor implements HttpInterceptor {

      constructor(private rootStore: Store<fromRoot.State>, 
            public snackBar: MatSnackBar, 
            private location: Location,
            private logger: LogService) { }

      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

            return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
                  if (event instanceof HttpResponse) {
                        if ((event as HttpResponse<any>).status === 204) {
                              const snackBarRef = this.openSnackBar('No Content Found', 'Ok');
                              snackBarRef.afterDismissed().subscribe(() => {
                                    this.location.back();
                              });
                        }
                  }
            }, (err: any) => {
                  if (err instanceof HttpErrorResponse) {
                        if (err.status === 404) {
                              const snackBarRef = this.openSnackBar('Error - No Content Found', 'Ok');
                              snackBarRef.afterDismissed().subscribe(() => {
                                    // this.location.back();
                                    this.logger.log('No content found', 'ERROR', false);
                              });
                        } else if (err.status === 403) {
                              const snackBarRef = this.openSnackBar('Forbidden', 'Ok');
                              snackBarRef.afterDismissed().subscribe(() => {
                                    this.location.back();
                              });
                        } else if (err.status === 500) {
                              const snackBarRef = this.openSnackBar('Error', 'Ok');
                              snackBarRef.afterDismissed().subscribe(() => {
                                    this.location.back();
                              });
                        }
                  }
            }));
      }

      openSnackBar(message: string, action: string) {
            return this.snackBar.open(message, action, {
                  duration: 5000,
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
            });
      }
}
