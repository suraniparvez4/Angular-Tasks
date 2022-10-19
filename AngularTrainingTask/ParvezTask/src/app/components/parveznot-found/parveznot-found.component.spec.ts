import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParveznotFoundComponent } from './parveznot-found.component';

describe('ParveznotFoundComponent', () => {
  let component: ParveznotFoundComponent;
  let fixture: ComponentFixture<ParveznotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParveznotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParveznotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
