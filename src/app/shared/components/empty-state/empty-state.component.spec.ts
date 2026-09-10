import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Empty-stateComponent } from './empty-state.component';

describe('Empty-stateComponent', () => {
  let component: Empty-stateComponent;
  let fixture: ComponentFixture<Empty-stateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Empty-stateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Empty-stateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
