import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Check-in-outComponent } from './check-in-out.component';

describe('Check-in-outComponent', () => {
  let component: Check-in-outComponent;
  let fixture: ComponentFixture<Check-in-outComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Check-in-outComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Check-in-outComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
