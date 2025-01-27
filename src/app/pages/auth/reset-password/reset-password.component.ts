import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { FormHintErrorComponent } from '../../../shared/components/form-hint-error/form-hint-error.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { ValidationClassDirective } from '../../../shared/directives/validation-class.directive';
import { ToastService } from '../../../shared/services/toast-service/toast.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    ButtonComponent,
    ReactiveFormsModule,
    ValidationClassDirective,
    FormHintErrorComponent,
    IconComponent,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  constructor(private readonly toastService: ToastService) {}

  public isLoading = false;

  public resetPasswordForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  public onSubmit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.showToast();
      this.resetPasswordForm.reset();
      this.isLoading = false;
    }, 3000);
  }

  public showToast(): void {
    this.toastService.open({
      message: 'Email enviado com sucesso!',
      status: 'success',
    });
  }
}
