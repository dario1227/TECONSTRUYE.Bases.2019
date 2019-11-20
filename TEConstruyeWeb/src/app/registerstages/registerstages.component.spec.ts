import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterstagesComponent } from './registerstages.component';

describe('RegisterstagesComponent', () => {
  let component: RegisterstagesComponent;
  let fixture: ComponentFixture<RegisterstagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterstagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterstagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
