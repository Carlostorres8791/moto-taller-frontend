import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Navbar } from "../../component/navbar/navbar";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  usuario: any;

  constructor(private auth: Auth){
    this.usuario = this.auth.obtenerUsuario();
  }

}
