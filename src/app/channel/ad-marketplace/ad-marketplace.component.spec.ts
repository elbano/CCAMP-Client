import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMarketplaceComponent } from './ad-marketplace.component';

describe('AdMarketplaceComponent', () => {
  let component: AdMarketplaceComponent;
  let fixture: ComponentFixture<AdMarketplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMarketplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
