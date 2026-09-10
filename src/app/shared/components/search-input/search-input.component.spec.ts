import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Search-inputComponent } from './search-input.component';

describe('Search-inputComponent', () => {
  let component: Search-inputComponent;
  let fixture: ComponentFixture<Search-inputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Search-inputComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Search-inputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
