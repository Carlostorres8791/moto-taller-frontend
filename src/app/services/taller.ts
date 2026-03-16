import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class Taller {

  private apiUrl = 'http://localhost:8080/api/talleres';
  
  constructor(private http: HttpClient, private auth: Auth) { }

  crearTaller(data: any) {
    const token = this.auth.obtenerToken();

    const headers = new HttpHeaders({

      Authorization : `Bearer ${token}`

    });

    return this.http.post(`${this.apiUrl}`, data, {headers});

  }
}
