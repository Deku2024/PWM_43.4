import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [Header, Footer, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  public router = inject(Router); // Cambiado a public para que el HTML lo vea
  private authService = inject(AuthService);

  signInForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatpassw: new FormControl('', [Validators.required]),
    },
    { validators: this.passwordMatchValidator },
  );

  errorMessage: string | null = null;

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const repeatpassw = control.get('repeatpassw');
    return password && repeatpassw && password.value !== repeatpassw.value
      ? { passwordMismatch: true }
      : null;
  }

  async onRegister() {
    if (this.signInForm.valid) {
      const { email, password, username } = this.signInForm.value;
      try {
        await this.authService.register(email!, password!, username!);
        this.router.navigate(['/home']);
      } catch (error: any) {
        this.errorMessage = 'Error al registrar: el correo ya existe o los datos son inválidos.';
      }
    }
  }
}
