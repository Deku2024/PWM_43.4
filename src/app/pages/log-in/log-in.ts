import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {
  IonContent,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [Header, Footer, ReactiveFormsModule, RouterLink, IonContent, IonInput, IonButton],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {
  public router = inject(Router); // Cambiado a public
  private authService = inject(AuthService);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  errorMessage: string | null = null;

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        await this.authService.login(email!, password!); //
        this.router.navigate(['/all-sessions']);
      } catch (error) {
        this.errorMessage = 'Credenciales incorrectas.';
      }
    }
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
