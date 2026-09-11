import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TlProjectsComponent } from './team-projects.component';

describe('TlProjectsComponent', () => {
  let component: TlProjectsComponent;
  let fixture: ComponentFixture<TlProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TlProjectsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TlProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});