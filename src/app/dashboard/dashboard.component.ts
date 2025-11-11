import { Component } from '@angular/core';
import { MenuHamburguerComponent } from '../menu-hamburguer/menu-hamburguer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MenuHamburguerComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
