import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-language-settings',
  styleUrl: './language-settings.component.scss',
  template: `
<mat-toolbar color="primary" class="justify-center">
	<span class="text-title-large">
    {{'LANGUAGE_SETTINGS' | translate}}
    </span>
</mat-toolbar>
  <div>
  <mat-radio-group
  aria-labelledby="example-radio-group-label"
  class="example-radio-group"
  (change)="onLanguageChange($event)"
  [(ngModel)]="selectedLanguage">
  @for (language of languagesOptions; track language) {
    <mat-radio-button class="example-radio-button" [value]="language.Culture">{{language.Name}}</mat-radio-button>
  }
</mat-radio-group>
</div>

    `
})
export class LanguageSettingsComponent {
  public selectedLanguage: string = 'en';
  constructor (private translateService: TranslateService, private cookieService: CookieService) {
    this.selectedLanguage = this.cookieService.get('culture') ?? 'en';
  }
  public languages = ['English', 'Polski'];
  public languagesOptions: LanguageCulture[] = [
    { Culture: 'en', Name: 'English'},
    { Culture: 'pl', Name: 'Polski'},
  ];
  public onLanguageChange(event: MatRadioChange) {
    this.translateService.use(event.value)
    this.cookieService.set('culture', event.value);
    console.log(event.value);
  }

  onRadioChange(event: MatRadioChange) {
    console.log('Selected value:', event.value);
  }
}

interface LanguageCulture {
  Culture: string;
  Name: string;
}
