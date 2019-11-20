import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistermaterialComponent } from './registermaterial.component';

describe('RegistermaterialComponent', () => {
  let component: RegistermaterialComponent;
  let fixture: ComponentFixture<RegistermaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistermaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistermaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
