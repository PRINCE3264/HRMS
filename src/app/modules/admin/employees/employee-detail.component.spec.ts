import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AdminEmployeeDetailComponent } from './employee-detail.component';

describe('AdminEmployeeDetailComponent', () => {
  let component: AdminEmployeeDetailComponent;
  let fixture: ComponentFixture<AdminEmployeeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEmployeeDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: 'EMP001' }) }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminEmployeeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default active tab as personal', () => {
    expect(component.activeTab).toBe('personal');
  });

  it('should switch tabs', () => {
    component.setTab('job');
    expect(component.activeTab).toBe('job');
  });

  it('should have employee data loaded', () => {
    expect(component.employee).toBeTruthy();
    expect(component.employee.employeeId).toBe('EMP001');
  });

  it('should return correct initials', () => {
    expect(component.getInitials()).toBe('JS');
  });

  it('should return full name', () => {
    expect(component.getFullName()).toBe('John Smith');
  });

  it('should have tabs defined', () => {
    expect(component.tabs.length).toBeGreaterThan(0);
  });

  it('should have attendance records', () => {
    expect(component.attendance.length).toBeGreaterThan(0);
  });

  it('should have leave history', () => {
    expect(component.leaveHistory.length).toBeGreaterThan(0);
  });

  it('should have documents', () => {
    expect(component.documents.length).toBeGreaterThan(0);
  });

  it('should have performance data', () => {
    expect(component.performance.rating).toBe(4.5);
  });
});
