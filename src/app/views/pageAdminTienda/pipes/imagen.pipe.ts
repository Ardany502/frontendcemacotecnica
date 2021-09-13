import { _productos } from './../models/productos.models';
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../../environments/environment';


const base_urlImg= environment.base_url_img;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  transform(producto: _productos): string {
    
    if(!producto)
    {
      return 'assets/no-image.jpg';
    }
     else if(producto.imagen==='no-image')
    {
      return 'assets/no-image.jpg';
    }else
    {
       
      return base_urlImg+producto.imagen;
    }
  }

}
