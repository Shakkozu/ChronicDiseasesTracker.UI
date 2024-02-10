import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'logout', component: LogoutComponent },
  { path: 'user-profile', component: UserProfileComponent },
];

@NgModule({
  declarations: [
    LoginButtonComponent,
    LogoutComponent,
    LogoutButtonComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginButtonComponent,
    LogoutButtonComponent,
    UserProfileComponent,
    LogoutComponent
  ]
})
export class AuthorizationModule { }

export class AuthorizationRoutingModule {

}
