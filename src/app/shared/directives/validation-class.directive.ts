import { Directive, HostBinding, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appValidationClass]',
  standalone: true,
})
export class ValidationClassDirective {
  @Input('appValidationClass') control: AbstractControl | null = null;
  @Input() errorClass: string = 'error';

  @HostBinding('class')
  get elementClass(): string {
    if (this.control?.invalid && (this.control?.dirty || this.control?.touched)) {
      return this.errorClass;
    }
    return '';
  }
}
