import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [HomeComponent, ProductosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule
  ]
})
export class HomeModule { }
