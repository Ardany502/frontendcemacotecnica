export interface respuestaInterfaceProductos {
  data: producto[];
  code: number;
  msj: string;
}

export interface producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  SKU: string;
  inventario: number;
  imagen: string;
  created_at: string;
  updated_at: string;
}