import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diseases-list',
  templateUrl: './diseases-list.component.html',
  styleUrl: './diseases-list.component.scss'
})
export class DiseasesListComponent {
  public diseases: Disease[] = [];
  constructor(private router: Router) {
  }
  
  ngOnInit(): void {
    this.diseases = SAMPLE_DATA;
  }

  navigateToDiseaseDetails(diseaseGuid: string) {
    this.router.navigate(['/diseases', diseaseGuid]);
    
  }
}

export interface Disease {
  name: string;
  guid: string;
  currentTreatmentGuid: string;
}


const SAMPLE_DATA: Array<Disease> = [
  { name: 'Diabetes', guid: '00000000-1111-2222-3333-44444444', currentTreatmentGuid: '00000000-1111-2222-3333-44444444' },
  { name: 'Hypertension', guid: '00000000-1111-2222-3333-44444448', currentTreatmentGuid: '00000000-1111-2222-3333-44444448' },
  { name: 'Asthma', guid: '00000000-1111-2222-3333-44444446', currentTreatmentGuid: '00000000-1111-2222-3333-44444446' },
  { name: 'Heart Disease', guid: '00000000-1111-2222-3333-444444445', currentTreatmentGuid: '00000000-1111-2222-3333-444444445' },
];