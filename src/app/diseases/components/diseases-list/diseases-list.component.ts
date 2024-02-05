import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Disease } from '../../model/model';
import { Select } from '@ngxs/store';
import { DiseasesState } from '../../store/diseases.state';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-diseases-list',
  templateUrl: './diseases-list.component.html',
  styleUrl: './diseases-list.component.scss'
})
export class DiseasesListComponent {
  @Select(DiseasesState.diseasesList) diseases$: Observable<Disease[]> | undefined;
  constructor(private router: Router) {
  }

  navigateToDiseaseDetails(diseaseGuid: string) {
    this.router.navigate(['/diseases', diseaseGuid]);
  }
}