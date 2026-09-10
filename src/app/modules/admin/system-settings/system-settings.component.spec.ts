import { ComponentFixture, TestBed } from '@angular/core/testing';
import { System-settingsComponent } from './system-settings.component';

describe('System-settingsComponent', () => {
  let component: System-settingsComponent;
  let fixture: ComponentFixture<System-settingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [System-settingsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(System-settingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
