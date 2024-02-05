// error-message.component.ts
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-error-message',
	template: `
    <ng-container *ngIf="control && control.invalid && control.touched">
      <mat-error>{{ getErrorMessage() }}</mat-error>
    </ng-container>
  `,
})
export class ErrorMessageComponent {
	@Input() control: AbstractControl | null = null;

	getErrorMessage(): string {
		if (!this.control) {
			return '';
		}

		if (this.control.hasError('required')) {
			return 'This field is required';
		}

		if (this.control.hasError('email')) {
			return 'Please enter a valid email address';
		}

		if (this.control.hasError('minlength')) {
			const minLength = this.control?.errors?.['minlength'].requiredLength;
			const actualLength = this.control?.errors?.['minlength'].actualLength;
			return `Minimum form control length is ${minLength}. You need ${minLength - actualLength} more`;
		}

		return '';
	}
}
