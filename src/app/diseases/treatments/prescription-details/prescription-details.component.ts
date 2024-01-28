import { Component } from '@angular/core';
import { FrequencyEntry, Recommendation } from '../treatment-details/treatment-details.component';
import { DateService } from '../../services/date-service';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrl: './prescription-details.component.scss'
})
export class PrescriptionDetailsComponent {

  details: PrescriptionHistoryDetails = SAMPLE_DATA;
  return() {
    window.history.back();
  }

  public getOrderedPrescriptionEntries(): PrescriptionEntry[] {
    return this.details.prescriptionEntries.sort((a, b) => {
      const aEndDate = a.endDate ? a.endDate.getTime() : 0;
      const bEndDate = b.endDate ? b.endDate.getTime() : 0;
      return aEndDate - bEndDate;
    });
  }

  public getDurationString(startDate: Date, endDate: Date | undefined) {
    return DateService.getDurationString(startDate, endDate);
  }
}

export interface PrescriptionHistoryDetails {
  name: string;
  treatmentGuid: string;
  prescriptionEntries: PrescriptionEntry[];
};
export interface PrescriptionEntry {
  startDate: Date;
  endDate?: Date;
  frequency: string;
  frequencyEntries: FrequencyEntry[];
};


export const SAMPLE_DATA: PrescriptionHistoryDetails = {
  name: 'Insulin',
  treatmentGuid: '00000000-0000-0000-0000-000000000000',
  prescriptionEntries: [
    {
      startDate: new Date(),
      frequency: 'Daily',
      frequencyEntries: [
        { dosage: '30mg', when: 'Morning' },
        { dosage: '20mg', when: 'Night' }
      ]
    },
    {
      startDate: new Date(),
      endDate: new Date(),
      frequency: 'Daily',
      frequencyEntries: [
        { dosage: '10mg', when: 'Morning' },
        { dosage: '10mg', when: 'Evening' },
        { dosage: '20mg', when: 'Night' }
      ]
    },
    {
      startDate: new Date(),
      endDate: new Date(),
      frequency: 'Daily',
      frequencyEntries: [
        { dosage: '10mg', when: 'after every meal' },
      ]
    },
    {
      startDate: new Date(),
      endDate: new Date(),
      frequency: 'Daily',
      frequencyEntries: [
        { dosage: '90mg', when: 'Night' }
      ]
    },
  ]

}
