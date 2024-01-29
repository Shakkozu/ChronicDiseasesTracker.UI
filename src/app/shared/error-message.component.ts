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

		// Add more conditions for other error types as needed

		return '';
	}
}
