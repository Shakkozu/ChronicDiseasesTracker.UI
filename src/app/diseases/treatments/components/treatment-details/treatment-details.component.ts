import { Component } from '@angular/core';
import { DateService } from '../../../services/date-service';
import { TreatmentDetails, Recommendation, FormRecommendation } from '../../../model/model';
import { Store } from '@ngxs/store';
import { DiseasesState } from '../../../store/diseases.state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-treatment-details',
  templateUrl: './treatment-details.component.html',
  styleUrl: './treatment-details.component.scss'
})
export class TreatmentDetailsComponent {
  public treatment: TreatmentDetails;
  public get getDiseaseGuid(): string {
    return this.treatment.diseaseGuid;
  }

  constructor (private store: Store, private route: ActivatedRoute) {
    const diseaseName = this.route.snapshot.paramMap.get('diseaseName') ?? '';
    const treatmentGuid = this.route.snapshot.paramMap.get('treatmentGuid') ?? '';

    this.treatment = this.store.selectSnapshot(DiseasesState.findDiseaseTreatmentByGuid)(diseaseName, treatmentGuid);
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