import { Component, computed, inject, input } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { Session } from '../../models/session';

@Component({
  selector: 'app-session-menu-component',
  imports: [],
  templateUrl: './session-menu-component.html',
  styleUrl: './session-menu-component.css',
})
export class SessionMenuComponent {
  session = input.required<Session>();

  sessionName = computed(() => this.session().name);
  sessionDescription = computed(() => this.session().description);

  sessionService = inject(SessionService);

  constructor(private router: Router) {}

  remnoveThisSession() {
    this.sessionService.removeSession(this.session());
  }

  joinThisSession() {
    this.sessionService.setCurrentSession(this.session());
    this.router.navigate(['/player-campaign-main']);
  }
}
