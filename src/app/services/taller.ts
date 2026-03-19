import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class Taller {
  private apiUrl = 'http://localhost:8080/api/talleres';

  constructor(
    private http: HttpClient,
    private auth: Auth,
  ) {}

  crearTaller(data: any) {
    const token = this.auth.obtenerToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(`${this.apiUrl}`, data, { headers });
  }

  obtenerTalleres() {
    const token = this.auth.obtenerToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any[]>(`${this.apiUrl}`, { headers });
  }

  obtenerPorId(id: string) {
    const token = this.auth.obtenerToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }

  actualizarTaller(id: string, data: any) {
    const token = this.auth.obtenerToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.put(`${this.apiUrl}/${id}`, data, { headers });
  }

  cambiarEstado(id: string, activo: boolean) {
    const token = this.auth.obtenerToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.patch(`${this.apiUrl}/${id}/estado?activo=${activo}`, {}, { headers });
  }

  activar(id: string) {
    const token = this.auth.obtenerToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.put(`${this.apiUrl}/activar/${id}`, {}, { headers });
  }

  desactivar(id: string) {
    const token = this.auth.obtenerToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.put(`${this.apiUrl}/desactivar/${id}`, {}, { headers });
  }
}
