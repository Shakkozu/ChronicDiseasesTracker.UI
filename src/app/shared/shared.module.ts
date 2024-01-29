import { NgModule } from "@angular/core";
import { ErrorMessageComponent } from "./error-message.component";
import { MaterialModule } from "../material.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		ErrorMessageComponent
	],
	imports: [
		MaterialModule,
		CommonModule,
		ReactiveFormsModule,
	],
	exports: [
		ErrorMessageComponent
	]
})
export class SharedModule {}