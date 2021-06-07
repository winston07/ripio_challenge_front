import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cuenta } from '../../models/cuenta';
import { ApiService } from '../../services/api.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss']
})
export class TransferenciaComponent implements OnInit {
  cuentas:Cuenta[]=[];
  login = false;
  cuenta_origen = new FormControl('', Validators.required);  
  cuenta_destino = new FormControl('',Validators.required);
  monto = new FormControl('',Validators.required);
  closeResult = '';
  @ViewChild('content') myModal:any;
  mensaje=''
  

  constructor(private loginService:LoginService,private router: Router,private apiService:ApiService,private modalService: NgbModal) { }
  

  ngOnInit(): void {
    
    if (this.loginService.logIn == true) {
      this.login=true;
      const token = localStorage.getItem('refresh_token');
      const data ={
        "refresh":token
      }
      this.loginService.refreshToken(data);
      this.get_cuenta();
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
  get_cuenta(){
    const token = localStorage.getItem('auth_token');
    this.apiService.cuenta(token).subscribe((data)=>{
      this.cuentas = data;
    })
  }
  transferir(){
    if(this.cuenta_origen.valid && this.cuenta_destino.valid && this.monto.valid){
      const token = localStorage.getItem('auth_token');
      const data = {
        "monto":this.monto.value,
        "cuenta_origen":this.cuenta_origen.value.nro_cuenta,
        "cuenta_destino":this.cuenta_destino.value
      }
      this.apiService.postOperacion(token,data).subscribe((resp)=>{
        this.mensaje="Transferencia realizado con éxito";
        this.open(this.myModal); 
        this.router.navigate(['/operacion']);
      },(err)=>{
        this.mensaje=err.error.mensaje;
        this.open(this.myModal);  
      });
    }else{
      this.mensaje='Necesita llenar los campos en blanco'
      this.open(this.myModal);
    }
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
 

}

