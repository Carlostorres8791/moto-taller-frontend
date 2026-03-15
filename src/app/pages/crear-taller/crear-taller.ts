import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Taller } from '../../services/taller';

@Component({
  selector: 'app-crear-taller',
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-taller.html',
  styleUrl: './crear-taller.css',
})
export class CrearTaller {

  taller = {
    nombre: '',
    direccion: ''
  };

  admin = {
    nombre: '',
    email: ''
  };

  constructor(private tallerService: Taller) {}

  crearTaller(){

    const request = {
    nombre: this.taller.nombre,
    direccion: this.taller.direccion,
    adminNombre: this.admin.nombre,
    adminEmail: this.admin.email};

 this.tallerService.crearTaller(request).subscribe({
      next: (res)=>{
        alert("Taller creado correctamente");
      },
      error: (err)=>{
        console.log(err);
      }
    });

  }
}
