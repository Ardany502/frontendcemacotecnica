import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);

    const reqClone = req.clone({
        headers,
    });
    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse)
  {
    return throwError('Error Personalizado');
  }
}
