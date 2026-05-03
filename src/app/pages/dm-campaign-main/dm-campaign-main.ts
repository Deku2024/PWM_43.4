import { Component, inject, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';
import { PlayerSideBarComponent } from '../../components/player-side-bar-component/player-side-bar-component';
import { LogTiradasComponent } from '../../components/log-tiradas-component/log-tiradas-component';
import { DmNoteComponent } from '../../components/dm-note-component/dm-note-component';
import { DropDownMenuComponent } from '../../components/drop-down-menu-component/drop-down-menu-component';
import { OverlayComponent } from '../../components/overlay-component/overlay-component';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { CampaignFooterComponent } from '../../components/campaign-footer-component/campaign-footer-component';

@Component({
  selector: 'app-dm-campaign-main',
  imports: [
    HeaderLoggedIn,
    PlayerSideBarComponent,
    LogTiradasComponent,
    DmNoteComponent,
    DropDownMenuComponent,
    OverlayComponent,
    CampaignFooterComponent,
  ],
  templateUrl: './dm-campaign-main.html',
  styleUrl: './dm-campaign-main.css',
})
export class DmCampaignMain {
  isLogThrowsBeingShow = signal<boolean>(true);
  isPlayerSideBarBeingShow = signal<boolean>(true);
  isBottomMenuBeingShow = signal<boolean>(false);

  mediaQuery = signal<boolean>(false);
  isAnythingbeingShown = signal<boolean>(false);
  plataformId: Object = inject(PLATFORM_ID);

  lastMenuOpened: WritableSignal<boolean> | null = null;

  constructor(private router: Router) {}

  public interactMenu(which: number): void {
    if (this.mediaQuery()) {
      this.decideWichIsShown(which);
    } else {
      // lo que se muestra por defecto en desktop
      this.isLogThrowsBeingShow.set(true);
      this.isPlayerSideBarBeingShow.set(true);
      this.isBottomMenuBeingShow.set(false);
    }

    this.updateIsAnythingbeingShown();
  }

  private decideWichIsShown(which: number) {
    switch (which) {
      case 0:
        this.closeEverything();
        break;
      case 1:
        this.showAMenu(this.isLogThrowsBeingShow);
        break;
      case 2:
        this.showAMenu(this.isPlayerSideBarBeingShow);
        break;
      case 3:
        this.showAMenu(this.isBottomMenuBeingShow);
        break;
    }
  }

  private showAMenu(menu: WritableSignal<boolean>) {
    if (this.lastMenuOpened === menu) {
      menu.set(false);
      this.lastMenuOpened = null;
      return;
    }

    this.lastMenuOpened?.set(false);
    this.lastMenuOpened = menu;
    this.lastMenuOpened.set(!this.lastMenuOpened());
  }

  private closeEverything() {
    this.isLogThrowsBeingShow.set(false);
    this.isPlayerSideBarBeingShow.set(false);
    this.isBottomMenuBeingShow.set(false);
  }

  public goBack(): void {
    this.router.navigate(['/sessions']);
  }

  public updateIsAnythingbeingShown() {
    this.isAnythingbeingShown.set(
      this.isLogThrowsBeingShow() ||
        this.isPlayerSideBarBeingShow() ||
        this.isBottomMenuBeingShow(),
    );
  }

  private previousMediaQuery = signal<boolean | null>(null);

  ngOnInit(): void {
    if (isPlatformBrowser(this.plataformId)) {
      const mql = matchMedia('(max-width: 600px), (orientation: portrait)');

      this.mediaQuery.set(mql.matches);
      this.previousMediaQuery.set(mql.matches);

      this.resetMenusByScreenSize();

      const handler = (e: MediaQueryListEvent) => {
        const newValue = e.matches;
        this.mediaQuery.set(newValue);

        if (this.previousMediaQuery() !== newValue) {
          this.resetMenusByScreenSize();
          this.previousMediaQuery.set(newValue);
        }
      };

      mql.addEventListener('change', handler);
    }
    this.interactMenu(0);
  }

  private resetMenusByScreenSize(): void {
    if (this.mediaQuery()) {
      this.isLogThrowsBeingShow.set(false);
      this.isPlayerSideBarBeingShow.set(false);
      this.isBottomMenuBeingShow.set(false);
    } else {
      this.isLogThrowsBeingShow.set(true);
      this.isPlayerSideBarBeingShow.set(true);
      this.isBottomMenuBeingShow.set(false);
    }

    this.lastMenuOpened = null;
    this.updateIsAnythingbeingShown();
  }
}
