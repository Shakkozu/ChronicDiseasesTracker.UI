import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiseasesListComponent } from './diseases-list/diseases-list.component';
import { MaterialModule } from '../material.module';
import { DiseaseDetailsNavComponent } from './disease-details-nav/disease-details-nav.component';
import { TreatmentDetailsComponent } from './treatments/treatment-details/treatment-details.component';
import { TreatmentsHistoryComponent } from './treatments/treatments-history/treatments-history.component';
import { PrescriptionDetailsComponent } from './treatments/prescription-details/prescription-details.component';
import { NewTreatmentComponent } from './treatments/new-treatment/new-treatment.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: DiseasesListComponent },
  { path: ':guid', component: DiseaseDetailsNavComponent },
  { path: 'treatments/new', component: NewTreatmentComponent },
  { path: ':guid/treatments', component: TreatmentsHistoryComponent },
  { path: ':guid/treatments/:guid', component: TreatmentDetailsComponent },
  { path: ':guid/treatments/:guid/:name', component: PrescriptionDetailsComponent },
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
  ],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DiseasesModule { }

