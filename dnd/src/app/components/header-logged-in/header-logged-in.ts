import { Component, input, InputSignal, OnDestroy, OnInit, signal } from '@angular/core';
import { UserIconAndNameComponent } from '../user-icon-and-name-component/user-icon-and-name-component';
import { Router } from '@angular/router';

@Component({
  selector: 'header-logged-in',
  imports: [UserIconAndNameComponent],
  templateUrl: './header-logged-in.html',
  styleUrl: './header-logged-in.css',
})
export class HeaderLoggedIn implements OnInit, OnDestroy{
  inCampaign: InputSignal<boolean> = input<boolean>(false);
  clickOnHamburger = signal<boolean>(false);

  constructor(private router: Router) {}

  isMobile = signal<boolean>(false);

  private mediaQueryList!: MediaQueryList;
  private mediaQueryHandler!: (e: MediaQueryListEvent) => void;

  ngOnInit() {
    this.mediaQueryList = window.matchMedia('(max-width: 768px)');
    this.isMobile.set(this.mediaQueryList.matches);
    this.mediaQueryHandler = (e: MediaQueryListEvent) => {
      this.isMobile.set(e.matches);
    };
    this.mediaQueryList.addEventListener('change', this.mediaQueryHandler);
  }

  ngOnDestroy() {
    this.mediaQueryList.removeEventListener('change', this.mediaQueryHandler);
  }

  protected goToHomePage() {
    this.router.navigate(['/home']);
  }

  protected goToSessions() {
    this.router.navigate(['/all-sessions']);
  }
}
