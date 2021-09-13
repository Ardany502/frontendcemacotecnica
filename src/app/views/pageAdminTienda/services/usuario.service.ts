import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { respuestaUsuarios, respuestaUsuario } from '../interface/interfaceRespuestaUsuarios';
import { _usuarios } from '../models/usuarios.models';


const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }

  listarUsuarios()
  {
    const url = base_url+ '/listarusuarios';
    return this.httpClient.get<respuestaUsuarios>(url);
  }
  listarUsuario(id:string)
  {
    const url = `${base_url}/listarusuario/${id}`;
    return this.httpClient.get<respuestaUsuario>(url);
  }
  postGuardarUsuario(usuario: _usuarios){
    const url = base_url + '/crearusuario';
    return this.httpClient.post<respuestaUsuario>(url,usuario);
  }
  putActualizarUsuario(usuario: _usuarios)
  {
    const url = `${base_url}/actualizarusuario/${usuario.id}`;
    return this.httpClient.put<respuestaUsuario>(url,usuario);
  }

  deleteUsuario(usuario:_usuarios)
  {
    const url = `${base_url}/eliminarusuario/${usuario.id}`;
    return this.httpClient.delete<respuestaUsuario>(url);
  }
}
