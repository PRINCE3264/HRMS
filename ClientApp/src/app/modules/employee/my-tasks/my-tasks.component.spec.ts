import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My-tasksComponent } from './my-tasks.component';

describe('My-tasksComponent', () => {
  let component: My-tasksComponent;
  let fixture: ComponentFixture<My-tasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [My-tasksComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(My-tasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
