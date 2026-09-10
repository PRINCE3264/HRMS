import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My-attendanceComponent } from './my-attendance.component';

describe('My-attendanceComponent', () => {
  let component: My-attendanceComponent;
  let fixture: ComponentFixture<My-attendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [My-attendanceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(My-attendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
