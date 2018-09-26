import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RretencionesComponent } from './rretenciones.component';

describe('RretencionesComponent', () => {
  let component: RretencionesComponent;
  let fixture: ComponentFixture<RretencionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RretencionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RretencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
