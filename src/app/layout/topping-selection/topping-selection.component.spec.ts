import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppingSelectionComponent } from './topping-selection.component';

describe('ToppingSelectionComponent', () => {
  let component: ToppingSelectionComponent;
  let fixture: ComponentFixture<ToppingSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToppingSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppingSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
