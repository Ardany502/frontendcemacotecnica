import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoginForm } from '../pageTienda/interfaces/login.interface';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  get token():string{
    return localStorage.getItem('token') || '';
  }

  guardarLocalStorage(token: string)
  {

    localStorage.setItem('token',token);
  }

  validarToken():Observable<boolean>
  {
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.token}`);
    return this.http.get(`${base_url}/login/verificar`,{headers})
    .pipe(
      map( (resp:any)=>{
          if(resp.code==200)
          {
            return true;
          }
            return false;
          
      }),
      catchError( err=> of(false)))
  }
  postLogin(login: LoginForm){
     
    const url = base_url + '/login';
    return this.http.post(url,login)
    .pipe(
      tap( (resp: any) => {
     
         this.guardarLocalStorage(resp.data.access_token);  
      })
    );
 }

 logout()
 {
   localStorage.removeItem('token');

 }
}
