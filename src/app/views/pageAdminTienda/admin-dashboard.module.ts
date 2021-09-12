import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';


import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [HomeDashboardComponent,ProductosComponent,UsuariosComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    ComponentsModule,
    RouterModule
    
  ]
})
export class AdminDashboardModule { }
