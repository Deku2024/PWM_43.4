import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'log-tiradas-component',
  imports: [],
  templateUrl: './log-tiradas-component.html',
  styleUrl: './log-tiradas-component.css',
})
export class LogTiradasComponent {
  isMenuBeingShow: InputSignal<boolean> = input.required<boolean>();

}
