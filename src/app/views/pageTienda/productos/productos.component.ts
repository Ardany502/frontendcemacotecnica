import { Component, OnInit } from '@angular/core';
import { producto } from '../interfaces/respuestaProductosInterface';
import { ProductosService } from '../../services/productos.service';
import { InterceptorsService } from '../../pageAdminTienda/interceptors/interceptors.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {

  cargando =false;
  contador= 10;
  productos: producto []= [];
  dataFiltrada: producto[] = [];
  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
     this.productoService.getLIstarProductos().subscribe(resp=> {
       this.productos  = resp.data;
       this.dataFiltrada = resp.data.slice(0,10);
       this.cargando= true;
     })
     this.probandoScrollInfinito();
  }


  probandoScrollInfinito()
  {


      let observe = new IntersectionObserver(entries => {
        if(this.contador <= this.productos.length )
        {
          if(entries[0].isIntersecting)
          {
            setTimeout(() => {
              this.contador+=10;
              this.dataFiltrada = this.productos.slice(0,this.contador);
            }, 1000);
          }
        }
        return ;

    });
    observe.observe(document.querySelector('.footer')!);
    }

}
