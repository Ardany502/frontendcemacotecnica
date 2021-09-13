import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { _usuarios } from '../models/usuarios.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {
  cargando=false;
  usuarios: _usuarios [] = [];
  constructor(private usuariosService:UsuarioService) { }

  ngOnInit(): void {
    this.listarData();
    if(this.usuariosService.actualizarLista)
    {
      this.listarData();
    }
  
  }
  listarData(){
    this.usuariosService.listarUsuarios().subscribe(resp=> {
      this.usuarios = resp.data;
      this.cargando= true;
      
  })
  }

  eliminarUsuario(usuario:_usuarios){
    Swal.fire({
      title:'¿Borrar Usuario?',
      text: `Esta a punto de borrar a ${usuario.nombre} ${usuario.apellido}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrarlo'
    }).then((resul => {
       if(resul.isConfirmed)
       {
         this.usuariosService.deleteUsuario(usuario).subscribe(resp => {
          Swal.fire('Eliminado!',`${resp.data.nombre} a sido eliminado`,'success');
          this.listarData();
        })
       }
    }))
  }

}
