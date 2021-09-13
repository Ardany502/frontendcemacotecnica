import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute) { }
  idurl!:string;
  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id})=> {
      this.idurl = id;
  });
  }

}
