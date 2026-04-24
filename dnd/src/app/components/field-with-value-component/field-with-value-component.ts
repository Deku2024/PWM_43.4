import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'field-with-value-component',
  imports: [],
  templateUrl: './field-with-value-component.html',
  styleUrl: './field-with-value-component.css',
})
export class FieldWithValueComponent {
  tittle: InputSignal<string> = input.required<string>();
  placeholder: InputSignal<string> = input.required<string>();
}
