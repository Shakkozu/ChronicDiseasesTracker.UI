import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {
  title: string = 'Are you sure you want to quit?';
  content: string = 'You will loose all progress on this page';

  constructor (public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    if (this.data?.title)
      this.title = this.data.title;
    if (this.data?.content)
      this.title = this.data.content;

  }

  reject() {
    this.dialogRef.close({ Confirmed: false });
  }

  confirm() {
    this.dialogRef.close({ Confirmed: true });
  }

}

export type ConfirmationDialogResult = {
  Confirmed: boolean,
}