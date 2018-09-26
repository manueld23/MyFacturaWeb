import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RCFDI33Component } from './rcfdi33.component';

describe('RCFDI33Component', () => {
  let component: RCFDI33Component;
  let fixture: ComponentFixture<RCFDI33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RCFDI33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RCFDI33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
