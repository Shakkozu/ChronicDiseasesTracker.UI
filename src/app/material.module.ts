import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MAT_PAGINATOR_INTL_PROVIDER, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_STEPPER_INTL_PROVIDER, MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter'; 
import { MatSelectModule, MatSelectTrigger } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

const MaterialComponents = [
	MatToolbarModule,
	MatButtonModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatTableModule,
	MatPaginatorModule,
	MatOptionModule,
	MatSortModule,
	MatGridListModule,
	MatCardModule,
	MatMenuModule,
	MatFormFieldModule,
	MatInputModule,
	MatStepperModule,
	MatDatepickerModule,
	MatExpansionModule,
	MatSelectModule,
	MatMomentDateModule, // Add the missing module
];

@NgModule({
	imports: [MaterialComponents],
	exports: [MaterialComponents]
})
export class MaterialModule { }