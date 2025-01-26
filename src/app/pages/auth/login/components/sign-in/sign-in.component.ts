import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { FormHintErrorComponent } from '../../../../../shared/components/form-hint-error/form-hint-error.component';
import { IconComponent } from '../../../../../shared/components/icon/icon.component';
import { ValidationClassDirective } from '../../../../../shared/directives/validation-class.directive';
import { ToastService } from '../../../../../shared/services/toast-service/toast.service';

@Component({
  selector: 'app-sign-in',
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
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  constructor(private readonly toastService: ToastService) {}

  public isLoading = false;
  public isVisiblePassword = false;

  public signInForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });

  public changeIcon(): void {
    console.log('changeIcon');
  }

  public onSubmit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.showToast();
      this.signInForm.reset();
      this.isLoading = false;
    }, 3000);
  }

  public showToast(): void {
    this.toastService.open({
      message: 'Login realizado com sucesso!',
      status: 'success',
    });
  }
}
