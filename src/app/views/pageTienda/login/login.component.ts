import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  error:string = '';
  loading = true;
  constructor(public modalSerivce:ModalService, private loginservice:LoginService,private router: Router ) { }
  @ViewChild ('formlogin') formlogin!: NgForm;
  ngOnInit(): void {
  }

  cerrarModal()
  {
   
   this.modalSerivce.cerrarModal();
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





}
