import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';
import { NavBarComponent } from '../../components/nav-bar-component/nav-bar-component';
import { OverlayComponent } from '../../components/overlay-component/overlay-component';
import { SessionService } from '../../services/session.service';
import { Session } from '../../models/session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-created-session',
  imports: [HeaderLoggedIn, NavBarComponent, OverlayComponent],
  templateUrl: './created-session.html',
  styleUrl: './created-session.css',
})
export class CreatedSession implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  isMobile = signal<boolean>(false);
  showNavBar = signal<boolean>(true);

  private mediaQueryList!: MediaQueryList;
  private mediaQueryHandler!: (e: MediaQueryListEvent) => void;

  sessionService = inject(SessionService);
  session: WritableSignal<Session | null> = signal<Session | null>(null);

  constructor(private router: Router) {}

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

    this.session.set(this.sessionService.getCurrentSession());
  }

  ngOnDestroy() {
    if (this.mediaQueryList && this.mediaQueryHandler) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryHandler);
    }
  }

  toggleNavBar() {
    this.showNavBar.set(!this.showNavBar());
  }

  protected returnToAllSessions() {
    this.sessionService.clearCurrentSession();
    this.router.navigate(['/all-sessions']);
  }
}
