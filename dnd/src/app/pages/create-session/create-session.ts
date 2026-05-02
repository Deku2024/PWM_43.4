import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { isPlatformBrowser } from '@angular/common';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';
import { NavBarComponent } from '../../components/nav-bar-component/nav-bar-component';
import { OverlayComponent } from '../../components/overlay-component/overlay-component';
import { Session } from '../../models/session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-session',
  imports: [HeaderLoggedIn, NavBarComponent, OverlayComponent],
  templateUrl: './create-session.html',
  styleUrl: './create-session.css',
})
export class CreateSession implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  isMobile = signal<boolean>(false);
  showNavBar = signal<boolean>(true);
  sessionService = inject(SessionService);

  private mediaQueryList!: MediaQueryList;
  private mediaQueryHandler!: (e: MediaQueryListEvent) => void;

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
  }

  ngOnDestroy() {
    if (this.mediaQueryList && this.mediaQueryHandler) {
      this.mediaQueryList.removeEventListener('change', this.mediaQueryHandler);
    }
  }

  toggleNavBar() {
    this.showNavBar.set(!this.showNavBar());
  }

  createSession(
    nameInput: HTMLInputElement,
    descriptionTextarea: HTMLTextAreaElement,
    numberOfPlayersInput: HTMLInputElement,
    numberOfPlayersMobileInput: HTMLInputElement,
    passwordInput: HTMLInputElement,
  ): void {

    let session = this.buildSession(
      nameInput.value,
      descriptionTextarea.value,
      this.isMobile() ? numberOfPlayersMobileInput.value : numberOfPlayersInput.value,
      passwordInput.value,
    );

    this.sessionService.addSession(session);
    this.sessionService.setCurrentSession(session);
    this.clearFields(nameInput, descriptionTextarea, numberOfPlayersInput, numberOfPlayersMobileInput, passwordInput);
    this.router.navigate(['/createdSession']);
  }

  private clearFields(nameInput: HTMLInputElement, descriptionTextarea: HTMLTextAreaElement, numberOfPlayersInput: HTMLInputElement, numberOfPlayersMobileInput: HTMLInputElement, passwordInput: HTMLInputElement) {
    nameInput.value = '';
    descriptionTextarea.value = '';
    numberOfPlayersInput.value = '';
    numberOfPlayersMobileInput.value = '';
    passwordInput.value = '';
  }

  private buildSession(
    name: string,
    description: string,
    numberOfPlayers: string,
    password: string,
  ): Session {
    return {
      name: name,
      description: description,
      players: [],
      numberOfPlayers: parseInt(numberOfPlayers) || 0,
      password: password,
    };
  }
}
