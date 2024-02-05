export class DateService {

	public static getDurationString(startDate: Date | string, endDate: Date | undefined): string {
		const parseDate = (dateStr: string): Date => new Date(dateStr);
		var startDateStr = '';
		if (startDate instanceof Date) {
			startDateStr = startDate.toLocaleDateString();
		}
		else if (typeof startDate === 'string') {
			startDateStr = parseDate(startDate).toLocaleDateString();
		}
		const endDateStr = endDate ? endDate.toLocaleDateString() : 'now';
		return `${startDateStr} - ${ endDateStr }`
	}
}