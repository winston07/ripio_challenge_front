import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  model = 1;
  login = false;

  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
    if (this.loginService.logIn == true) {
      this.login=true;
    }
  }
  transferencia(){
    this.router.navigate(['/transferencia']);
  }
  operacion(){
    this.router.navigate(['/operacion']);
  }
  salir(){
    this.loginService.logout();
    this.login=false;
    this.router.navigate(['/']);
  }
  entrar(){
    this.router.navigate(['/login']);
    
  }

}
