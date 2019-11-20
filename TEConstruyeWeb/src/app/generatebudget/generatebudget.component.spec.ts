import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratebudgetComponent } from './generatebudget.component';

describe('GeneratebudgetComponent', () => {
  let component: GeneratebudgetComponent;
  let fixture: ComponentFixture<GeneratebudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratebudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratebudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
