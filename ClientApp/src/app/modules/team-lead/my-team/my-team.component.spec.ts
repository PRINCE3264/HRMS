import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My-teamComponent } from './my-team.component';

describe('My-teamComponent', () => {
  let component: My-teamComponent;
  let fixture: ComponentFixture<My-teamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [My-teamComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(My-teamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
