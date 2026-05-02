import { Component, input, InputSignal, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-icon-and-name-component',
  imports: [],
  templateUrl: './user-icon-and-name-component.html',
  styleUrl: './user-icon-and-name-component.css',
})
export class UserIconAndNameComponent {
  userProfile: InputSignal<boolean> = input<boolean>(false);

  constructor(private router: Router) {}

  goToProfileSettings(): void {
    this.router.navigate(['/profileSettings']);
  }
}
