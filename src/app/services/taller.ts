import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Taller {

  private apiUrl = 'http://localhost:8080/api/talleres';
  
  constructor(private http: HttpClient) { }

  crearTaller(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear`, data);
  }
}
