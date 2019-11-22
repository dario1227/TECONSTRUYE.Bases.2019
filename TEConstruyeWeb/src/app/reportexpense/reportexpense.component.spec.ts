import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportexpenseComponent } from './reportexpense.component';

describe('ReportexpenseComponent', () => {
  let component: ReportexpenseComponent;
  let fixture: ComponentFixture<ReportexpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
