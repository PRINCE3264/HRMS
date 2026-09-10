import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Team-leaveComponent } from './team-leave.component';

describe('Team-leaveComponent', () => {
  let component: Team-leaveComponent;
  let fixture: ComponentFixture<Team-leaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Team-leaveComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Team-leaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
