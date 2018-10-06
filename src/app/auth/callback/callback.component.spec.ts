import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CallbackComponent } from './callback.component';
import { SetAuthenticated, SetUnauthenticated } from '../auth.actions';
import * as fromAuth from '../auth.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { reducers } from '../../app.reducer';

describe('CallbackComponent', () => {
   let component: CallbackComponent;
   let fixture: ComponentFixture<CallbackComponent>;
   let store: Store<any>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         declarations: [CallbackComponent],
         imports: [
            SharedModule,
            StoreModule.forRoot(reducers),
            RouterTestingModule
         ]
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(CallbackComponent);
      component = fixture.componentInstance;
      store = TestBed.get(Store);
      fixture.detectChanges();
   });

   it('should load callback component only when not logged in', () => {
      // set current state to UnAuthenticate, if un-auth then only callback component will be created
      fromAuth.authReducer(undefined, new SetUnauthenticated());
      expect(component).toBeTruthy();
   });

   it('should render logging in a mat-card-title tag', async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('mat-card-title').textContent).toContain('Logging In...');
   }));

   it('should dispatch a RouterNavigation action to slides when authenticated', () => {
      const router = TestBed.get(Router);
      const routerSpy = spyOn(router, 'navigate');
      expect(routerSpy).not.toHaveBeenCalled();

      // Authenticate the user with a dummy payload
      const payload = {
         authResult: {
            accessToken: '',
            idToken: '',
            expiresAt: ''
         }
      };
      store.dispatch(new SetAuthenticated(payload));
      fixture.detectChanges();
      expect(routerSpy).toHaveBeenCalledTimes(1);
      expect(routerSpy).toHaveBeenCalledWith( [ 'slides' ]);
   });
});
