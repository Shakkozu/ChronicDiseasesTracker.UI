import { Component } from '@angular/core';

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrl: './treatment-details.component.scss'
})
export class TreatmentDetailsComponent {

  public treatment: TreatmentDetails = SAMPLE_DATA;
  public get getDiseaseGuid(): string {
    return this.treatment.diseaseGuid;

  }

  return() {
    window.history.back();
  }

  getDateString() {
    const endDate = this.treatment.endDate ? this.treatment.endDate.toLocaleDateString() : 'now';
    return `${ this.treatment.startDate.toLocaleDateString() } - ${ endDate}`
  }

  getInitials(establishedBy: string) {
    return establishedBy.split(' ').map(n => n[0]).join('').substring(1,3);
  }

}

export const SAMPLE_DATA: TreatmentDetails = {
  disease: 'Diabetes',
  diseaseGuid: '00000000-0000-0000-0000-000000000000',
  guid: '00000000-0000-0000-0000-000000000000',
  treatment: 'Insulin',
  establishedBy: 'Dr. John Doe',
  establishedOn: new Date(),
  startDate: new Date(),
  medications: [
    {
      name: 'Insulin',
      frequencyEntries: [{ dosage: '10mg', when: 'Morning' }],
      dosage: '10mg',
      frequency: 'Daily',
      establishedOn: new Date()
    },
    {
      name: 'Metformin',
      frequencyEntries: [{ dosage: '10mg', when: 'Morning' }, { dosage: '10mg', when: 'Evening' }, { dosage: '20mg', when: 'Night' }],
      dosage: '10mg',
      frequency: 'Daily',
      establishedOn: new Date()
    },
    {
      name: 'Glipizide',
      frequencyEntries: [{ dosage: '10mg', when: 'Morning' }, { dosage: '10mg', when: 'Evening' }],
      dosage: '10mg',
      frequency: 'Daily',
      establishedOn: new Date()
    },
    {
      name: 'Insulin',
      frequencyEntries: [{ dosage: '10mg', when: 'Morning' }],
      dosage: '10mg',
      frequency: 'Daily',
      establishedOn: new Date()
    },
    {
      name: 'Metformin',
      frequencyEntries: [{ dosage: '10mg', when: 'Morning' }, { dosage: '10mg', when: 'Evening' }, { dosage: '20mg', when: 'Night' }],
      dosage: '10mg',
      frequency: 'Daily',
      establishedOn: new Date()
    },
    {
      name: 'Glipizide',
      frequencyEntries: [{ dosage: '10mg', when: 'Morning' }, { dosage: '10mg', when: 'Evening' }],
      dosage: '10mg',
      frequency: 'Daily',
      establishedOn: new Date()
    },
    {
      name: 'Insulin',
      frequencyEntries: [{ dosage: '10mg', when: 'Morning' }],
      dosage: '10mg',
      frequency: 'Daily',
      establishedOn: new Date()
    },
    {
      name: 'Metformin',
      frequencyEntries: [{ dosage: '10mg', when: 'Morning' }, { dosage: '10mg', when: 'Evening' }, { dosage: '20mg', when: 'Night' }],
      dosage: '10mg',
      frequency: 'Daily',
      establishedOn: new Date()
    },
    {
      name: 'Glipizide',
      frequencyEntries: [{ dosage: '10mg', when: 'Morning' }, { dosage: '10mg', when: 'Evening' }],
      dosage: '10mg',
      frequency: 'Daily',
      establishedOn: new Date()
    },
  ]
};

export interface TreatmentDetails {
  guid: string;
  diseaseGuid: string;
  disease: string;
  treatment: string;
  establishedBy: string;
  establishedOn: Date;
  startDate: Date;
  endDate?: Date;
  medications: Medication[];
}



export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  establishedOn: Date;
  frequencyEntries: FrequencyEntry[];
}

export interface FrequencyEntry {
  dosage: string;
  when: string;
}