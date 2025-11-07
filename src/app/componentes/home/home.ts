import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CommonModule } from '@angular/common';

import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router'; 


@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
    faAddressBook = faAddressBook;
    faUsers = faUsers;
    faCalendar = faCalendar;
    faAddressCard = faAddressCard;
    faHandHoldingMedical = faHandHoldingMedical;
    faChartSimple = faChartSimple;
    faHouse = faHouse;
    faSignOutAlt = faSignOutAlt;

    constructor(private router: Router) {}

    goToPaciente() {
      this.router.navigate(['/Paciente']); 
    }

    goToCita() {
      this.router.navigate(['/Cita']); 
    }

    goToPlan() {
      this.router.navigate(['/PlanDeAlimentacion']); 
    }

    goToExpediente() {
      this.router.navigate(['/Expediente']); 
    }

    goToDatos() {
      this.router.navigate(['/DatosClinicos']); 
    }

    goToGestionUsuarios() {
      this.router.navigate(['/GestionUsuario']);
    }

    logout() {
      this.router.navigate(['/Login']);
    }
}


