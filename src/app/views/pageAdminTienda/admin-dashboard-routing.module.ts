import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardComponent,
    children: [
        {path: 'usuarios', component: UsuariosComponent},
        {path: 'productos', component: ProductosComponent},
        {path: '**', redirectTo: 'usuarios'}
    ]   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
