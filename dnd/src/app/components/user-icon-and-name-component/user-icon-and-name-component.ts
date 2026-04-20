import { Component, output } from '@angular/core';

@Component({
  selector: 'user-icon-and-name-component',
  imports: [],
  templateUrl: './user-icon-and-name-component.html',
  styleUrl: './user-icon-and-name-component.css',
})
export class UserIconAndNameComponent {
  callback = output();

  goBack(): void {
    this.callback.emit();
  }
}
