import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Taller } from '../../services/taller';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-talleres',
  imports: [CommonModule, Navbar, RouterLink],
  templateUrl: './listar-talleres.html',
  styleUrl: './listar-talleres.css',
})
export class ListarTalleres implements OnInit{

  talleres: any[] = [];
  loading = true;
  errorMessage = '';

  constructor(private tallerService: Taller) {}

  ngOnInit(): void {
    this.obtenerTalleres();
  }

  obtenerTalleres() {
    this.loading = true;

    this.tallerService.obtenerTalleres().subscribe({
      next: (data)=> {
        this.talleres = data;
        this.loading = false;
      },
      error: (err)=> {
        console.error(err);
        this.errorMessage = 'Error al cargar talleres';
        this.loading = false;
      }
    });
  }

}
