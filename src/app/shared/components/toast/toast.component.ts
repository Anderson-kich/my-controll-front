import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { ToastModel } from './toast.model';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent implements OnDestroy {
  public message = 'Erro no sistema!';
  public status: 'success' | 'warning' | 'error' = 'success';
  public duration = 5000;
  public visible = false;
  public timeout: any;

  public getStatusClass(): string {
    const statusClasses: { [key: string]: string } = {
      error: 'text-red-700',
      warning: 'text-orange-700',
      success: 'text-green-700',
    };

    return statusClasses[this.status];
  }

  public getStatusIcon(): string {
    const statusClasses: { [key: string]: string } = {
      error: 'error',
      warning: 'warning',
      success: 'check',
    };

    return statusClasses[this.status];
  }

  public show(params: ToastModel): void {
    this.message = params.message;
    this.status = params.status;
    this.visible = true;
    this.timeout = setTimeout(() => this.close(), this.duration);
  }

  public ngOnDestroy(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  public close(): void {
    this.visible = false;
  }
}
