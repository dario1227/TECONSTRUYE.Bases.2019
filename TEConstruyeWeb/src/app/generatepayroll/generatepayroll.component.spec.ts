import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratepayrollComponent } from './generatepayroll.component';

describe('GeneratepayrollComponent', () => {
  let component: GeneratepayrollComponent;
  let fixture: ComponentFixture<GeneratepayrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratepayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratepayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
