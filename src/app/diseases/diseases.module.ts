import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiseasesListComponent } from './diseases-list/diseases-list.component';
import { MaterialModule } from '../material.module';
import { DiseaseDetailsNavComponent } from './disease-details-nav/disease-details-nav.component';
import { TreatmentDetailsComponent } from './treatments/treatment-details/treatment-details.component';
import { TreatmentsHistoryComponent } from './treatments/treatments-history/treatments-history.component';

const routes: Routes = [
  { path: '', component: DiseasesListComponent },
  { path: 'treatments-history', component: TreatmentsHistoryComponent },
  { path: ':guid', component: DiseaseDetailsNavComponent },
  { path: ':guid/treatments', component: TreatmentDetailsComponent },
];

@NgModule({
  declarations: [
    DiseasesListComponent,
    DiseaseDetailsNavComponent,
    TreatmentDetailsComponent,
    TreatmentsHistoryComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DiseasesModule { }

