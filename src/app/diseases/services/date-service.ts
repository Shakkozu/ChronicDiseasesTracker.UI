import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
	providedIn: 'root'
})
export class DateService {
	constructor (private translateService: TranslateService) {
	}

	public getDurationString(startDate: Date | string, endDate: Date | string | undefined): string {
		const parseDate = (dateStr: string): Date => new Date(dateStr);
		let startDateStr = '';
		let endDateStr = '';
		if (startDate instanceof Date) {
			startDateStr = startDate.toLocaleDateString();
		}
		else if (typeof startDate === 'string') {
			startDateStr = parseDate(startDate).toLocaleDateString();
		}

		if (!endDate) {
			const currentCulture = this.translateService.currentLang;
			if (currentCulture === 'en')
				endDateStr = 'now';
			if (currentCulture === 'pl')
				endDateStr = 'obecnie';
		}
		else if (endDate instanceof Date) {
			endDateStr = endDate.toLocaleDateString();
		}
		else if (typeof endDate === 'string') {
			endDateStr = parseDate(endDate).toLocaleDateString();
		}

		return `${startDateStr} - ${ endDateStr }`
	}
}