import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { FormRecommendation, Recommendation } from '../../treatment-details/treatment-details.component';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.scss'
})

export class RecommendationsComponent implements OnInit {
  private guid: string = '';

  public isFormValid(): boolean {
    return this.form.valid && this.frequencyEntries.length > 0;
  }

  save() {
    this.form.value;
    const result: FormRecommendation = {
      name: this.form.get('name')?.value,
      establishedOn: new Date(),
      guid: this.guid,
      frequency: this.form.get('frequency)')?.value,
      frequencyEntries: this.frequencyEntries.getRawValue().map((entry: any) => ({
        when: entry.when,
        dosage: entry.dosage
      }))
    }
    this.dialogRef.close(result);

  }

  return() {
    this,this.dialogRef.close();
  }

  public customEnabledDictionary: { [key: string]: boolean } = {};
  form: FormGroup = new FormGroup({});
  frequencyEntries: FormArray<any> = new FormArray<any>([]);

  ngOnInit(): void {
    this.guid = this.data.guid ?? getNewGuid();
    
    this.frequencyEntries = this.formBuilder.array([]);
    if (this.data.frequencyEntries) {
      this.data.frequencyEntries.forEach((entry: any) => {
        this.frequencyEntries.push(
          this.formBuilder.group({
            dosage: [entry.dosage, Validators.required],
            when: [entry.when, Validators.required],
            whenCustom: [''],
          })
        );
      });
    }

    this.form = this.formBuilder.group({
      name: this.data.name ?? '',
      frequency: this.data.frequency ?? '',
      frequencyEntries: this.frequencyEntries,
    });
  }

  constructor (private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RecommendationsComponent>,
  @Inject(MAT_DIALOG_DATA) public data: FormRecommendation) {

   }

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


function getNewGuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

