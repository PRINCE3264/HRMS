import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerComponent } from './drawer.component';

describe('DrawerComponent', () => {
  let component: DrawerComponent;
  let fixture: ComponentFixture<DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default inputs', () => {
    expect(component.isOpen).toBe(false);
    expect(component.title).toBe('');
    expect(component.width).toBe(480);
    expect(component.showFooter).toBe(false);
  });

  it('should emit closed event', () => {
    spyOn(component.closed, 'emit');
    component.close();
    expect(component.closed.emit).toHaveBeenCalled();
  });

  it('should emit saved event', () => {
    spyOn(component.saved, 'emit');
    component.save();
    expect(component.saved.emit).toHaveBeenCalled();
  });
});
