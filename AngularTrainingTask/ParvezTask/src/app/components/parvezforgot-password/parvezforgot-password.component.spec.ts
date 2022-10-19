import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvezforgotPasswordComponent } from './parvezforgot-password.component';

describe('ParvezforgotPasswordComponent', () => {
  let component: ParvezforgotPasswordComponent;
  let fixture: ComponentFixture<ParvezforgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvezforgotPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParvezforgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
