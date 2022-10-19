import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvezHomeComponent } from './parvez-home.component';

describe('ParvezHomeComponent', () => {
  let component: ParvezHomeComponent;
  let fixture: ComponentFixture<ParvezHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvezHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParvezHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
