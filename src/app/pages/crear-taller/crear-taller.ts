import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Taller } from '../../services/taller';
import { Navbar } from '../../component/navbar/navbar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-taller',
  imports: [ReactiveFormsModule, CommonModule, Navbar, RouterLink],
  templateUrl: './crear-taller.html',
  styleUrl: './crear-taller.css',
})
export class CrearTaller implements OnInit {
  form!: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private tallerService: Taller,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombreTaller: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      nombreAdmin: ['', [Validators.required, Validators.minLength(3)]],
      emailAdmin: ['', [Validators.required, Validators.email]],
      passwordAdmin: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  crearTaller(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.tallerService.crearTaller(this.form.value).subscribe({
      next: () => {
        this.loading = false;

        alert('Taller creado correctamente');

        this.form.reset();

        //opcional: redirigir
        this.router.navigate(['/dashboard']);
      },

      error: (err) => {
        this.loading = false;

        console.error(err);

        //manejo de errores del backend
        if (err.status === 400) {
          this.errorMessage = 'Datos inválidos. Verifica la información.';
        } else if (err.status === 409) {
          this.errorMessage = 'El correo ya está registrado.';
        } else if (err.status === 500) {
          this.errorMessage = 'Error interno del servidor.';
        } else {
          this.errorMessage = 'Ocurrió un error inesperado.';
        }
      },
    });
  }

  campoInvalido(campo: string): Boolean {
    const control = this.form.get(campo);
    return !!(control && control.invalid && control.touched);
  }
}
