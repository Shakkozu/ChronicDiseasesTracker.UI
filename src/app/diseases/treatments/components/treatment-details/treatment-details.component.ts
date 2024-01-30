import { Component } from '@angular/core';
import { DateService } from '../../../services/date-service';
import { TreatmentDetails, Recommendation, FormRecommendation } from '../../../model/model';

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
    DateService.getDurationString(this.treatment.startDate, this.treatment.endDate);
  }

  getInitials(establishedBy: string) {
    return establishedBy.split(' ').map(n => n[0]).join('').substring(1,3);
  }

  getLinkToRecommendationHistory(recommendation: Recommendation) {
    return encodeURI(recommendation.name);
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
  recommendations: [
    {
      name: 'Insulin',
      frequencyEntries: [{ dosage: '10mg', when: 'Morning' }],
      frequency: 'Daily',
      establishedOn: new Date(),
    },
    {
      name: 'Met formin',
      frequencyEntries: [{ dosage: '10mg', when: 'Monday trough saturday' }, { dosage: '20mg', when: 'sunday' }],
      frequency: 'Weekly',
      establishedOn: new Date(),
    }
  ]
};



export const SAMPLE_RECOMMENDATIONS : FormRecommendation[] = [  
  {
    name: 'Medication A',
    frequency: 'Daily',
    establishedOn: new Date(),
    guid: '00000000-0000-0000-0000-000000000002',
    frequencyEntries: [{ dosage: '10mg', when: 'Morning' }]
  },
  {
    name: 'Medication B',
    frequency: 'Weekly',
    establishedOn: new Date(),
    guid: '00000000-0000-0000-0000-000000000003',
    frequencyEntries: [
      { dosage: '20mg', when: 'Monday-Saturday' },
      { dosage: '30mg', when: 'Wednesday' },
      { dosage: '40mg', when: 'Friday' }
    ]
  }
];