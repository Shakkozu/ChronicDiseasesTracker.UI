// translation-loader.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class TranslationLoaderService implements TranslateLoader {
	constructor (private http: HttpClient) { }

	public getTranslation(lang: string): Observable<any> {
		return this.http.get(`assets/i18n/${ lang }.json`);
	}
}
