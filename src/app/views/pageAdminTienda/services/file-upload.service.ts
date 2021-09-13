import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  constructor() { }
  async actualizarFoto( archivo: File, tipo:'productos' | 'usuarios',id:string){
    try{

        const url = `${base_url}/subirImagen`;
        const formData = new FormData();
        formData.append('imagen',archivo);
        formData.append('tipo',tipo);
        formData.append('id',id);
        const resp = await fetch(url, {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')} `
          },
          body: formData
        });
        const data = await resp.json();
        if(data.ok)
        {
          return data.msg;
        }else{
          return false;
        }
        
    }catch(error)
    {
     
      return false;
    }
  }
}
