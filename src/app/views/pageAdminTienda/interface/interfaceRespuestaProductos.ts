import { _productos } from "../models/productos.models";
export interface respuestaProductos {
  data: _productos [];
  code: number;
  msj: string;
}

export interface respuestaProducto {
  data: _productos ;
  code: number;
  msj: string;
}

