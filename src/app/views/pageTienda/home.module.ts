import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ImagenPipe } from './pipe/imagen.pipe';



@NgModule({
  declarations: [HomeComponent, ProductosComponent, LoginComponent, ImagenPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    FormsModule,
  ]
})
export class HomeModule { }
