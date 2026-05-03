import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'dice-roller-component',
  imports: [],
  templateUrl: './dice-roller-component.html',
  styleUrl: './dice-roller-component.css',
})
export class DiceRollerComponent {
  tittle: InputSignal<string> = input.required<string>();
}
