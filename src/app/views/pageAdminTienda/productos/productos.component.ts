import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { _productos } from '../models/productos.models';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {
 
  cargando=false;
  productos: _productos[] = [];
  imgSubs!:Subscription;
  constructor(private productosService:ProductosService, public loginservice: LoginService) {
    
   }

  ngOnInit(): void {
     this.listarData();
    if(this.productosService.actualizarLista)
    {
      this.listarData();
    }
   
  }
  listarData()
  {
    this.productosService.listarProductos().subscribe(resp=> {
      this.productos = resp.data;
      this.cargando = true;
   });
  }
  eliminarProductos(producto: _productos)
  {
    Swal.fire({
      title:'¿Borrar Producto?',
      text: `Esta a punto de borrar ${producto.nombre}`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrarlo'
    }).then((resul => {
       if(resul.isConfirmed)
       {
         this.productosService.deleteProducto(producto).subscribe(resp => {
          Swal.fire('Eliminado!',`${resp.data.nombre} a sido eliminado`,'success');
          this.listarData();
        })
       }
    }))
  }

  

}
