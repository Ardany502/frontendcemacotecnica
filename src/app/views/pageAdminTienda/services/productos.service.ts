import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { respuestaProductos } from '../interface/interfaceRespuestaProductos';

const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

    listarProductos()
    {
        const url = base_url + '/listarproductos';
        return this.http.get<respuestaProductos>(url);
    }
}
