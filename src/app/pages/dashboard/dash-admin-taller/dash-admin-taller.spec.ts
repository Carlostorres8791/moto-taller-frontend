import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAdminTaller } from './dash-admin-taller';

describe('DashAdminTaller', () => {
  let component: DashAdminTaller;
  let fixture: ComponentFixture<DashAdminTaller>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashAdminTaller]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashAdminTaller);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
