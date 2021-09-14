import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../views/services/login.service';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginService, private router: Router){}
  canActivate(): Observable<boolean>| boolean {
    return this.loginService.validarToken().pipe(
      tap( valid=> {
       
          if(!valid)
          {
            this.router.navigateByUrl('')
          }

      })
    );
  }
  canLoad(): Observable<boolean> | boolean{
    return this.loginService.validarToken().pipe(
      tap( valid=> {
          if(!valid)
          {
            this.router.navigateByUrl('')
          }

      })
    );
    }
}
