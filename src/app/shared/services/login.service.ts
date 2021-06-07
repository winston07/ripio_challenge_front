import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http:HttpClient,private router: Router) { }
  login(user:any){
    const url = environment.url_api + "token/";
    let httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    this.http.post<any>(`${url}`,user,httpOptions).subscribe((resp:any)=>{
      this.router.navigate(['/']);
      localStorage.setItem('auth_token',resp.access);
      localStorage.setItem('refresh_token',resp.refresh);
    });
  }
  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('refresh_token');
  }
 
  public get logIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
  }
  refreshToken(token:any){
    const url = environment.url_api + "token/refresh/";
    let httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    this.http.post<any>(`${url}`,token,httpOptions).subscribe((resp:any)=>{
      localStorage.setItem('auth_token',resp.access);
      localStorage.setItem('refresh_token',resp.refresh);
    },(err)=>{
      this.logout();
      this.router.navigate(['/']);
      
    });
  }
}
