import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../../environments/environment';

const base_urlImg= environment.base_url_img;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string): string {
    if(img==='no-image')
    {
      return 'assets/no-image.jpg';
    }else
    {
      img=base_urlImg + img;
      return img;
    }
  }

}
