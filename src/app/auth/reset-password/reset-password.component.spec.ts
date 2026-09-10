import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reset-passwordComponent } from './reset-password.component';

describe('Reset-passwordComponent', () => {
  let component: Reset-passwordComponent;
  let fixture: ComponentFixture<Reset-passwordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reset-passwordComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Reset-passwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
