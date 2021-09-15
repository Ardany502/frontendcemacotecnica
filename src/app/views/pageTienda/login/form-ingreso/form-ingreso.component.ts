import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { NgForm } from '@angular/forms';
import { ModalService } from 'src/app/views/services/modal.service';

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styles: [
  ]
})
export class FormIngresoComponent implements OnInit {
  email: string = '';
  password: string = '';
  error:string = '';
  @Output() llamadaFormularioRegistro: EventEmitter<boolean> = new EventEmitter;
  constructor( private loginservice:LoginService,private router: Router, public modalSerivce:ModalService) { }
  ngOnInit(): void {
  }
  guardar(form: NgForm)
  {
    if(!form.valid)
    {

      return
    }
    this.loginservice.postLogin(form.value).subscribe(resp=> {
        this.error = "";
        this.router.navigateByUrl('/dashboard');

    },(err)=> {
        console.log(err);
        this.error = err.error.data;
    });
  }
  cerrarModal()
  {

   this.modalSerivce.cerrarModal();
  }
  cambioformulario()
  {
    this.llamadaFormularioRegistro.emit(false);
  }

}
