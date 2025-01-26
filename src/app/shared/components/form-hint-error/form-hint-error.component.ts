import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TEXT } from '../../utilities/const-text-app';

@Component({
  selector: 'app-form-hint-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-hint-error.component.html',
  styleUrl: './form-hint-error.component.scss',
})
export class FormHintErrorComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['control'].currentValue);
  }
  @Input() public control: AbstractControl | null = null;

  @Input() public message: string | null = null;

  public TEXT = TEXT;
}
