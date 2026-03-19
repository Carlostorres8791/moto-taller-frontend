import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Navbar } from '../../component/navbar/navbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Taller } from '../../services/taller';

@Component({
  selector: 'app-editar-taller',
  imports: [ReactiveFormsModule, CommonModule, Navbar, RouterLink],
  templateUrl: './editar-taller.html',
  styleUrl: './editar-taller.css',
})
export class EditarTaller implements OnInit {

  form!: FormGroup;
  loading = false;
  errorMessage = '';
  tallerId!: string;

  constructor(
    private fb: FormBuilder,
    private tallerService: Taller,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombreTaller: ['', [Validators.required, Validators.minLength(3)]],
      direccion: ['', [Validators.required, Validators.minLength(5)]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],

      // 👇 ADMIN
      nombreAdmin: ['', [Validators.required, Validators.minLength(3)]],
      emailAdmin: ['', [Validators.required, Validators.email]],
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/listar-talleres']);
      return;
    }

    this.tallerId = id;
    this.cargarTaller(this.tallerId);       
  }

  actualizarTaller(): void{
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.tallerService.actualizarTaller(this.tallerId, this.form.value).subscribe({
      next: () => {
        this.loading = false;
        alert('Taller actualizado correctamente');
        this.router.navigate(['/listar-talleres']);        
      },
      error: (err) => {
        this.loading = false;

        console.error(err);

        if (err.status === 400) {
          this.errorMessage = 'Datos Invalidos.';       
        }else if (err.status === 409){
          this.errorMessage = 'Nombre o correo ya en uso.';
        }else if (err.status === 403){
          this.errorMessage = 'No autorizado';
        }else{
          this.errorMessage = 'Error al actualizar.';
        }
      }
    });
  }

  cargarTaller(id: string): void{
    this.loading = true;

    this.tallerService.obtenerPorId(id).subscribe({
      next: (data: any) => {
        this.loading = false;

        this.form.patchValue({
          nombreTaller: data.nombre,
          direccion: data.direccion,
          telefono: data.telefono,
          nombreAdmin: data.nombreAdmin,
          emailAdmin: data.emailAdmin
        });
      },
      error: () => {
        this.loading = false;
        this.errorMessage = 'Error al cargar el taller y su datos';        
      }
    });
  }
  campoIvalido(campo: string): boolean{
    const control = this.form.get(campo);
    return !!(control && control.invalid && control.touched);
  }


}
