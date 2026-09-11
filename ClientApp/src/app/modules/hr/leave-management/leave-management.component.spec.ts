import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leave-managementComponent } from './leave-management.component';

describe('Leave-managementComponent', () => {
  let component: Leave-managementComponent;
  let fixture: ComponentFixture<Leave-managementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Leave-managementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Leave-managementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
