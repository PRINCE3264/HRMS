import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Team-performanceComponent } from './team-performance.component';

describe('Team-performanceComponent', () => {
  let component: Team-performanceComponent;
  let fixture: ComponentFixture<Team-performanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Team-performanceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Team-performanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
