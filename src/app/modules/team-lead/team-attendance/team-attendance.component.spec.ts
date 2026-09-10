import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Team-attendanceComponent } from './team-attendance.component';

describe('Team-attendanceComponent', () => {
  let component: Team-attendanceComponent;
  let fixture: ComponentFixture<Team-attendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Team-attendanceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Team-attendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
