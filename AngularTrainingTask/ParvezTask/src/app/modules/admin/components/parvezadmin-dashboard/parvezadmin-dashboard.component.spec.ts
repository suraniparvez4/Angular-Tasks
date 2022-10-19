import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvezadminDashboardComponent } from './parvezadmin-dashboard.component';

describe('ParvezadminDashboardComponent', () => {
  let component: ParvezadminDashboardComponent;
  let fixture: ComponentFixture<ParvezadminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvezadminDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParvezadminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
