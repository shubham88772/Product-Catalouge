import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoggedComponent } from './customer-logged.component';

describe('CustomerLoggedComponent', () => {
  let component: CustomerLoggedComponent;
  let fixture: ComponentFixture<CustomerLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
