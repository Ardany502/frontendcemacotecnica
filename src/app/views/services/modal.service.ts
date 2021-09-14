import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModalService {
  private _ocultarModal:boolean = true;
  constructor() { }


  get ocultarModal(): boolean
  {
    return this._ocultarModal;
  }
  abrirModal()
  {
    this._ocultarModal = false;
  }
  cerrarModal()
  {
    return this._ocultarModal = true;
  }
}
