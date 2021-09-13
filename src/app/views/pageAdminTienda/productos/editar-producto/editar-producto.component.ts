import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  constructor(private activateRouter: ActivatedRoute) { }
  idurl!:string;
  ngOnInit(): void {
    this.activateRouter.params.subscribe(({id})=> {
        this.idurl = id;
    });
  }

}
