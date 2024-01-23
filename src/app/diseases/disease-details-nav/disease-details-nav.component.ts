import { Component } from '@angular/core';
import { Disease } from '../diseases-list/diseases-list.component';
import { sample } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disease-details-nav',
  templateUrl: './disease-details-nav.component.html',
  styleUrl: './disease-details-nav.component.scss'
})
export class DiseaseDetailsNavComponent {
  constructor(private router: Router) {
    
  }
  public disease: Disease = SAMPLE_DATA;
  public items = [
    { 'title': 'Treatment', 'image': 'assets/images/hor-1.jpg' },
    { 'title': 'Symptoms', 'image': 'assets/images/hc-8.jpg' },
    { 'title': 'Diagnosis', 'image': 'assets/images/hc-3.jpg' },
    { 'title': 'Prevention', 'image': 'assets/images/hc-6.jpg' },
  ];

  ngOnInit(): void {
    this.disease = SAMPLE_DATA;
  }

  backToDiseasesList() {
    this.router.navigate(['/diseases']);
  }

  navigateToDetails(item: any) {
    if (item !== 'Treatment') return;
    const route = '/diseases/' + this.disease.guid + '/treatments/current';
    console.log(route);
    this.router.navigate([route]);
  }

}


const SAMPLE_DATA: Disease = {
  name: 'Diabetes',
  guid: '00000000-1111-2222-3333-44444444'
}
