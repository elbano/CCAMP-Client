import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';
import { reducers } from '../../app.reducer';
import { Store, StoreModule } from '@ngrx/store';
import { MaterialModule } from '../../material.module';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;
  let store: Store<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerComponent ],
      imports: [ StoreModule.forRoot(reducers), MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
