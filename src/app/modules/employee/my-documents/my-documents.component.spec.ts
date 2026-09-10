import { ComponentFixture, TestBed } from '@angular/core/testing';
import { My-documentsComponent } from './my-documents.component';

describe('My-documentsComponent', () => {
  let component: My-documentsComponent;
  let fixture: ComponentFixture<My-documentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [My-documentsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(My-documentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
