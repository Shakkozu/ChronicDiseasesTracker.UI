import { NgModule } from "@angular/core";
import { ErrorMessageComponent } from "./error-message.component";
import { MaterialModule } from "../material.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
	declarations: [
		ErrorMessageComponent,
		ConfirmationDialogComponent,
	],
	imports: [
		MaterialModule,
		CommonModule,
		ReactiveFormsModule,
	],
	exports: [
		ErrorMessageComponent,
		TranslateModule,
	]
})
export class SharedModule {}