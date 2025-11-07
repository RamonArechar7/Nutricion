import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cita',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './cita.html',
  styleUrl: './cita.css'
})
export class Cita {
  faHouse = faHouse;
  faTrash = faTrash;
  constructor(private router: Router) {}

  goToDestino() {
    this.router.navigate(['/Home']); 
  }
}
