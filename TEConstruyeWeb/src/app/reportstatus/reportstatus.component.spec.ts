import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportstatusComponent } from './reportstatus.component';

describe('ReportstatusComponent', () => {
  let component: ReportstatusComponent;
  let fixture: ComponentFixture<ReportstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
