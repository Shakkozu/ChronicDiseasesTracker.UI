import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { TranslateService } from '@ngx-translate/core';

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
  [(ngModel)]="selectedLanguage">
  @for (language of languages; track language) {
    <mat-radio-button class="example-radio-button" [value]="language">{{language}}</mat-radio-button>
  }
</mat-radio-group>
</div>

    `
})
export class LanguageSettingsComponent {
  public selectedLanguage: string = 'en';
  constructor (private translateService: TranslateService) {
  }
  public languages = ['English', 'Polski'];
  public onLanguageChange() {

  }
}
