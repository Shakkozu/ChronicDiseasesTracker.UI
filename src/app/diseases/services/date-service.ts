export class DateService {

	public static getDurationString(startDate: Date | string, endDate: Date | string | undefined): string {
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
			endDateStr = 'now';
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