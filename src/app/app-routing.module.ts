import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren:()=> import('./views/pageTienda/home.module').then( m => m.HomeModule)
  },
  {
    path: 'dashboard',
    loadChildren:()=>  import('./views/pageAdminTienda/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
