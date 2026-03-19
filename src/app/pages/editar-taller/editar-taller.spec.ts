import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTaller } from './editar-taller';

describe('EditarTaller', () => {
  let component: EditarTaller;
  let fixture: ComponentFixture<EditarTaller>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarTaller]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTaller);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
