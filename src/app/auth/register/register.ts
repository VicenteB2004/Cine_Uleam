import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.services';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private _formBuilder = inject(FormBuilder);
  private registerService = inject(RegisterService);
  private router = inject(Router);

  errorMessage: string | null = null;
  successMessage: string | null = null;
  isLoading = false;

  form = this._formBuilder.group({
    nombres: this._formBuilder.nonNullable.control('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    apellidos: this._formBuilder.nonNullable.control('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    correo: this._formBuilder.nonNullable.control('', [
      Validators.required,
      Validators.email
    ]),
    cedula: this._formBuilder.nonNullable.control('', [
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/)
    ]),
    password: this._formBuilder.nonNullable.control('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: this._formBuilder.nonNullable.control('', [
      Validators.required
    ]),
    rol: this._formBuilder.nonNullable.control('cliente', Validators.required),
  }, {
    validators: this.passwordMatchValidator
  });

  private passwordMatchValidator(group: any) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  get nombres() { return this.form.get('nombres'); }
  get apellidos() { return this.form.get('apellidos'); }
  get correo() { return this.form.get('correo'); }
  get cedula() { return this.form.get('cedula'); }
  get password() { return this.form.get('password'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  submitUser() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { correo, nombres, apellidos, cedula, password, rol } = this.form.getRawValue();
    const esta_activo = true;

    this.errorMessage = null;
    this.successMessage = null;
    this.isLoading = true;

    this.registerService.createUser(
      correo,
      nombres,
      apellidos,
      cedula,
      rol,
      esta_activo,
      password
    ).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response) {
          this.successMessage = 'Usuario creado correctamente ✅';
          setTimeout(() => {
            this.router.navigate(['/auth/login']);
          }, 2000);
        } else {
          this.errorMessage = 'Error al crear el usuario. Intenta nuevamente.';
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error?.error?.message || 'Error al crear el usuario. Verifica tus datos nuevamente.';
        console.error('Error al crear el usuario:', error);
      }
    });
  }
}
