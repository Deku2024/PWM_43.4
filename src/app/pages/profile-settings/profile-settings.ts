import { Component, input, InputSignal, inject } from '@angular/core';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [HeaderLoggedIn],
  templateUrl: './profile-settings.html',
  styleUrl: './profile-settings.css',
})
export class ProfileSettings {
  private router = inject(Router);

  protected goToSessions() {
    this.router.navigate(['/all-sessions']);
  }
}
