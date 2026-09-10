import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Data-tableComponent } from './data-table.component';

describe('Data-tableComponent', () => {
  let component: Data-tableComponent;
  let fixture: ComponentFixture<Data-tableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Data-tableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(Data-tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
