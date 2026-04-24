import {
  Component,
  input, output,
} from '@angular/core';
import { UserIconAndNameComponent } from '../user-icon-and-name-component/user-icon-and-name-component';
import { Router } from '@angular/router';

@Component({
  selector: 'header-logged-in',
  imports: [UserIconAndNameComponent],
  templateUrl: './header-logged-in.html',
  styleUrl: './header-logged-in.css',
})
export class HeaderLoggedIn {

  callback = output<void>();

  inCampaign = input(false);
  isMobile = input<boolean>(false);

  constructor(private router: Router) {}

  protected goToHomePage() {
    this.router.navigate(['/home']);
  }

  protected goToSessions() {
    this.router.navigate(['/all-sessions']);
  }
}
