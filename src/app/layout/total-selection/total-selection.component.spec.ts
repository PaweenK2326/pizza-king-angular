import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSelectionComponent } from './total-selection.component';

describe('TotalSelectionComponent', () => {
  let component: TotalSelectionComponent;
  let fixture: ComponentFixture<TotalSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
