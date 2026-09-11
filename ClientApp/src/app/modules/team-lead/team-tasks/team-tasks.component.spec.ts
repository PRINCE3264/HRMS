import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Team-tasksComponent } from './team-tasks.component';

describe('Team-tasksComponent', () => {
  let component: Team-tasksComponent;
  let fixture: ComponentFixture<Team-tasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Team-tasksComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Team-tasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
