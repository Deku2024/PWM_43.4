import { Component, effect, inject, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { LogTiradasComponent } from '../../components/log-tiradas-component/log-tiradas-component';
import { Router } from '@angular/router';
import { PlayerSideBarComponent } from '../../components/player-side-bar-component/player-side-bar-component';
import { OverlayComponent } from '../../components/overlay-component/overlay-component';
import { CampaignFooterComponent } from '../../components/campaign-footer-component/campaign-footer-component';
import { isPlatformBrowser } from '@angular/common';
import { HeaderLoggedIn } from '../../components/header-logged-in/header-logged-in';
import { DropDownMenuComponent } from '../../components/drop-down-menu-component/drop-down-menu-component';
import { ReactiveFormsModule,
FormBuilder,
FormGroup,
Validators,
AbstractControl,
ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-player-campaign-main',
  imports: [
    LogTiradasComponent,
    PlayerSideBarComponent,
    OverlayComponent,
    CampaignFooterComponent,
    HeaderLoggedIn,
    DropDownMenuComponent,
    ReactiveFormsModule,
  ],
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
  playerCampaignForm: FormGroup;

  lastMenuOpened: WritableSignal<boolean> | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.playerCampaignForm = this.fb.group(
      {
        name: ['Legolas', [Validators.required, Validators.maxLength(50)]],
        age: [0, [Validators.required, Validators.max(1000), Validators.min(1)]],
        experience: [0, [Validators.required, Validators.max(9999999)]],

        classes: ['', [Validators.required]],
        alignment: ['', [Validators.required]],
        race: ['elfo', [Validators.required]],

        life: [0, [Validators.required, Validators.min(0)]],
        maxLife: [0, [Validators.required, Validators.min(0)]],
        tempLife: [0, [Validators.min(0)]],

        attributes: this.fb.group({
          strength: [10, [Validators.required, Validators.min(1), Validators.max(20)]],
          dexterity: [10, [Validators.required, Validators.min(1), Validators.max(20)]],
          constitution: [10, [Validators.required, Validators.min(1), Validators.max(20)]],
          intelligence: [10, [Validators.required, Validators.min(1), Validators.max(20)]],
          wisdom: [10, [Validators.required, Validators.min(1), Validators.max(20)]],
          charisma: [10, [Validators.required, Validators.min(1), Validators.max(20)]],
        }),
      },
      { validators: [
          this.validateLifeNotExceedMax(),
          this.validateRace(),
          this.validateClass(),
          this.validateAlignment()
        ]},
    );
  }

  private validateRace(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const race = group.get('race')?.value;
      const raceList: string[] = this.getRaceList();

      if (race !== null && !raceList.includes(race)) {
        return { 'raceInvalid': true };
      }
      return null;
    };
  }

  private validateAlignment(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const alignment = group.get('alignment')?.value;
      const alignList: string[] = this.getAlignmentList();

      if (alignment !== null && !alignList.includes(alignment)) {
        return { 'alignmentInvalid': true };
      }

      return null;
    };

  }

  private validateClass(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const classes = group.get('class')?.value;
      const classList: string[] = this.getClassList();

      if (classes !== null && !classList.includes(classes)) {
        return { 'classInvalid': true };
      }

      return null;
    };
  }

  private validateLifeNotExceedMax(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const life = group.get('life')?.value;
      const maxLife = group.get('maxLife')?.value;

      if (life !== null && maxLife !== null && life > maxLife) {
        return { lifeExceedsMax: true };
      }
      return null;
    };
  }

  private getRaceList(): string[] {
    return ["humano", "elfo", "enano", "mediano", "dracónido", "tiefling"];
  }

  private getClassList(): string[] {
    return ["guerrero", "mago", "pícaro", "clérigo", "explorador", "bárbaro"];
  }

  private getAlignmentList(): string[] {
    return ["LG", "NG", "CG", "LN", "NN", "CN", "LC", "NC", "LG"];
  }

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
