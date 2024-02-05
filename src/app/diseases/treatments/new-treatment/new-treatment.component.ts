import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DATE_FORMAT } from '../../../shared/date-formats';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ConfirmationDialogComponent, ConfirmationDialogResult } from '../../../shared/confirmation-dialog/confirmation-dialog.component';
import { EstablishNewTreatmentCommand, FormRecommendation } from '../../model/model';
import { Store } from '@ngxs/store';
import { Diseases } from '../../store/disease.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-treatment',
  templateUrl: './new-treatment.component.html',
  styleUrl: './new-treatment.component.scss',
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT },
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } }
  ],
})
export class NewTreatmentComponent {
  public treatmentForm: FormGroup;
  public recommendations: FormRecommendation[] = [];
  firstFormGroup: FormGroup = this.formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this.formBuilder.group({ secondCtrl: [''] });
  diseaseGuid: string = '';

  constructor (private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private store: Store) {
    this.diseaseGuid = this.route.snapshot.paramMap.get('diseaseGuid') ?? '';
    this.treatmentForm = this.formBuilder.group({
      treatment: '',
      startDate: new Date(),
      establishedBy: '',
      establishedOn: new Date(),
    });
  }

  public isValid(): boolean {
    return this.treatmentForm.touched && this.treatmentForm.valid && this.recommendations.length > 0;
  }

  public getControl(name: string) {
    return this.treatmentForm.get(name);
  }

  removeRecommendation(recommendationGuid: string) {
    this.recommendations = this.recommendations.filter(rec => rec.guid !== recommendationGuid);
  }

  return() {
    if (!this.treatmentForm.dirty)
      window.history.back();

    this.dialog.open<ConfirmationDialogComponent, any, ConfirmationDialogResult>(ConfirmationDialogComponent)
      .afterClosed()
      .subscribe((result: ConfirmationDialogResult | undefined) => {
        if (result && result.Confirmed) {
          window.history.back();
        }
      });
  }

  save() {
    if (!this.isValid())
      return;

    let command: EstablishNewTreatmentCommand = {
      diseaseGuid: this.diseaseGuid,
      establishedBy: this.getValueFromFormControl('establishedBy'),
      establishedAt: this.getValueFromFormControl('establishedOn'),
      recommendations: this.recommendations,
      startDate: this.getValueFromFormControl('startDate'),
      name: this.getValueFromFormControl('treatment')
    };

    this.store.dispatch(new Diseases.EstablishNewTreatment(command))
      .subscribe(_ => {
        
        });
  }

  private getValueFromFormControl(formControlName: string) {
    return this.treatmentForm.controls[formControlName].value;
  }


  addNewRecommendation() {
    const dialogRef = this.dialog.open(RecommendationsComponent, {
      width: '500px',
      height: '700px',
      disableClose: true,
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result)
        return;
      console.log(result);

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
      if (recommendationToModifyIndex !== -1) {
        this.recommendations[recommendationToModifyIndex] = result;
      }
    });
  }
}

