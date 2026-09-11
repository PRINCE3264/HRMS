import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My-payslipsComponent } from './my-payslips.component';

describe('My-payslipsComponent', () => {
  let component: My-payslipsComponent;
  let fixture: ComponentFixture<My-payslipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [My-payslipsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(My-payslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
