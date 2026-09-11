import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apply-leaveComponent } from './apply-leave.component';

describe('Apply-leaveComponent', () => {
  let component: Apply-leaveComponent;
  let fixture: ComponentFixture<Apply-leaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Apply-leaveComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Apply-leaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
