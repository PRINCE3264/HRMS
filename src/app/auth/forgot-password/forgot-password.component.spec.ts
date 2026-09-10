import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Forgot-passwordComponent } from './forgot-password.component';

describe('Forgot-passwordComponent', () => {
  let component: Forgot-passwordComponent;
  let fixture: ComponentFixture<Forgot-passwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Forgot-passwordComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Forgot-passwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
