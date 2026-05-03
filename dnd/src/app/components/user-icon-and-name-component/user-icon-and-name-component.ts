import { Component, input, InputSignal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'user-icon-and-name-component',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-icon-and-name-component.html',
  styleUrl: './user-icon-and-name-component.css',
})
export class UserIconAndNameComponent {
  userProfile: InputSignal<boolean> = input<boolean>(false);

  private router = inject(Router);
  private authService = inject(AuthService);

  public user$ = this.authService.currentUser$;

  goToProfileSettings(): void {
    this.router.navigate(['/profileSettings']);
  }
}
