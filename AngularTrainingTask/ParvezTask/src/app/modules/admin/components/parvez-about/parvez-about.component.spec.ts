import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvezAboutComponent } from './parvez-about.component';

describe('ParvezAboutComponent', () => {
  let component: ParvezAboutComponent;
  let fixture: ComponentFixture<ParvezAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvezAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParvezAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
