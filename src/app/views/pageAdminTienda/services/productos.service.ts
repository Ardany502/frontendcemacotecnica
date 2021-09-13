import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { respuestaProducto, respuestaProductos } from '../interface/interfaceRespuestaProductos';
import { _productos } from './../models/productos.models';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  
  public nuevaImagen: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

    listarProductos()
    {
        const url = base_url + '/listarproductos';
        return this.http.get<respuestaProductos>(url);
    }
    listarProducto(id:string)
    {

        const url = base_url +  `/listarproducto/${id}`;
        return this.http.get<respuestaProducto>(url);
    }
    postCrearProducto(producto:_productos){
     
       const url = base_url + '/crearproducto';
       return this.http.post<respuestaProducto>(url,producto);
    }
    putActualizarProducto(producto:_productos)
    {
      const url = `${base_url}/actualizarproducto/${producto.id}`;
      return this.http.put<respuestaProducto>(url,producto);
    }
    deleteProducto(producto: _productos)
    {
      
      const url = `${base_url}/eliminarproductos/${producto.id}`;
      return this.http.delete<respuestaProducto>(url);
    }
}
