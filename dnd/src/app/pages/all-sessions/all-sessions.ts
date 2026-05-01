import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';
import { NavBarComponent } from '../../components/nav-bar-component/nav-bar-component';
import { isPlatformBrowser } from '@angular/common';
import { OverlayComponent } from '../../components/overlay-component/overlay-component';
import { SessionMenuComponent } from '../../components/session-menu-component/session-menu-component';
import { Session, SessionService } from '../../services/session.service';

@Component({
  selector: 'app-all-sessions',
  imports: [HeaderLoggedIn, NavBarComponent, OverlayComponent, SessionMenuComponent],
  templateUrl: './all-sessions.html',
  styleUrl: './all-sessions.css',
})
export class AllSessions implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  isMobile = signal<boolean>(false);
  showNavBar = signal<boolean>(true);

  private mediaQueryList!: MediaQueryList;
  private mediaQueryHandler!: (e: MediaQueryListEvent) => void;

  sessions = signal<Session[]>([]);
  sessioService =  inject(SessionService);

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

    this.sessioService.getSessions().subscribe(sessions => {
      this.sessions.set(sessions);
    });
  }

  ngOnDestroy() {
    if (this.mediaQueryList && this.mediaQueryHandler) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryHandler);
    }
  }

  toggleNavBar() {
    this.showNavBar.set(!this.showNavBar());
  }
}
