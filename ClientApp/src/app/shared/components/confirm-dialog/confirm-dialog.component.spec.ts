import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Confirm-dialogComponent } from './confirm-dialog.component';

describe('Confirm-dialogComponent', () => {
  let component: Confirm-dialogComponent;
  let fixture: ComponentFixture<Confirm-dialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Confirm-dialogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Confirm-dialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
