import { Component, input, InputSignal, output } from '@angular/core';

@Component({
  selector: 'overlay-component',
  imports: [],
  templateUrl: './overlay-component.html',
  styleUrl: './overlay-component.css',
})
export class OverlayComponent {
  activate: InputSignal<boolean> = input.required<boolean>();
  needToCoverUntilFullBottom: InputSignal<boolean> = input<boolean>(false);
  callback = output();

  activateFunction(): void {
    this.callback.emit();
  }
}
