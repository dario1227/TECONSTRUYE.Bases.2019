import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentmaterialComponent } from './assignmentmaterial.component';

describe('AssignmentmaterialComponent', () => {
  let component: AssignmentmaterialComponent;
  let fixture: ComponentFixture<AssignmentmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
