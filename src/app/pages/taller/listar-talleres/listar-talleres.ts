import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../../../component/navbar/navbar';
import { Taller } from '../../../services/taller';

@Component({
  selector: 'app-listar-talleres',
  imports: [FormsModule, CommonModule, Navbar, RouterLink],
  templateUrl: './listar-talleres.html',
  styleUrl: './listar-talleres.css',
})
export class ListarTalleres implements OnInit {
  talleres: any[] = [];
  talleresFiltrados: any[] = [];

  loading = true;
  errorMessage = '';

  searchTerm: string = '';
  filtroEstado: string = '';

  constructor(private tallerService: Taller) {}

  ngOnInit(): void {
    this.obtenerTalleres();
  }

  obtenerTalleres() {
    this.loading = true;

    this.tallerService.obtenerTalleres().subscribe({
      next: (data) => {
        this.talleres = data;
        this.talleresFiltrados = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error al cargar talleres';
        this.loading = false;
      },
    });
  }

  filtrar() {
    this.talleresFiltrados = this.talleres.filter((t) => {
      const matchTexto =
        t.nombre?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        t.direccion?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        t.nombreAdmin?.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchEstado =
        this.filtroEstado === '' ? true : this.filtroEstado === 'activos' ? t.activo : !t.activo;

      return matchTexto && matchEstado;
    });
  }
  cambiarEstado(t: any) {
    if (t.activo) {
      this.tallerService.desactivar(t.id).subscribe({
        next: () => {
          t.activo = false;
        },
        error: () => {
          this.errorMessage = 'Error al desactivar';
        }
      });
    }else{
      this.tallerService.activar(t.id).subscribe({
        next: () => {
          t.activo = true;
        },
        error: () => {
          this.errorMessage = 'Error al activar';
        }
      });
    }
  }
}
