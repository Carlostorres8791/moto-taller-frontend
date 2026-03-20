import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashRecepcion } from './dash-recepcion';

describe('DashRecepcion', () => {
  let component: DashRecepcion;
  let fixture: ComponentFixture<DashRecepcion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashRecepcion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashRecepcion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
