import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Main-layoutComponent } from './main-layout.component';

describe('Main-layoutComponent', () => {
  let component: Main-layoutComponent;
  let fixture: ComponentFixture<Main-layoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Main-layoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Main-layoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
