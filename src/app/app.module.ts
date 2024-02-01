import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainNavbarComponent } from './navigation/main-navbar/main-navbar.component';
import { MobileNavbarComponent } from './navigation/mobile-navbar/mobile-navbar.component';
import { MobileTopAppBarComponent } from './navigation/mobile-top-app-bar/mobile-top-app-bar.component';
import { StartComponent } from './start/start.component';
import { DiseasesModule } from './diseases/diseases.module';
import { MaterialModule } from './material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SharedModule } from './shared/shared.module';
import { NgxsModule } from '@ngxs/store';
import { DiseasesState } from './diseases/store/diseases.state';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MobileNavbarComponent,
    MobileTopAppBarComponent,
    StartComponent,
  ],
  imports: [
    NgxsModule.forRoot([DiseasesState]),
    MaterialModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DiseasesModule,
  ],
  providers: [[{ provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
