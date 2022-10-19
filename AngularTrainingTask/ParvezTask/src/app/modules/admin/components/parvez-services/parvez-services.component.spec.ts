import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvezServicesComponent } from './parvez-services.component';

describe('ParvezServicesComponent', () => {
  let component: ParvezServicesComponent;
  let fixture: ComponentFixture<ParvezServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvezServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParvezServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
