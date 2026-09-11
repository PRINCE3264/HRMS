import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Stat-cardComponent } from './stat-card.component';

describe('Stat-cardComponent', () => {
  let component: Stat-cardComponent;
  let fixture: ComponentFixture<Stat-cardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stat-cardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Stat-cardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
