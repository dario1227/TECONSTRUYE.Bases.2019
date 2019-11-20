import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeeaComponent } from './welcomeea.component';

describe('WelcomeeaComponent', () => {
  let component: WelcomeeaComponent;
  let fixture: ComponentFixture<WelcomeeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
