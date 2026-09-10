import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartLineComponent } from './chart-line.component';

describe('ChartLineComponent', () => {
  let component: ChartLineComponent;
  let fixture: ComponentFixture<ChartLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartLineComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default inputs', () => {
    expect(component.title).toBe('');
    expect(component.subtitle).toBe('');
    expect(component.chartData).toEqual([]);
    expect(component.lineColor).toBe('#6366f1');
    expect(component.height).toBe(200);
  });

  it('should return empty points when no data', () => {
    expect(component.getPoints()).toEqual([]);
  });
});
