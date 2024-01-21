import { Component } from '@angular/core';

@Component({
  selector: 'app-diseases-list',
  templateUrl: './diseases-list.component.html',
  styleUrl: './diseases-list.component.scss'
})
export class DiseasesListComponent {
  public diseases: Disease[] = [];
  constructor() {
  }
  
  ngOnInit(): void {
    this.diseases = SAMPLE_DATA;
  }

  navigateToDiseaseDetails(disease: Disease) {
  }
}

export interface Disease {
  name: string;
  id: string;
}


const SAMPLE_DATA: Array<Disease> = [
  { name: 'Diabetes', id: '1' },
  { name: 'Hypertension', id: '2' },
  { name: 'Asthma', id: '3' },
  { name: 'Heart Disease', id: '4' },
];