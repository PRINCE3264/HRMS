import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminEmployeeFormComponent } from './employee-form.component';

describe('AdminEmployeeFormComponent', () => {
  let component: AdminEmployeeFormComponent;
  let fixture: ComponentFixture<AdminEmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEmployeeFormComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with default values', () => {
    expect(component.employeeForm).toBeTruthy();
    expect(component.employeeForm.get('firstName')?.value).toBe('');
    expect(component.employeeForm.get('department')?.value).toBe('');
    expect(component.employeeForm.get('basicSalary')?.value).toBe('');
  });

  it('should start at step 1', () => {
    expect(component.currentStep).toBe(1);
  });

  it('should navigate to next step', () => {
    component.nextStep();
    expect(component.currentStep).toBe(2);
  });

  it('should not go beyond step 4', () => {
    component.currentStep = 4;
    component.nextStep();
    expect(component.currentStep).toBe(4);
  });

  it('should navigate to previous step', () => {
    component.currentStep = 3;
    component.prevStep();
    expect(component.currentStep).toBe(2);
  });

  it('should not go below step 1', () => {
    component.prevStep();
    expect(component.currentStep).toBe(1);
  });

  it('should mark fields as invalid when empty and touched', () => {
    component.employeeForm.get('firstName')?.markAsTouched();
    expect(component.isFieldInvalid('firstName')).toBeTrue();
  });

  it('should mark fields as valid when filled', () => {
    component.employeeForm.get('firstName')?.setValue('John');
    component.employeeForm.get('firstName')?.markAsTouched();
    expect(component.isFieldInvalid('firstName')).toBeFalse();
  });

  it('should not submit when form is invalid', () => {
    component.onSubmit();
    expect(component.submitted).toBeFalse();
  });

  it('should have all steps defined', () => {
    expect(component.steps.length).toBe(4);
  });

  it('should have departments array', () => {
    expect(component.departments.length).toBeGreaterThan(0);
  });
});
