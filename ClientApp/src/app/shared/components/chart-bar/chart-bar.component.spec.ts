import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chart-barComponent } from './chart-bar.component';

describe('Chart-barComponent', () => {
  let component: Chart-barComponent;
  let fixture: ComponentFixture<Chart-barComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Chart-barComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Chart-barComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
