import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User-managementComponent } from './user-management.component';

describe('User-managementComponent', () => {
  let component: User-managementComponent;
  let fixture: ComponentFixture<User-managementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [User-managementComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(User-managementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
