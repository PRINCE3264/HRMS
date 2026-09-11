import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart-donutComponent } from './chart-donut.component';

describe('Chart-donutComponent', () => {
  let component: Chart-donutComponent;
  let fixture: ComponentFixture<Chart-donutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Chart-donutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Chart-donutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
