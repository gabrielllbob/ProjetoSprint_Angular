import { Component, OnInit } from '@angular/core';
import { Vehicle } from './vehicle';
import { VehicleService } from '../services/vehicle.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-vehicle',
  imports: [NgIf, NgForOf,],
  standalone: true,
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[] = [];
  selectedVehicle?: Vehicle;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe({
      next: (res) => {
        this.vehicles = res.vehicles;
        this.selectedVehicle = this.vehicles[0];
      },
      error: (err) => {
        console.error('Erro ao buscar veículos:', err);
      }
    });
  }

  onVehicleSelect(id: string) {
    const found = this.vehicles.find(v => v.id === +id);
    if (found) {
      this.selectedVehicle = found;
    }
  }
}
