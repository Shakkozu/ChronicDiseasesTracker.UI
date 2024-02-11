import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';


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
    MaterialModule,
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
