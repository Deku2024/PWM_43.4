import { Component, signal, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dnd');

  private firestore = inject(Firestore);

  constructor() {
    console.log('App iniciada correctamente');
  }
}
