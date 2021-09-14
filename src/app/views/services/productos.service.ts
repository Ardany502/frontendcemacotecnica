import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { respuestaInterfaceProductos } from '../pageTienda/interfaces/respuestaProductosInterface';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getLIstarProductos()
  {
    const url = base_url + '/listarproductosminimos';
    return this.http.get<respuestaInterfaceProductos>(url);
  }
}
