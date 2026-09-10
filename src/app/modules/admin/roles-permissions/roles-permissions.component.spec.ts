import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Roles-permissionsComponent } from './roles-permissions.component';

describe('Roles-permissionsComponent', () => {
  let component: Roles-permissionsComponent;
  let fixture: ComponentFixture<Roles-permissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Roles-permissionsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Roles-permissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
