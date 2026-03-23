import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTalleres } from './listar-talleres';

describe('ListarTalleres', () => {
  let component: ListarTalleres;
  let fixture: ComponentFixture<ListarTalleres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTalleres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTalleres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
