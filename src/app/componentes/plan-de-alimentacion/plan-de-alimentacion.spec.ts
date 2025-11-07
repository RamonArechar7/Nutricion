import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDeAlimentacion } from './plan-de-alimentacion';

describe('PlanDeAlimentacion', () => {
  let component: PlanDeAlimentacion;
  let fixture: ComponentFixture<PlanDeAlimentacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanDeAlimentacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanDeAlimentacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
