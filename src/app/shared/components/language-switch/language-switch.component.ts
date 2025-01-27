import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation-service/translation.service';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-language-switch',
  standalone: true,
  imports: [CommonModule, IconComponent, ButtonComponent, IconComponent],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.scss',
})
export class LanguageSwitchComponent {
  public selectedLanguage: 'en' | 'pt' = 'en';
  public displayMenu = false;

  constructor(private translationService: TranslationService) {}

  public switchLanguage(lang: 'en' | 'pt') {
    this.translationService.setLanguage(lang);
    this.selectedLanguage = lang;
  }
}
