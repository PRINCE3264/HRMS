import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My-profileComponent } from './my-profile.component';

describe('My-profileComponent', () => {
  let component: My-profileComponent;
  let fixture: ComponentFixture<My-profileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [My-profileComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(My-profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
