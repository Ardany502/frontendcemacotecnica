import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { environment } from '../../../../../environments/environment';
const base_urlImg= environment.base_url_img;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  fotoperfil!:string;
  constructor(public loginservice:LoginService) { }
  ngOnInit(): void {
     this.detalleUsuario();
     console.log(this.loginservice.actualizarLista);
     
     if(this.loginservice.actualizarLista)
    {     
      this.detalleUsuario();
    }
   
  }
  cerrarSession()
  {
    this.loginservice.logout();
  }

  detalleUsuario()
  {
    const imagen= this.loginservice.usuario.imagen;
    if(!imagen)
    {
       this.fotoperfil ='assets/no-image.jpg';
    }
     else if(imagen==='no-image')
    {
      this.fotoperfil = 'assets/no-image.jpg';
    }else
    {
       
      this.fotoperfil = base_urlImg+imagen;
    }
  }


}
