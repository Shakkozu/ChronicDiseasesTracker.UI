import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Diseases } from '../../store/disease.actions';

@Component({
  selector: 'app-new-disease',
  templateUrl: './new-disease.component.html',
  styleUrl: './new-disease.component.scss'
})
export class NewDiseaseComponent {
  public diseaseForm: FormGroup;
  constructor (private fb: FormBuilder, private store: Store) {
    this.diseaseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    })
  }
  public getControl(name: string) {
    return this.diseaseForm.get(name);
  }
  
  save() {
    if (!this.isValid())
      return;

    const diseaseName = this.diseaseForm.get('name')?.value;
    if (!diseaseName)
      return;

    this.store.dispatch(new Diseases.CreateNewDisease(diseaseName))
      .subscribe(_ => this.return());
  }

  isValid(): boolean {
    return true;
  }

  return() {
    window.history.back();
  }
}
