import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeDashboardComponent,
    children: [
        {path: 'usuarios', component: UsuariosComponent},
        {path: 'usuario/crear', component:CrearUsuarioComponent},
        {path: 'usuario/:id', component:EditarUsuarioComponent},
        {path: 'productos', component: ProductosComponent},
        {path: 'producto/crear', component: CrearProductoComponent},
        {path: 'producto/:id', component: EditarProductoComponent},
        {path: '**', redirectTo: 'usuarios'}
    ]   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
