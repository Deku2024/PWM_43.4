import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [Header, Footer],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css',
})
export class LogIn {
  constructor(private router: Router) {
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
