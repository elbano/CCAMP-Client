import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorDiscoveryComponent } from './creator-discovery.component';

describe('CreatorDiscoveryComponent', () => {
  let component: CreatorDiscoveryComponent;
  let fixture: ComponentFixture<CreatorDiscoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorDiscoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
