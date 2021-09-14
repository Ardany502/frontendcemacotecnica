import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private modalService:ModalService) { }

  ngOnInit(): void {
    this.detectarPantall();
  }
  modalLogin()
  {
    this.modalService.abrirModal();
  }
  detectarPantall()
  {
    let observe = new IntersectionObserver(entries => {
      const header= document.querySelector(".header");
      const iconosalienados = document.querySelector(".responsiveicons");
      const ocultarlementos = document.getElementById("usericonlogin");
      const ocultaropciones = document.getElementById("menuopciones");
      const ocultarlogos = document.getElementById("idlogos");
      const buscadortamaño = document.getElementById("buscador");
      const titulo = document.getElementById("titulo1");
      const titulo2 = document.getElementById("titulo2");


        if(entries[0].isIntersecting)
        {


          console.log(entries[0]);
          ocultarlementos?.classList.remove('scrollresponsivemenu');
          ocultaropciones?.classList.remove('scrollresponsivemenu')
          ocultarlogos?.classList.remove('scrollresponsivemenu')
          buscadortamaño?.classList.remove('searchscroll');
          titulo?.classList.remove('scrollresponsivemenu');
          iconosalienados?.classList.remove('scrolliconos');
          titulo2?.classList.remove('aprecertitulo2');
          // header?.classList.remove('d-none');
        }
        else{
          ocultarlementos?.classList.add('scrollresponsivemenu');
          ocultaropciones?.classList.add('scrollresponsivemenu')
          ocultarlogos?.classList.add('scrollresponsivemenu');
          buscadortamaño?.classList.add('searchscroll');
          titulo?.classList.add('scrollresponsivemenu');
          iconosalienados?.classList.add('scrolliconos');
          titulo2?.classList.add('aprecertitulo2');


          // header?.classList.add('d-none');
          console.log("ya no se mira");

        }

  });
  observe.observe(document.querySelector('.imagen-responsive')!);
  }
}
