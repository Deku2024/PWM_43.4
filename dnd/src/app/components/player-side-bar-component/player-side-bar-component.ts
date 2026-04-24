import { Component, input, InputSignal, output } from '@angular/core';
import { UserIconAndNameComponent } from '../user-icon-and-name-component/user-icon-and-name-component';

@Component({
  selector: 'player-side-bar-component',
  imports: [UserIconAndNameComponent],
  templateUrl: './player-side-bar-component.html',
  styleUrl: './player-side-bar-component.css',
})
export class PlayerSideBarComponent {
  hideButton: InputSignal<boolean> = input<boolean>(false);
  callback = output();

  goBack(): void {
    this.callback.emit();
  }
}
