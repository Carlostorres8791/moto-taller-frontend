import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  usuario: any;

  constructor(

    private auth: Auth,

    private router: Router

  ){

    this.usuario = this.auth.obtenerUsuario;

  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");

    this.router.navigate(['/login']);
  }
}
