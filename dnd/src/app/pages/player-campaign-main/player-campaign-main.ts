import {
  ChangeDetectorRef,
  Component,
  effect,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
  WritableSignal,
} from '@angular/core';
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
import { FieldWithValueComponent } from '../../components/field-with-value-component/field-with-value-component';
import { DiceRollerComponent } from '../../components/dice-roller-component/dice-roller-component';
import { PlayerService } from '../../services/player.service';

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
    FieldWithValueComponent,
    DiceRollerComponent,
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

  private readonly raceList = ['humano', 'elfo', 'enano', 'mediano', 'dracónido', 'tiefling'];
  private readonly classList = ['guerrero', 'mago', 'pícaro', 'clérigo', 'explorador', 'bárbaro'];
  private readonly alignList = ['LG', 'NG', 'CG', 'LN', 'NN', 'CN', 'LC', 'NC', 'CC'];

  imagePreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: PlayerService,
    private cdr: ChangeDetectorRef,
  ) {
    this.playerCampaignForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.maxLength(50)]],
        age: ['', [Validators.required, Validators.max(1000), Validators.min(1)]],
        experience: ['', [Validators.required, Validators.max(9999999)]],

        classes: ['', [Validators.required]],
        alignment: ['', [Validators.required]],
        race: ['', [Validators.required]],

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
      {
        validators: [
          this.validateLifeNotExceedMax(),
          this.validateRace(),
          this.validateClass(),
          this.validateAlignment(),
        ],
      },
    );
  }

  private validateRace(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const race: string = group.get('race')?.value;

      if (race && !this.raceList.includes(race.toLowerCase())) {
        return { raceInvalid: true };
      }
      return null;
    };
  }

  private validateAlignment(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const alignment: string = group.get('alignment')?.value;

      if (alignment && !this.alignList.includes(alignment.toUpperCase())) {
        return { alignmentInvalid: true };
      }

      return null;
    };
  }

  private validateClass(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      const classes: string = group.get('classes')?.value;

      if (classes && !this.classList.includes(classes.toLowerCase())) {
        return { classInvalid: true };
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

  async onSubmit() {
    if (this.playerCampaignForm.valid) {
      await this.service.saveCharacter(this.playerCampaignForm.value);
      console.log('Guardado correcto');
    } else {
      console.log('Formulario inválido');
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    console.log(input.files);

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      console.error('El archivo no es una imagen');
      return;
    }

    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = () => {
      console.log('preview generado');
      this.imagePreview = reader.result;
      this.cdr.markForCheck();
    };

    reader.readAsDataURL(file);
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
