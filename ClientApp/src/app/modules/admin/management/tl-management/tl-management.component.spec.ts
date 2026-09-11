import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTlManagementComponent } from './tl-management.component';

describe('AdminTlManagementComponent', () => {
  let component: AdminTlManagementComponent;
  let fixture: ComponentFixture<AdminTlManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminTlManagementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTlManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});