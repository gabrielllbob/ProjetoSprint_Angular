import { Component,  } from '@angular/core';
import { MenuHamburguerComponent } from '../menu-hamburguer/menu-hamburguer.component';
import { VehicleComponent } from '../vehicle/vehicle.component';
import { VehicleDadosComponent } from '../vehicle-dados/vehicle-dados.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuHamburguerComponent, VehicleComponent, VehicleDadosComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
