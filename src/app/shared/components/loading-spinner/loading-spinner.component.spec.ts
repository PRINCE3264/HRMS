import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Loading-spinnerComponent } from './loading-spinner.component';

describe('Loading-spinnerComponent', () => {
  let component: Loading-spinnerComponent;
  let fixture: ComponentFixture<Loading-spinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Loading-spinnerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Loading-spinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
