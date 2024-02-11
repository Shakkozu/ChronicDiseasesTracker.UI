import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DiseasesRestService, DiseasesService } from '../../../diseases/services/diseases.service';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  template: `
  <div *ngIf="auth.user$ | async as user">
    <h2>Hello {{user.given_name ?? user.name}}</h2>
    <div class="m-4">
      </div>
      <ul>
        <img width="48px" height="48px" [src]="user.picture">
        <li>{{ user.name }}</li>
        <li>{{ user.email }}</li>
      </ul>
    </div>
    `
})
export class UserProfileComponent {
  constructor (public auth: AuthService) { }

}