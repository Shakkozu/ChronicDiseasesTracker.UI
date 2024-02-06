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
  public diseaseGuid: string;
  public get getDiseaseGuid(): string {
    return this.treatment.diseaseGuid;
  }
  public get treatmentDefined(): boolean {
    return this.treatment !== undefined;
  }
  public get isCurrentTreatment(): boolean {
    return this.treatment.endDate === undefined || this.treatment.endDate === null;
  }

  constructor (private store: Store, private route: ActivatedRoute) {
    this.diseaseGuid = this.route.snapshot.paramMap.get('diseaseGuid') ?? '';
    const treatmentGuid = this.route.snapshot.paramMap.get('treatmentGuid') ?? '';

    this.treatment = this.store.selectSnapshot(DiseasesState.findDiseaseTreatmentByGuid)(this.diseaseGuid, treatmentGuid);
  }


  return() {
    window.history.back();
  }

  getDateString() {
    return DateService.getDurationString(this.treatment.startDate, this.treatment.endDate);
  }

  getInitials(establishedBy: string) {
    return establishedBy.split(' ').map(n => n[0]).join('').substring(1,3);
  }

  getLinkToRecommendationHistory(recommendation: Recommendation) {
    return recommendation.name;
  }
}