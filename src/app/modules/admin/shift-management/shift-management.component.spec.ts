import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Shift-managementComponent } from './shift-management.component';

describe('Shift-managementComponent', () => {
  let component: Shift-managementComponent;
  let fixture: ComponentFixture<Shift-managementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Shift-managementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Shift-managementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
