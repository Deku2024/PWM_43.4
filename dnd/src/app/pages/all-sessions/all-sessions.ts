import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';
import { NavBarComponent } from '../../components/nav-bar-component/nav-bar-component';
import { isPlatformBrowser } from '@angular/common';
import { OverlayComponent } from '../../components/overlay-component/overlay-component';
import { SessionMenuComponent } from '../../components/session-menu-component/session-menu-component';
import { SessionService } from '../../services/session.service';
import { Session } from '../../models/session';
import { Router } from '@angular/router';

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

  sessioService = inject(SessionService);
  sessions: WritableSignal<Session[]> = signal<Session[]>([]);

  constructor(private router: Router) {
  }

  async ngOnInit() {
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
    this.sessions = this.sessioService.getSessionsList();
  }

  ngOnDestroy() {
    if (this.mediaQueryList && this.mediaQueryHandler) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryHandler);
    }
  }

  toggleNavBar() {
    this.showNavBar.set(!this.showNavBar());
  }

  goToJoinSession() {
    this.router.navigate(['/joinSession']);
  }
}
