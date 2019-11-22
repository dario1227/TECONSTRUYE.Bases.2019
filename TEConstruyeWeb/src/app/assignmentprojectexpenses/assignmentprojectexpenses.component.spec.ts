import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentprojectexpensesComponent } from './assignmentprojectexpenses.component';

describe('AssignmentprojectexpensesComponent', () => {
  let component: AssignmentprojectexpensesComponent;
  let fixture: ComponentFixture<AssignmentprojectexpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentprojectexpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentprojectexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
