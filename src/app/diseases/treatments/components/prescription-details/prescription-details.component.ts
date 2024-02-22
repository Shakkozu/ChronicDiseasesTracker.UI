import { Component } from '@angular/core';
import { PrescriptionEntry, RecommendationHistoryDetails, Recommendation } from '../../../model/model';
import { DateService } from '../../../services/date-service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { DiseasesState } from '../../../store/diseases.state';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrl: './prescription-details.component.scss'
})
export class PrescriptionDetailsComponent {
  
  public details: RecommendationHistoryDetails;
  constructor (private route: ActivatedRoute, private store: Store, private dateService: DateService) {
    const diseaseGuid = this.route.snapshot.paramMap.get('diseaseGuid') ?? '';
    const treatmentGuid = this.route.snapshot.paramMap.get('treatmentGuid') ?? '';
    const recommendationName = this.route.snapshot.paramMap.get('recommendationName') ?? '';

    this.details = this.store.selectSnapshot(DiseasesState.findTreatmentRecommendationHistory)(diseaseGuid, treatmentGuid, recommendationName);
  }

  return() {
    window.history.back();
  }

  public getOrderedPrescriptionEntries(): PrescriptionEntry[] {
    return this.details.entries.sort((a, b) => {
      const aEndDate = a.endDate ? a.endDate.getTime() : 0;
      const bEndDate = b.endDate ? b.endDate.getTime() : 0;
      return aEndDate - bEndDate;
    });
  }

  public getDurationString(startDate: Date, endDate: Date | undefined) {
    return this.dateService.getDurationString(startDate, endDate);
  }
}
