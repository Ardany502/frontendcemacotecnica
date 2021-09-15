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


  formulario: boolean = true;
  login = true;
  loading = true;
  constructor(public modalSerivce:ModalService ) { }

  ngOnInit(): void {
  }
  recibiendoEvento(e: boolean)
  {
    this.login = e;

    console.log(e);

  }
  cerrarModal()
  {

   this.modalSerivce.cerrarModal();
  }







}
