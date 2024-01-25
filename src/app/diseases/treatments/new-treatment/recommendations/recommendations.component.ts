import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})

export class RecommendationsComponent implements OnInit {
  public isFormValid(): boolean {
    return this.form.valid && this.frequencyEntries.length > 0;
  }

  save() {
    throw new Error('Method not implemented.');
  }

  return() {
    throw new Error('Method not implemented.');
  }

  public customEnabledDictionary: { [key: string]: boolean } = {};
  form: FormGroup = new FormGroup({});
  frequencyEntries: FormArray<any> = new FormArray<any>([]);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      frequency: '',
      frequencyEntries: this.frequencyEntries,
    });
  }

  constructor (private formBuilder: FormBuilder) { }

  addNewDosageButtonClicked(): void {
    this.frequencyEntries.push(
      this.formBuilder.group({
        dosage: ['', Validators.required],
        when: ['', Validators.required],
        whenCustom: [''],
      })
    );
  }

  removeDosageEntryButtonClicked(index: number) {
    this.frequencyEntries.removeAt(index);
  }

  isCustomFormVisible(index: number): any {
    return this.customEnabledDictionary[index];
  }

  onSelectionChange(event: MatSelectChange, index: number) {
    const customOptionSelected = event.value === 'custom';
    if (customOptionSelected) {
      this.customEnabledDictionary[index] = true;
      this.form.get('frequencyEntries')?.get(
        index.toString())?.get(
          'whenCustom')?.setValidators(Validators.required);
    }

    else {
      this.customEnabledDictionary[index] = false;
      this.form.get('frequencyEntries')?.get(
        index.toString())?.get(
          'whenCustom')?.clearValidators();

      this.form.get('frequencyEntries')?.get(
        index.toString())?.get(
          'whenCustom')?.setValue('');
    }
  }

  onBlurCustomInput(control: FormControl) {
    control.setValue(control.value);
  }
}