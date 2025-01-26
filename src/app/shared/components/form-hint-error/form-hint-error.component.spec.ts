import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHintErrorComponent } from './form-hint-error.component';

describe('FormHintErrorComponent', () => {
  let component: FormHintErrorComponent;
  let fixture: ComponentFixture<FormHintErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHintErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormHintErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
