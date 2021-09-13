import { _usuarios } from '../models/usuarios.models';
export interface respuestaUsuarios {
  data: _usuarios [];
  code: number;
  msj: string;
}


export interface respuestaUsuario {
  data: _usuarios ;
  code: number;
  msj: string;
}


