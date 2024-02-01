import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Disease } from '../../model/model';
import { DiseasesState } from '../../store/diseases.state';

@Component({
  selector: 'app-disease-details-nav',
  templateUrl: './disease-details-nav.component.html',
  styleUrl: './disease-details-nav.component.scss'
})
export class DiseaseDetailsNavComponent {
  constructor (private router: Router, private routing: ActivatedRoute, private store: Store) {
    const diseaseGuid = this.routing.snapshot.paramMap.get('guid') ?? '';
    this.disease = this.store.selectSnapshot(DiseasesState.getItemById)(diseaseGuid);
  }

  public disease: Disease;
  public items = [
    { 'title': 'Treatment', 'image': 'assets/images/hor-1.jpg' },
    { 'title': 'Symptoms', 'image': 'assets/images/hc-8.jpg' },
    { 'title': 'Diagnosis', 'image': 'assets/images/hc-3.jpg' },
    { 'title': 'Prevention', 'image': 'assets/images/hc-6.jpg' },
  ];

  ngOnInit(): void {
  }

  backToDiseasesList() {
    this.router.navigate(['/diseases']);
  }

  navigateToDetails(item: any) {
    if (item !== 'Treatment') return;
    const route = '/diseases/' + this.disease?.guid + '/treatments/' + this.disease?.currentTreatmentGuid;
    this.router.navigate([route]);
  }
}