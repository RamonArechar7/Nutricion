import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-expediente',
  imports: [],
  templateUrl: './expediente.html',
  styleUrl: './expediente.css'
})
export class Expediente {
    constructor(private router: Router) {}

    goToDestino() {
    this.router.navigate(['/Home']); 
  }
}
