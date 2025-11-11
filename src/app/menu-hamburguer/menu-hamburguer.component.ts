import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-hamburguer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-hamburguer.component.html',
  styleUrl: './menu-hamburguer.component.css'
})
export class MenuHamburguerComponent {
  isMenuOpen = false;

  toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  // Fecha o menu ao clicar fora
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const clickedInsideMenu = target.closest('.menu-container');
    const clickedLogo = target.closest('.menu-logo');
    if (!clickedInsideMenu && !clickedLogo) {
      this.isMenuOpen = false;
    }
  }
}
