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
  public get treatmentDefined(): boolean {
    return this.treatment !== undefined;
  }

  constructor (private store: Store, private route: ActivatedRoute) {
    const diseaseGuid = this.route.snapshot.paramMap.get('diseaseGuid') ?? '';
    const treatmentGuid = this.route.snapshot.paramMap.get('treatmentGuid') ?? '';

    console.log(diseaseGuid);
    console.log(treatmentGuid);
    this.treatment = this.store.selectSnapshot(DiseasesState.findDiseaseTreatmentByGuid)(diseaseGuid, treatmentGuid);
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
    return recommendation.name;
  }
}