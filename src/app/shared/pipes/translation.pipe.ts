import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation-service/translation.service';
import { TranslationKeys } from '../utilities/i18n';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslationPipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(value: TranslationKeys): string {
    return this.translationService.translate(value);
  }
}
