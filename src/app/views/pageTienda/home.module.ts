import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagenPipe } from './pipe/imagen.pipe';
import { FormIngresoComponent } from './login/form-ingreso/form-ingreso.component';
import { RegistroComponent } from './login/registro/registro.component';



@NgModule({
  declarations: [HomeComponent, ProductosComponent, LoginComponent, ImagenPipe, FormIngresoComponent, RegistroComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
