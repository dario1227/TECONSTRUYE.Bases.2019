import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentstagesComponent } from './assignmentstages.component';

describe('AssignmentstagesComponent', () => {
  let component: AssignmentstagesComponent;
  let fixture: ComponentFixture<AssignmentstagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentstagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentstagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
