import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  usuario = {
    usuario: '',
    contrasena: ''
  };

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  login() {
    this.usuarioService.login(this.usuario)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Login exitoso');
          this.router.navigate(['/Home']); // Adjust route as needed
        },
        error: (e) => {
          console.error(e);
          alert('Credenciales inválidas');
        }
      });
  }

  register() {
    this.usuarioService.register(this.usuario)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Usuario registrado correctamente');
        },
        error: (e) => {
          console.error(e);
          alert('Error al registrar usuario');
        }
      });
  }
}
