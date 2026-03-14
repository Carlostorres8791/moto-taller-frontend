import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  password: string = '';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.authService.login(credentials).subscribe({
      next: (response) =>{

        const token = response.token;

        this.authService.guardarToken(token);

        this.authService.guardarUsuario(response);

        this.router.navigate(['/dashboard']); 
      },
      error: (error) => {
        console.log("Error login", error);
      }

    });

  }
}
