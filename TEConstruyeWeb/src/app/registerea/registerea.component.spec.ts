import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistereaComponent } from './registerea.component';

describe('RegistereaComponent', () => {
  let component: RegistereaComponent;
  let fixture: ComponentFixture<RegistereaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistereaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistereaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
