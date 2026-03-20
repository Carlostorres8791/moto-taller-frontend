import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { Navbar } from "../../component/navbar/navbar";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Taller } from '../../services/taller';


@Component({
  selector: 'app-dashboard',
  imports: [Navbar, CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{

  usuario: any;

  talleres: any[] = [];

  total = 0;
  activos = 0;
  inactivos = 0;

  talleresInactivos: any[] = [];

  constructor(private tallerServices: Taller, private auth: Auth) {}

  ngOnInit(): void {
    this.usuario = this.auth.obtenerUsuario();
    this.cargarDatos();
  }

  cargarDatos() {
    this.tallerServices.obtenerTalleres().subscribe({
      next: (data) => {
        this.talleres = data;

        //KPIs
        this.total = data.length;
        this.activos = data.filter(t => t.activo).length;
        this.inactivos = data.filter(t => !t.activo).length;

        //tabla desactivados
        this.talleresInactivos = data.filter(t => !t.activo);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }  
}
