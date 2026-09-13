import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSalaryStructuresComponent } from './salary-structures.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('AdminSalaryStructuresComponent', () => {
  let component: AdminSalaryStructuresComponent;
  let fixture: ComponentFixture<AdminSalaryStructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSalaryStructuresComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSalaryStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
