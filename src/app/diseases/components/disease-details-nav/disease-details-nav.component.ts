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
    { 'nav_src': 'Treatment', 'title': 'DISEASES_NAVIGATION.TREATMENTS', 'image': 'assets/images/hor-1.jpg' },
    { 'nav_src': '', 'title': 'DISEASES_NAVIGATION.SYMPTOMS', 'image': 'assets/images/hc-8.jpg' },
    { 'nav_src': '', 'title': 'DISEASES_NAVIGATION.PROCEDURES', 'image': 'assets/images/hc-3.jpg' },
    { 'nav_src': '', 'title': 'DISEASES_NAVIGATION.CHECKUPS', 'image': 'assets/images/hc-6.jpg' },
  ];

  ngOnInit(): void {
  }

  backToDiseasesList() {
    this.router.navigate(['/diseases']);
  }

  navigateToDetails(item: any) {
    if (item !== 'Treatment') return;
    const treatmentGuid = this.disease.currentTreatmentGuid ?? 'new';
    const route = '/diseases/' + this.disease.guid + '/treatments/' + treatmentGuid;
    this.router.navigate([route]);
  }
}