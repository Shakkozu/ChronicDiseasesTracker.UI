import { Component } from '@angular/core';

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrl: './treatment-details.component.scss'
})
export class TreatmentDetailsComponent {

  public treatment: TreatmentDetails = SAMPLE_DATA;

  return() {
    window.history.back();
  }

  getInitials(establishedBy: string) {
    return establishedBy.split(' ').map(n => n[0]).join('').substring(1,3);
  }

}

export const SAMPLE_DATA: TreatmentDetails = {
  disease: 'Diabetes',
  treatment: 'Insulin',
  establishedBy: 'Dr. John Doe',
  establishedOn: new Date(),
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
  ]
};

export interface TreatmentDetails {
  disease: string;
  treatment: string;
  establishedBy: string;
  establishedOn: Date;
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