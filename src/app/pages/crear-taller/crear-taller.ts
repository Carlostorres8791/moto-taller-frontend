import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Taller } from '../../services/taller';
import { Navbar } from '../../component/navbar/navbar';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-crear-taller',
  imports: [FormsModule, CommonModule, Navbar, RouterLink],
  templateUrl: './crear-taller.html',
  styleUrl: './crear-taller.css',
})
export class CrearTaller {
  
  request = {
    nombreTaller: '',
    direccion: '',
    telefono: '',
    nombreAdmin: '',
    emailAdmin: '',
    passwordAdmin: ''
  };

  constructor(private tallerService: Taller) {}

  crearTaller(){

    this.tallerService.crearTaller(this.request).subscribe({
      
      next: (res)=>{
        alert("Taller creado correctamente");
      },

      error: (err)=> {
        console.log(err);        
      }

    });    
  }
}
