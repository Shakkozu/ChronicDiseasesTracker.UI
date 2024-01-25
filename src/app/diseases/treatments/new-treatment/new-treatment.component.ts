import { Component } from '@angular/core';
import { FrequencyEntry, Medication } from '../treatment-details/treatment-details.component';
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
  public recommendations: Medication[] = [];
  firstFormGroup: FormGroup = this.formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this.formBuilder.group({ secondCtrl: [''] });
  diseaseGuid: string = '';
  
  constructor (private dialog: MatDialog,
    private formBuilder: FormBuilder) {
    this.treatmentForm = this.formBuilder.group({
      treatment: '',
      startDate: new Date(),
      establishedBy: '',
      establishedOn: new Date(),
      additionalInfo: '',
      // medications: this.formBuilder.array([])
    });
    
  }
  
  return() {
    window.history.back();
  }
  
  save() {
    throw new Error('Method not implemented.');
  }

  addNewRecommendation() {
    this.dialog.open(RecommendationsComponent, {
      width: '500px',
      height: '700px',
      data: { 

       }
    });
  }

  deleteRecommendation() {

  }

  modifyPrescribedRecommencations() {
    this.dialog.open(RecommendationsComponent, {
      width: '500px',
      height: '700px',
      data: { 

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
  medications: Medication[];
}


export interface NewTreatmentMedication {
  name: string;
  frequency: string;
  frequencyEntries: FrequencyEntry[];
}