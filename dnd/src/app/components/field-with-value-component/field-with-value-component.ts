import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'field-with-value-component',
  imports: [],
  templateUrl: './field-with-value-component.html',
  styleUrl: './field-with-value-component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldWithValueComponent),
      multi: true,
    },
  ],
})
export class FieldWithValueComponent implements ControlValueAccessor {
  @Input() title: string = '';
  @Input() placeholder: string = '';
  value: any = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(value);
  }
}
