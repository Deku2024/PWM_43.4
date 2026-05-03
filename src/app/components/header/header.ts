import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) {
  }

  goToSignIn(): void {
    this.router.navigate(['/signIn']);
  }

  goToLogIn(): void {
    this.router.navigate(['/logIn']);
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}
