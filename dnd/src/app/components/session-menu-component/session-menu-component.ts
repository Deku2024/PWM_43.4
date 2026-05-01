import { Component, inject, Input, input, signal } from '@angular/core';
import { Session, SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-menu-component',
  imports: [],
  templateUrl: './session-menu-component.html',
  styleUrl: './session-menu-component.css',
})
export class SessionMenuComponent {
  session = input.required<Session>();

  sessionName = signal('');
  sessionDescription = signal('');

  sessionService = inject(SessionService);

  constructor(private router: Router) {
    this.sessionName.set(this.session().name);
    this.sessionDescription.set(this.session().description);
  }

  remnoveThisSession() {
    this.sessionService.removeSession(this.session());
  }

  joinThisSession() {
   this.router.navigate(['/player-campaign-main']);
  }
}
