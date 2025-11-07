import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { Login } from './componentes/login/login';
import { Paciente } from './componentes/paciente/paciente';
import { Cita } from './componentes/cita/cita';
import { DatosClinicos } from './componentes/datos-clinicos/datos-clinicos';
import { Expediente } from './componentes/expediente/expediente';
import { PlanDeAlimentacion } from './componentes/plan-de-alimentacion/plan-de-alimentacion';
import { GestionUsuario } from './componentes/gestion-usuario/gestion-usuario';




export const routes: Routes = [
    { path: 'Home', component: Home },
    { path: 'Paciente', component: Paciente },
    { path: '', component: Login, pathMatch: 'full' },
    { path: 'Login', component: Login, pathMatch: 'full' },
    { path: 'Cita', component: Cita, pathMatch: 'full' },
    { path: 'DatosClinicos', component: DatosClinicos, pathMatch: 'full' },
    { path: 'Expediente', component: Expediente, pathMatch: 'full' },
    { path: 'PlanDeAlimentacion', component: PlanDeAlimentacion, pathMatch: 'full' },
    { path: 'GestionUsuario', component: GestionUsuario, pathMatch: 'full' }

];
