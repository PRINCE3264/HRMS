import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminHrManagementComponent } from './hr-management.component';

describe('AdminHrManagementComponent', () => {
  let component: AdminHrManagementComponent;
  let fixture: ComponentFixture<AdminHrManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminHrManagementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminHrManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});