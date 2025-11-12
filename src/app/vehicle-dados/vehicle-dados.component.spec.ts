import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDadosComponent } from './vehicle-dados.component';

describe('VehicleDadosComponent', () => {
  let component: VehicleDadosComponent;
  let fixture: ComponentFixture<VehicleDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
