import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      {path: 'productos', component: ProductosComponent},
      {path: '**', redirectTo:'productos'}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
