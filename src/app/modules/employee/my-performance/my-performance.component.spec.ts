import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My-performanceComponent } from './my-performance.component';

describe('My-performanceComponent', () => {
  let component: My-performanceComponent;
  let fixture: ComponentFixture<My-performanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [My-performanceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(My-performanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
