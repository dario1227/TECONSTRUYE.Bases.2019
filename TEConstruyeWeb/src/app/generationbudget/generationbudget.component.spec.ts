import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationbudgetComponent } from './generationbudget.component';

describe('GenerationbudgetComponent', () => {
  let component: GenerationbudgetComponent;
  let fixture: ComponentFixture<GenerationbudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerationbudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerationbudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
