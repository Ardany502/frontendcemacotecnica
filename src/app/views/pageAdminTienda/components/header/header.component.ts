import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
  }
  cerrarSession()
  {
    this.loginservice.logout();
  }

}
