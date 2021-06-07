import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { LoginService } from '../../services/login.service';
import { Operacion } from '../../models/operacion';
import { Cuenta } from '../../models/cuenta';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {
  operaciones:Operacion[]=[]
  cuenta:Cuenta[]=[];

  login = false;
 

  constructor(private loginService:LoginService,private router: Router,private apiService:ApiService) { }

  ngOnInit(): void {
    if (this.loginService.logIn == true) {
      this.login=true;
      const token = localStorage.getItem('refresh_token');
      const data ={
        "refresh":token
      }
      this.loginService.refreshToken(data);
      this.get_cuenta();
      this.get_operaciones();
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
  get_operaciones(){
    const token = localStorage.getItem('auth_token');
    this.apiService.operaciones(token).subscribe((data)=>{
      this.operaciones = data;
    })

  }
  get_cuenta(){
    const token = localStorage.getItem('auth_token');
    this.apiService.cuenta(token).subscribe((data)=>{
      this.cuenta = data;
    })
  }

}
