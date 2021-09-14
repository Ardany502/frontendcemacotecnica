import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ImagenPipe } from './pipes/imagen.pipe';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { ComponentsModule } from './components/components.module';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { FormProductosComponent } from './productos/form-productos/form-productos.component';
import { FormUsuariosComponent } from './usuarios/form-usuarios/form-usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [HomeDashboardComponent,
    ProductosComponent,
    UsuariosComponent, 
    ImagenPipe, 
    CrearProductoComponent, 
    EditarProductoComponent, 
    FormProductosComponent, 
    FormUsuariosComponent, 
    CrearUsuarioComponent, 
    EditarUsuarioComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  exports: [
    ImagenPipe
  ]
})
export class AdminDashboardModule { }
