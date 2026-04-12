import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { LogTiradasComponent } from '../../components/log-tiradas-component/log-tiradas-component';
import { Router } from '@angular/router';
import { PlayerSideBarComponent } from '../../components/player-side-bar-component/player-side-bar-component';
import { OverlayComponent } from '../../components/overlay-component/overlay-component';
import { CampaignFooterComponent } from '../../components/campaign-footer-component/campaign-footer-component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-player-campaign-main',
  imports: [LogTiradasComponent, PlayerSideBarComponent, OverlayComponent, CampaignFooterComponent],
  templateUrl: './player-campaign-main.html',
  styleUrl: './player-campaign-main.css',
})
export class PlayerCampaignMain implements OnInit {
  isLogThrowsBeingShow = signal<boolean>(true);
  isPlayerSideBarBeingShow = signal<boolean>(true);
  isBottomMenuBeingShow = signal<boolean>(false);

  mediaQuery = signal<boolean>(false);
  isAnythingbeingShown = signal<boolean>(false);
  plataformId: Object = inject(PLATFORM_ID);

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
  }

  private decideWichIsShown(which: number) {
    this.closeEverything();
    switch (which) {
      case 0:
        break;
      case 1:
        this.isLogThrowsBeingShow.set(!this.isLogThrowsBeingShow());
        break;
      case 2:
        this.isPlayerSideBarBeingShow.set(!this.isPlayerSideBarBeingShow());
        break;
      case 3:
        this.isBottomMenuBeingShow.set(!this.isBottomMenuBeingShow());
        break;
    }
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
    console.log(
      this.isLogThrowsBeingShow() ||
        this.isPlayerSideBarBeingShow() ||
        this.isBottomMenuBeingShow(),
    );
    this.isAnythingbeingShown.set(
      this.isLogThrowsBeingShow() || this.isPlayerSideBarBeingShow() || this.isBottomMenuBeingShow()
    );
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.plataformId)) {
      const mql = matchMedia('(max-width: 600px), (orientation: portrait)');

      this.mediaQuery.set(mql.matches);

      const handler = (e: MediaQueryListEvent) => {
        this.mediaQuery.set(e.matches);
      };

      mql.addEventListener('change', handler);
    }

    this.interactMenu(0);
  }
}
