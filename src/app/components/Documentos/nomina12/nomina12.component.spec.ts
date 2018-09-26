import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nomina12Component } from './nomina12.component';

describe('Nomina12Component', () => {
  let component: Nomina12Component;
  let fixture: ComponentFixture<Nomina12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nomina12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nomina12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
