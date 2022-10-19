import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParvezFooterComponent } from './parvez-footer.component';

describe('ParvezFooterComponent', () => {
  let component: ParvezFooterComponent;
  let fixture: ComponentFixture<ParvezFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParvezFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParvezFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
