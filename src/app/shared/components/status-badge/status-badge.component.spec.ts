import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Status-badgeComponent } from './status-badge.component';

describe('Status-badgeComponent', () => {
  let component: Status-badgeComponent;
  let fixture: ComponentFixture<Status-badgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Status-badgeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Status-badgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
