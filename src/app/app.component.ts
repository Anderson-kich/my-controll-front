import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { ToastService } from './shared/services/toast-service/toast.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent, HeaderComponent],
  template: `
    <div>
      <app-header></app-header>
      <app-toast></app-toast>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ToastComponent) toastComponent!: ToastComponent;

  constructor(private readonly toastService: ToastService) {}

  public title = 'controle-financeiro';

  public ngAfterViewInit() {
    this.toastService.register(this.toastComponent);
  }
}
