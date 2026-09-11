import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Team-reportsComponent } from './team-reports.component';

describe('Team-reportsComponent', () => {
  let component: Team-reportsComponent;
  let fixture: ComponentFixture<Team-reportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Team-reportsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Team-reportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
