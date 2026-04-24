import { Component, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar-component',
  imports: [],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.css',
  host: {
    '[class.navbar-hidden]': 'hideButton()',
  },
})
export class NavBarComponent {
  hideButton = input<boolean>(false);

  constructor(private router: Router) {}

  public goToAllSessions(): void {
    this.router.navigate(['/all-sessions']);
  }

  public goToCreateSession(): void {
    this.router.navigate(['/create-session']);
  }

  public goToConfiguration(): void {
    this.router.navigate(['/profileSettings']);
  }
}
