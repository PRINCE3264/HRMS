import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My-leaveComponent } from './my-leave.component';

describe('My-leaveComponent', () => {
  let component: My-leaveComponent;
  let fixture: ComponentFixture<My-leaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [My-leaveComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(My-leaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
