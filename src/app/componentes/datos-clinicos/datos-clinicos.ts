import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-datos-clinicos',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './datos-clinicos.html',
  styleUrl: './datos-clinicos.css'
})
export class DatosClinicos {
  faHouse = faHouse;
  faTrash = faTrash;
  constructor(private router: Router) {}
  goToDestino() {
    this.router.navigate(['/Home']); 
  }
}
