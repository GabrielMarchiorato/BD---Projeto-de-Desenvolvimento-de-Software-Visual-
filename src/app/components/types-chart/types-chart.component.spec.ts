import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesChartComponent } from './types-chart.component';

describe('TypesChartComponent', () => {
  let component: TypesChartComponent;
  let fixture: ComponentFixture<TypesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
