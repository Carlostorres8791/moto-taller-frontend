import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTaller } from './crear-taller';

describe('CrearTaller', () => {
  let component: CrearTaller;
  let fixture: ComponentFixture<CrearTaller>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearTaller]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTaller);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
