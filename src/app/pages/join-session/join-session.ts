import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';
import { isPlatformBrowser } from '@angular/common';
import { NavBarComponent } from '../../components/nav-bar-component/nav-bar-component';
import { OverlayComponent } from '../../components/overlay-component/overlay-component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-session',
  imports: [HeaderLoggedIn, NavBarComponent, OverlayComponent],
  templateUrl: './join-session.html',
  styleUrl: './join-session.css',
})
export class JoinSession implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  isMobile = signal<boolean>(false);
  showNavBar = signal<boolean>(true);

  private mediaQueryList!: MediaQueryList;
  private mediaQueryHandler!: (e: MediaQueryListEvent) => void;

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.mediaQueryList = window.matchMedia('(max-width: 600px), (orientation: portrait)');
      this.isMobile.set(this.mediaQueryList.matches);

      this.mediaQueryHandler = (e: MediaQueryListEvent) => {
        this.isMobile.set(e.matches);

        if (e.matches) {
          this.showNavBar.set(false);
        } else {
          this.showNavBar.set(true);
        }
      };

      this.mediaQueryList.addEventListener('change', this.mediaQueryHandler);
    }
  }

  ngOnDestroy() {
    if (this.mediaQueryList && this.mediaQueryHandler) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryHandler);
    }
  }

  toggleNavBar() {
    this.showNavBar.set(!this.showNavBar());
  }

  goToPlayerCampaign() {
    this.router.navigate(['player-campaign-main']);
  }

  goToAllSessions() {
    this.router.navigate(['/all-sessions']);
  }
}
