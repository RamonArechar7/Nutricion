import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosClinicos } from './datos-clinicos';

describe('DatosClinicos', () => {
  let component: DatosClinicos;
  let fixture: ComponentFixture<DatosClinicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosClinicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosClinicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
