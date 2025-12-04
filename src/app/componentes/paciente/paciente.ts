import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-paciente',
  imports: [FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './paciente.html',
  styleUrl: './paciente.css'
})
export class Paciente {
  faHouse = faHouse;
  faTrash = faTrash;

  paciente = {
    id_paciente: '',
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    fecha_nacimiento: '',
    sexo: 'masculino',
    telefono: '',
    correo_electronico: ''
  };

  constructor(private router: Router, private pacienteService: PacienteService) { }

  goToDestino() {
    this.router.navigate(['/Home']);
  }

  registrar() {
    const data = {
      id_paciente: this.paciente.id_paciente,
      nombre: this.paciente.nombre,
      apellido_paterno: this.paciente.apellido_paterno,
      apellido_materno: this.paciente.apellido_materno,
      fecha_nacimiento: this.paciente.fecha_nacimiento,
      sexo: this.paciente.sexo,
      telefono: this.paciente.telefono,
      correo_electronico: this.paciente.correo_electronico
    };

    this.pacienteService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Paciente registrado correctamente');
          this.limpiar();
        },
        error: (e) => {
          console.error(e);
          alert('Error al registrar paciente');
        }
      });
  }

  pacientes: any[] = [];

  consultar() {
    this.pacienteService.get(this.paciente.id_paciente)
      .subscribe({
        next: (data) => {
          this.paciente = data;
          // Fix date format for input type="date"
          if (this.paciente.fecha_nacimiento) {
            const date = new Date(this.paciente.fecha_nacimiento);
            this.paciente.fecha_nacimiento = date.toISOString().split('T')[0];
          }
          console.log(data);
        },
        error: (e) => {
          console.error(e);
          alert('Paciente no encontrado');
        }
      });
  }

  consultaGeneral() {
    this.pacienteService.getAll()
      .subscribe({
        next: (data) => {
          this.pacientes = data;
          console.log(data);
        },
        error: (e) => {
          console.error(e);
          alert('Error al consultar pacientes');
        }
      });
  }

  actualizar() {
    this.pacienteService.update(this.paciente.id_paciente, this.paciente)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Paciente actualizado correctamente');
        },
        error: (e) => {
          console.error(e);
          alert('Error al actualizar paciente');
        }
      });
  }

  eliminar() {
    if (confirm("¿Estás seguro de eliminar este paciente?")) {
      this.pacienteService.delete(this.paciente.id_paciente)
        .subscribe({
          next: (res) => {
            console.log(res);
            alert('Paciente eliminado correctamente');
            this.limpiar();
          },
          error: (e) => {
            console.error(e);
            alert('Error al eliminar paciente');
          }
        });
    }
  }

  limpiar() {
    this.paciente = {
      id_paciente: '',
      nombre: '',
      apellido_paterno: '',
      apellido_materno: '',
      fecha_nacimiento: '',
      sexo: 'masculino',
      telefono: '',
      correo_electronico: ''
    };
  }
}
