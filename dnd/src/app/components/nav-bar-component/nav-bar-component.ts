import { Component, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayComponent } from '../overlay-component/overlay-component';

@Component({
  selector: 'nav-bar-component',
  imports: [],
  templateUrl: './nav-bar-component.html',
  styleUrl: './nav-bar-component.css',
})
export class NavBarComponent {
  callback = output<void>();
  hideCloseButton = input<boolean>(true);


  constructor(private router: Router) {}

  public goToAllSessions(): void {
    this.router.navigate(['/all-sessions']);
  }

  public goToCreateSession(): void {
    this.router.navigate(['/create-session']);
  }

  public goToConfiguration(): void {
    this.router.navigate(['/defaultSettings']);
  }
}
