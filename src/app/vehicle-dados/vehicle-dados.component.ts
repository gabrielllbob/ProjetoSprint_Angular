import { Component } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vehicle-dados',
  standalone: true,
  imports: [NgIf, NgForOf, NgClass, FormsModule],
  templateUrl: './vehicle-dados.component.html',
  styleUrls: ['./vehicle-dados.component.css']
})
export class VehicleDadosComponent {
  vin = '';
  vehicleData: any = null;
  errorMessage = '';

  constructor(private vehicleService: VehicleService) { }

  onSerchVin() {
    this.errorMessage = '';
    this.vehicleData = null;

    if (!this.vin.trim()) {
      this.errorMessage = 'Digite um código VIN válido.';
    }

    this.vehicleService.getVehicleData(this.vin).subscribe({
      next: (res) => {
        this.vehicleData = res;
      },
      error: (err) => {
        if (err.status === 400) {
          this.errorMessage = 'Código VIN não encontrado.';
        } else {
          this.errorMessage = 'Erro ao buscar dados do veículo.';
        }
      }
    });
  }
}
