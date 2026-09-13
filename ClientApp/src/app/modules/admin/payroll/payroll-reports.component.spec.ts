import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPayrollReportsComponent } from './payroll-reports.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AdminPayrollReportsComponent', () => {
  let component: AdminPayrollReportsComponent;
  let fixture: ComponentFixture<AdminPayrollReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPayrollReportsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPayrollReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
