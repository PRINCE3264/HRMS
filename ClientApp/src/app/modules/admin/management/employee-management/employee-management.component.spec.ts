import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminEmployeeManagementComponent } from './employee-management.component';

describe('AdminEmployeeManagementComponent', () => {
  let component: AdminEmployeeManagementComponent;
  let fixture: ComponentFixture<AdminEmployeeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEmployeeManagementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminEmployeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});