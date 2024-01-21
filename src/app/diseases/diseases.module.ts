import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiseasesListComponent } from './diseases-list/diseases-list.component';
import { MaterialModule } from '../material.module';

const routes: Routes = [
  { path: '', component: DiseasesListComponent }
];

@NgModule({
  declarations: [
    DiseasesListComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DiseasesModule { }
