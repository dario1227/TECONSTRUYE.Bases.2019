import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmenthoursComponent } from './assignmenthours.component';

describe('AssignmenthoursComponent', () => {
  let component: AssignmenthoursComponent;
  let fixture: ComponentFixture<AssignmenthoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmenthoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmenthoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
