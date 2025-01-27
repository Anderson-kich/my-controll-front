import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslationKeys, translations } from '../../utilities/i18n';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private currentLang = new BehaviorSubject<'en' | 'pt'>('en'); // Idioma padrão
  private translations = translations;

  currentLang$ = this.currentLang.asObservable(); // Observable para ouvir mudanças de idioma

  public setLanguage(lang: 'en' | 'pt') {
    this.currentLang.next(lang); // Atualiza o idioma
  }

  public translate(key: TranslationKeys): string {
    const lang: 'en' | 'pt' = this.currentLang.value;

    if (!this.translations[lang]) {
      return key;
    }

    return this.translations[lang][key] || key;
  }
}
