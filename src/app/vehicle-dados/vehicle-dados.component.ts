import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, of, Subject, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-vehicle-dados',
  standalone: true,
  imports: [NgIf, NgClass, FormsModule],
  templateUrl: './vehicle-dados.component.html',
  styleUrls: ['./vehicle-dados.component.css']
})
export class VehicleDadosComponent implements OnInit, OnDestroy {
  vin = '';
  vehicleData: any = null;
  errorMessage = '';
  private searchVin$ = new Subject<string>();
  private sub!: Subscription;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.sub = this.searchVin$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((vin) => {
          if (!vin.trim()) {
            this.vehicleData = null;
            this.errorMessage = '';
            return of(null);
          }
          return this.vehicleService.getVehicleData(vin).pipe(
            catchError((err) => {
              if (err.status === 400) {
                this.showTemporaryError('Código VIN não encontrado.');
              } else {
                this.showTemporaryError('Erro ao buscar dados do veículo.');
              }
              return of(null);
            })
          );
        })
      )
      .subscribe((res) => {
        this.vehicleData = res;
      });
  }

  onKeyUp() {
    this.searchVin$.next(this.vin);
  }

  private showTemporaryError(message: string) {
    this.errorMessage = message;
    setTimeout(() => (this.errorMessage = ''), 5000);
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
}
