import { Component, computed, inject, input, signal } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { Session } from '../../models/session';
import { IonButton, IonCard, IonCardContent, IonIcon} from '@ionic/angular/standalone';
import { star, starOutline, chevronDownOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { FavoritesService } from '../../services/sqlite.service';
addIcons({ star, starOutline, chevronDownOutline });

@Component({
  selector: 'app-session-menu-component',
  imports: [IonIcon, IonButton, IonCard, IonCardContent],
  templateUrl: './session-menu-component.html',
  styleUrl: './session-menu-component.css',
})
export class SessionMenuComponent {
  session = input.required<Session>();

  sessionName = computed(() => this.session().name);
  sessionDescription = computed(() => this.session().description);

  sessionService = inject(SessionService);
  isFavorite = signal(false);

  constructor(private router: Router, private favoriteService: FavoritesService) {}

  remnoveThisSession() {
    this.sessionService.removeSession(this.session());
  }

  joinThisSession() {
    this.sessionService.setCurrentSession(this.session());
    this.router.navigate(['/player-campaign-main']);
  }

  async toggleFavorite() {
    this.isFavorite.update(value => !value);

    if (this.isFavorite() && this.session().id) {
      await this.favoriteService.addFavorite(this.session().id!);
    } else {
      await this.favoriteService.removeFavorite(this.session().id!);
    }
  }

  protected goToSessionDetails(session: Session) {
    this.sessionService.setCurrentSession(session);
    this.router.navigate(['/createdSession']);
  }
}
