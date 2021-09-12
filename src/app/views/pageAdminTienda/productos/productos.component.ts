import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { respuestaProductos } from '../interface/interfaceRespuestaProductos';
import { _productos } from '../models/productos.models';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {


  productos: _productos[] = [];
  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
    this.productosService.listarProductos().subscribe(resp=> {
       this.productos = resp.data;
    });
  }

}
