import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-de-alimentacion',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './plan-de-alimentacion.html',
  styleUrl: './plan-de-alimentacion.css'
})
export class PlanDeAlimentacion {
  faHouse = faHouse;
  faTrash = faTrash;
  constructor(private router: Router) { }
  goToDestino() {
    this.router.navigate(['/Home']);
  }
}
