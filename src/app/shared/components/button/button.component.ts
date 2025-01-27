import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() public name = '';
  @Input() public disabled = false;
  @Input() public type = 'submit';
  @Input() public loading = false;
  @Input() public className = 'purple';
}
