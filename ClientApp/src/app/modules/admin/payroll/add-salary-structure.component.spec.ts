import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSalaryStructureAddComponent } from './add-salary-structure.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AdminSalaryStructureAddComponent', () => {
  let component: AdminSalaryStructureAddComponent;
  let fixture: ComponentFixture<AdminSalaryStructureAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSalaryStructureAddComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSalaryStructureAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
