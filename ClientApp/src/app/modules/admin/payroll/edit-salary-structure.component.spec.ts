import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSalaryStructureEditComponent } from './edit-salary-structure.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AdminSalaryStructureEditComponent', () => {
  let component: AdminSalaryStructureEditComponent;
  let fixture: ComponentFixture<AdminSalaryStructureEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSalaryStructureEditComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSalaryStructureEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
