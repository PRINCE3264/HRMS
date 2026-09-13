import { ComponentFixture, TestBed } from '@angular/core';
import { AdminOnboardingDetailComponent } from './onboarding-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AdminOnboardingDetailComponent', () => {
  let component: AdminOnboardingDetailComponent;
  let fixture: ComponentFixture<AdminOnboardingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminOnboardingDetailComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminOnboardingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
