import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvezContactComponent } from './parvez-contact.component';

describe('ParvezContactComponent', () => {
  let component: ParvezContactComponent;
  let fixture: ComponentFixture<ParvezContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvezContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParvezContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
