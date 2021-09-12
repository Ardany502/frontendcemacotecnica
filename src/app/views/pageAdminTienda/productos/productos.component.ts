import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {

  constructor(private productosService:ProductosService) { }

  ngOnInit(): void {
    this.productosService.listarProductos().subscribe(resp=> {
      console.log(resp);
    });
  }

}
