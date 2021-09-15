import { _usuarios } from './../../../pageAdminTienda/models/usuarios.models';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../../pageAdminTienda/services/usuario.service';
import { LoginService } from '../../../services/login.service';
import { FileUploadService } from '../../../pageAdminTienda/services/file-upload.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginForm } from '../../interfaces/login.interface';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  public imagenSubir!: File;
  public imgTemp: any;
  usuario!: _usuarios;
  cargando = true;
  loading= true;
  mensaje="";
  @Output() llamadaFormularioLogin: EventEmitter<boolean> = new EventEmitter;
  constructor(private fb: FormBuilder, private usuarioservice:UsuarioService,private loginusuario:LoginService, private FileUploadService:FileUploadService, private router:Router) { }

  formularioUsuarios: FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]],
    apellido: ['',[Validators.required,Validators.minLength(3)]],
    rol: ['',[Validators.required]],
    telefono: ['',[Validators.required,Validators.minLength(7)]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(5)]],
    imagen: ['no-image'],
  });

  ngOnInit(): void {
  }

  guardar()
  {


    if(!this.formularioUsuarios.valid)
    {
      this.formularioUsuarios.markAllAsTouched();
      console.log("formulario no valido");
      return ;
    }
      this.usuarioservice.postGuardarUsuario(this.formularioUsuarios.value).subscribe(resp=> {
              this.usuario  = resp.data;
              if(resp.code===200)
              {
                 this.login();
              }
       },(err)=> {
         this.mensaje="usuario o contraseña Incorrectos"
      });
  }
  login()
  {
    this.loginusuario.postLogin(this.formularioUsuarios.value).subscribe(resp=> {
      this.loading= false;
      this.router.navigateByUrl('/dashboard');
    });

  }
  regresar()
  {
    this.llamadaFormularioLogin.emit(true);
  }
  campoInvalido(campo:string)
  {
    return this.formularioUsuarios.controls[campo].errors
    && this.formularioUsuarios.controls[campo].touched;
  }
}
