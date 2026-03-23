import { Component } from '@angular/core';
import { Navbar } from '../../../component/navbar/navbar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-cliente',
  imports: [Navbar, FormsModule, CommonModule],
  templateUrl: './crear-cliente.html',
  styleUrl: './crear-cliente.css',
})
export class CrearCliente {

}
