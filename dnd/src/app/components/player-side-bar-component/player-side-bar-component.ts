import { Component, output } from '@angular/core';

@Component({
  selector: 'player-side-bar-component',
  imports: [],
  templateUrl: './player-side-bar-component.html',
  styleUrl: './player-side-bar-component.css',
})
export class PlayerSideBarComponent {
  callback = output();
  goBack(): void {
    this.callback.emit();
  }
}
