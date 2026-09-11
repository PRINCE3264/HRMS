import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Audit-logsComponent } from './audit-logs.component';

describe('Audit-logsComponent', () => {
  let component: Audit-logsComponent;
  let fixture: ComponentFixture<Audit-logsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Audit-logsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Audit-logsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
