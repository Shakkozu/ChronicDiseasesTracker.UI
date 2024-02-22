// translation-loader.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class TranslationLoaderService implements TranslateLoader {
	constructor (private http: HttpClient) { }

	public getTranslation(lang: string): Observable<any> {
		if (lang.length < 1)
			lang = 'en';
		return this.http.get(`assets/i18n/${ lang }.json`);
	}
}
