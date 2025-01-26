import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { FormHintErrorComponent } from '../../../../../shared/components/form-hint-error/form-hint-error.component';
import { IconComponent } from '../../../../../shared/components/icon/icon.component';
import { ValidationClassDirective } from '../../../../../shared/directives/validation-class.directive';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationClassDirective,
    FormHintErrorComponent,
    IconComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent implements OnInit {
  public isLoading = false;
  public isVisiblePassword = false;
  public isVisibleConfirmPassword = false;

  public validateConfirmPassword: ValidatorFn = (
    control: AbstractControl,
  ): ValidationErrors | null => {
    if (!control.parent) {
      return null;
    }

    const password = control.parent.get('password')?.value;
    const confirmPassword = control.value;

    return password && confirmPassword && password !== confirmPassword
      ? { passwordMismatch: true }
      : null;
  };

  public signUpForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      this.validateConfirmPassword,
    ]),
  });

  // public validatePassword(control: AbstractControl): Record<string, boolean> | null {
  //   return control.get('password')?.value === control.get('confirmPassword')?.value
  //     ? null
  //     : { passwordNotMatch: true };
  // }

  public toCheckValidate(): void {
    this.signUpForm.statusChanges.subscribe((status) => {
      const errors = this.signUpForm.errors;
      console.log('Errors', errors);
    });
  }

  public ngOnInit(): void {
    this.toCheckValidate();
  }
}
