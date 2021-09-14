import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:()=> import('./views/pageTienda/home.module').then( m => m.HomeModule)
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    canLoad:[AuthGuard],
    loadChildren:()=>  import('./views/pageAdminTienda/admin-dashboard.module').then(m => m.AdminDashboardModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
