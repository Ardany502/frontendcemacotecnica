import { Component, OnInit } from '@angular/core';
import { producto } from '../interfaces/respuestaProductosInterface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {

  cargando =false;
  productos: producto []= [];
  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
     this.productoService.getLIstarProductos().subscribe(resp=> {
       this.productos = resp.data;
       this.cargando= true;
     })
  }

}
