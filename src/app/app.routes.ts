import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { CrearTaller } from './pages/crear-taller/crear-taller';
import { ListarTalleres } from './pages/listar-talleres/listar-talleres';
import { EditarTaller } from './pages/editar-taller/editar-taller';

export const routes: Routes = [
    { path: '', component: Login},
    { path: 'login', component: Login},
    { path: 'dashboard', component: Dashboard},
    { path: 'crear-taller', component: CrearTaller},
    { path: 'listar-talleres', component: ListarTalleres},
    { path: 'editar-taller/:id', component: EditarTaller}
];
