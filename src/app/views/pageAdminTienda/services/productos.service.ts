import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

    listarProductos()
    {
        return this.http.get('http://127.0.0.1:8000/api/listarproductos');
    }
}
