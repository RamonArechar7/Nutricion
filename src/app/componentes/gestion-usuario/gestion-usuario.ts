import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-usuario',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './gestion-usuario.html',
  styleUrl: './gestion-usuario.css'
})
export class GestionUsuario {
  faHouse = faHouse;
  faTrash = faTrash;
  constructor(private router: Router) { }
  goToDestino() {
    this.router.navigate(['/Home']);
  }
}
