import { Component, Inject, OnInit, Type } from '@angular/core';
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
  public frequencyOptions = Object.values(FrequencyOptions);
  public timeOfDayOptions = Object.values(TimeOfDay);
  public dayOfWeekOptions = Object.values(DayOfWeek);
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
      frequencyEntries: this.frequencyEntries.getRawValue().map((entry: FrequencyOptionForm) => ({
        when: entry.when === FrequencyOptions.Custom ? entry.whenCustom : entry.when,
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
      frequency: this.data.frequency ?? FrequencyOptions.Daily,
      frequencyCustom: this.data.frequency ?? '',
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

  public get customFrequencyOptionSelected(): boolean {
    return this.form.get('frequency')?.value === 'Custom';
  }

  onFrequencySelectionChange(event: MatSelectChange) {
    const customOptionSelected = event.value === 'Custom';
    if (customOptionSelected) {
      this.form.get('frequencyCustom')?.setValidators(Validators.required);
    }
    else {

      this.form.get('frequencyCustom')?.clearValidators();
    }
   }


  onSelectionChange(event: MatSelectChange, index: number) {
    const customOptionSelected = event.value === 'Custom';
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

interface FrequencyOptionForm {
  whenCustom: string;
  when: string;
  dosage: string;
}

export enum FrequencyOptions {
  Daily = 'Daily',
  Weekly = 'Weekly',
  Custom = 'Custom',
}

export enum TimeOfDay {
  Morning = 'Morning',
  Evening = 'Evening',
  AfterMeal = 'AfterMeal',
}

export enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}