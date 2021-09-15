import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { _usuarios } from '../../models/usuarios.models';
import { FileUploadService } from '../../services/file-upload.service';
import { UsuarioService } from '../../services/usuario.service';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {
  @Input() idurl!:string;
  public imagenSubir!: File;
  public imgTemp: any;
  usuario:_usuarios = new _usuarios('','','','','','','');
  cargando = true;
  formularioUsuarios: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]],
    apellido: ['',[Validators.required,Validators.minLength(3)]],
    rol: ['',[Validators.required]],
    telefono: ['',[Validators.required,Validators.minLength(7)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(5)]],
    imagen: ['no-image'],
  });
  constructor(private fb: FormBuilder, private usuarioservice:UsuarioService,private loginusuario:LoginService, private fileUploadService:FileUploadService, private router:Router) { }

  ngOnInit(): void {

    this.idurl!='0'? this.cargarInformacion(): this.cargando = false;
  }
  guardar()
  {


    if(!this.formularioUsuarios.valid)
    {
      this.formularioUsuarios.markAllAsTouched();
      console.log("formulario no valido");
      return ;
    }


    if(this.idurl==="0")
    {
       this.usuarioservice.postGuardarUsuario(this.formularioUsuarios.value).subscribe(resp=> {
              this.usuario  = resp.data;
              if(resp.code===200)
              {
                this.fileUploadService.actualizarFoto(this.imagenSubir,'usuarios',this.usuario.id!);
                Swal.fire('Guardado','Usuario ' + this.usuario.nombre + ' creado correctamente', 'success');
                this.usuarioservice.actualizarLista = true;
                this.loginusuario.actualizarLista = true;
                this.router.navigateByUrl('dashboard/usuarios');
              }
       });
    }
    else{

      this.usuario = this.formularioUsuarios.value;
      this.usuario.id = this.idurl;
      this.usuarioservice.putActualizarUsuario(this.usuario).subscribe(resp=> {

        this.usuario = resp.data;

        if(this.imagenSubir)
        {
          this.fileUploadService.actualizarFoto(this.imagenSubir,'usuarios',this.usuario.id!);
        }
        Swal.fire('Actualizado','Usuario ' + this.usuario.nombre + '  ' +  this.usuario.apellido  +  ' Actualizado correctamente', 'success');
        this.usuarioservice.actualizarLista = true;
        this.loginusuario.actualizarLista = true;
        this.router.navigateByUrl('dashboard/Usuarios');
      })
    }
  }
  cargarInformacion(){

    this.usuarioservice.listarUsuario(this.idurl).subscribe(resp=> {
      const {nombre,apellido, rol, telefono,email,imagen, id} =resp.data;
      this.usuario = resp.data;
      this.formularioUsuarios.reset({
        nombre,
        apellido,
        rol,
        telefono,
        email,
        imagen,
      })
      this.cargando = false;

    })
  }
  cambiarImagen(e: any): any
  {
    let imagen = e.target.files[0];
    this.imagenSubir = imagen;
    if(!this.imagenSubir)
    {
      return this.imgTemp = null ;
    }
    const reader = new FileReader();
    reader.readAsDataURL(imagen!);
    reader.onloadend = ()=>{
      this.imgTemp = reader.result;
    }
  }
  campoInvalido(campo:string)
  {
    return this.formularioUsuarios.controls[campo].errors
    && this.formularioUsuarios.controls[campo].touched;
  }

}
