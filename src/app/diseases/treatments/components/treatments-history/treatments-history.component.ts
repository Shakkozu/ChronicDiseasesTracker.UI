import { Component } from '@angular/core';
import { TreatmentDetails } from '../../../model/model';
import { DateService } from '../../../services/date-service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { DiseasesState } from '../../../store/diseases.state';

@Component({
  selector: 'app-treatments-history',
  templateUrl: './treatments-history.component.html',
  styleUrl: './treatments-history.component.scss'
})
export class TreatmentsHistoryComponent {
  public treatments: TreatmentDetails[] = [];

  constructor (private store: Store, private route: ActivatedRoute) { 
    const diseaseGuid = this.route.snapshot.paramMap.get('diseaseGuid') ?? '';

    this.treatments = this.store.selectSnapshot(DiseasesState.findAllDiseaseTreatments)(diseaseGuid);
  }

  public get getDiseaseName(): string {
    return this.treatments[0]?.disease ?? '';
  }

  public return() {
    window.history.back();
  }

  getInitials(establishedBy: string) {
    return establishedBy.split(' ').map(n => n[0]).join('').substring(1, 3);
  }

  getEndDate(treatment: TreatmentDetails) {
    return treatment.endDate ? treatment.endDate.toLocaleDateString() : 'now';
  }

  getDateString(treatment: TreatmentDetails) {
    return DateService.getDurationString(treatment.startDate, treatment.endDate);
  }
}
