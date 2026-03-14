import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private apiUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }

  guardarToken(token: string){
    localStorage.setItem("token", token);
  }

  obtenerToken() {
    return localStorage.getItem("token");
  }

  logout() {
    localStorage.removeItem("token");
  }
  
}
