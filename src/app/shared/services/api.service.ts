import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }
  moneda(auth_token:any){
    const url = environment.url_api + "moneda/";
    let httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    this.http.get<any>(`${url}`,httpOptions).subscribe((resp:any)=>{
    });
  };
  operaciones(auth_token:any){
    const url = environment.url_api + "movimiento/";
    let httpOptions = { headers: new HttpHeaders({'Authorization':`Bearer ${auth_token}`,'Content-Type': 'application/json'}) };
    return this.http.get<any>(`${url}`,httpOptions)
  };
  cuenta(auth_token:any){
    const url = environment.url_api + "cuenta/";
    let httpOptions = { headers: new HttpHeaders({'Authorization':`Bearer ${auth_token}`,'Content-Type': 'application/json'}) };
    return this.http.get<any>(`${url}`,httpOptions)
  };
  postOperacion(auth_token:any,data:any){
    const url = environment.url_api + "operacion/";
    let httpOptions = { headers: new HttpHeaders({'Authorization':`Bearer ${auth_token}`,'Content-Type': 'application/json'}) };
    return this.http.post<any>(`${url}`,data,httpOptions)
  }
  
}
