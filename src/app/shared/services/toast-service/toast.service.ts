import { Injectable } from '@angular/core';
import { ToastComponent } from '../../components/toast/toast.component';
import { ToastModel } from '../../components/toast/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  private toastComponent!: ToastComponent;

  public register(toastComponent: ToastComponent) {
    this.toastComponent = toastComponent;
  }

  public open(params: ToastModel) {
    if (this.toastComponent) {
      this.toastComponent.show(params);
    }
  }
}
