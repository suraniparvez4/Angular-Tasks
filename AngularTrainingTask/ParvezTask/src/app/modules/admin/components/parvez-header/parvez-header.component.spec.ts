import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvezHeaderComponent } from './parvez-header.component';

describe('ParvezHeaderComponent', () => {
  let component: ParvezHeaderComponent;
  let fixture: ComponentFixture<ParvezHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvezHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParvezHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
