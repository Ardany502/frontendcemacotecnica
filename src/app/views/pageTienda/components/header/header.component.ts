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
  }
  modalLogin()
  {
    this.modalService.abrirModal();
  }

}
