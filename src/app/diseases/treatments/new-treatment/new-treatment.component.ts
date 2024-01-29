import { Component } from '@angular/core';
import { FormRecommendation, FrequencyEntry, Recommendation, SAMPLE_RECOMMENDATIONS } from '../treatment-details/treatment-details.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DATE_FORMAT } from '../../../shared/date-formats';

@Component({
  selector: 'app-new-treatment',
  templateUrl: './new-treatment.component.html',
  styleUrl: './new-treatment.component.scss',
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
  ],
})
export class NewTreatmentComponent {
  public treatmentForm: FormGroup;
  public recommendations: FormRecommendation[] = SAMPLE_RECOMMENDATIONS;
  firstFormGroup: FormGroup = this.formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this.formBuilder.group({ secondCtrl: [''] });
  diseaseGuid: string = '';

  constructor(private dialog: MatDialog,
    private formBuilder: FormBuilder) {
    this.treatmentForm = this.formBuilder.group({
      treatment: '',
      startDate: new Date(),
      establishedBy: '',
      establishedOn: new Date(),
      additionalInfo: '',
    });

  }



  removeRecommendation(recommendationGuid: string) {
    this.recommendations = this.recommendations.filter(rec => rec.guid !== recommendationGuid);
  }
  
  return() {
    window.history.back();
  }

  save() {
    throw new Error('Method not implemented.');
  }

  addNewRecommendation() {
    const dialogRef = this.dialog.open(RecommendationsComponent, {
      width: '500px',
      height: '700px',
      data: {

      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result)
        return;

      this.recommendations.push(result);

    });
  }
  
  editRecommendation(recommendationGuid: string) {
    const recommendationToModify = this.recommendations.find(rec => rec.guid === recommendationGuid);
    const dialogRef = this.dialog.open(RecommendationsComponent, {
      width: '500px',
      height: '700px',
      data: recommendationToModify,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result)
        return;

      const recommendationToModifyIndex = this.recommendations.findIndex(rec => rec.guid === result.guid);
      if(recommendationToModifyIndex !== -1) {
        this.recommendations[recommendationToModifyIndex] = result;
      }
    });
  }
}

export interface NewTreatmentDetails {
  diseaseGuid: string;
  treatment: string;
  startDate: Date;
  establishedBy: string;
  establishedOn: Date;
  additionalInfo: string;
  medications: Recommendation[];
}


export interface NewTreatmentMedication {
  name: string;
  frequency: string;
  frequencyEntries: FrequencyEntry[];
}