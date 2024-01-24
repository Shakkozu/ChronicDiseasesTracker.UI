export class DateService {

	public static getDurationString(startDate: Date, endDate: Date | undefined): string {
		const endDateStr = endDate ? endDate.toLocaleDateString() : 'now';
		return `${ startDate.toLocaleDateString() } - ${ endDateStr }`
	}
}