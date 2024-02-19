import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DiseasesRestService } from '../../../diseases/services/diseases.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  template: `
  <div *ngIf="auth.user$ | async as user">
<mat-toolbar color="primary">
  <span class="flex-1"></span>
	<span class="text-title-large">{{'PROFILE' | translate}}</span>
  <span class="flex-1"></span>
  <button  mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
			<mat-icon>more_vert</mat-icon>
		</button>
  <mat-menu #menu="matMenu">
			<button mat-menu-item routerLink="language-settings">
				<span>Change Language</span>
			</button>
		</mat-menu>
</mat-toolbar>
<div class="mt-4">
  <div class="row self-center">
    <img class="rounded-full m-auto" [src]="user.picture">
  </div>
  <div class="row my-2">
    <h2 class="text-center">{{ user.name }}</h2>
    <h4 class="text-center">{{ user.email }}</h4>
  </div>
  </div>
  <button class="mat-raised-button"></button>
</div>
    `
})
export class UserProfileComponent {
  constructor (public auth: AuthService, private diseaseService: DiseasesRestService) { }


  callUnauthorized() {
    this.diseaseService.fetchAllDiseases().pipe(
      tap(result => console.log(result)),
    ).subscribe()
  }
}