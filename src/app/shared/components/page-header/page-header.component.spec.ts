import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page-headerComponent } from './page-header.component';

describe('Page-headerComponent', () => {
  let component: Page-headerComponent;
  let fixture: ComponentFixture<Page-headerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Page-headerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Page-headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
