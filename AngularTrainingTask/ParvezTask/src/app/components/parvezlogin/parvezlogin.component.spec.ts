import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvezloginComponent } from './parvezlogin.component';

describe('ParvezloginComponent', () => {
  let component: ParvezloginComponent;
  let fixture: ComponentFixture<ParvezloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvezloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParvezloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
