import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiseasesListComponent } from './components/diseases-list/diseases-list.component';
import { MaterialModule } from '../material.module';
import { DiseaseDetailsNavComponent } from './components/disease-details-nav/disease-details-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PrescriptionDetailsComponent } from './treatments/components/prescription-details/prescription-details.component';
import { TreatmentDetailsComponent } from './treatments/components/treatment-details/treatment-details.component';
import { TreatmentsHistoryComponent } from './treatments/components/treatments-history/treatments-history.component';
import { NewDiseaseComponent } from './components/new-disease/new-disease.component';
import { NewTreatmentComponent } from './treatments/components/new-treatment/new-treatment.component';
import { RecommendationsComponent } from './treatments/components/new-treatment/recommendations/recommendations.component';

const routes: Routes = [
  { path: '', component: DiseasesListComponent },
  { path: 'new', component: NewDiseaseComponent },
  { path: ':guid', component: DiseaseDetailsNavComponent },
  { path: ':diseaseGuid/treatments/new', component: NewTreatmentComponent },
  { path: ':diseaseGuid/treatments', component: TreatmentsHistoryComponent },
  { path: ':diseaseGuid/treatments/:treatmentGuid', component: TreatmentDetailsComponent },
  { path: ':diseaseGuid/treatments/:treatmentGuid/:recommendationName', component: PrescriptionDetailsComponent },
];

@NgModule({
  declarations: [
    DiseasesListComponent,
    DiseaseDetailsNavComponent,
    TreatmentDetailsComponent,
    TreatmentsHistoryComponent,
    PrescriptionDetailsComponent,
    NewTreatmentComponent,
    RecommendationsComponent,
    NewDiseaseComponent,

  ],
  imports: [
    MaterialModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DiseasesModule { }

