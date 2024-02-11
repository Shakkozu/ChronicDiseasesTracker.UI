import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LogoutComponent } from './authorization/components/logout/logout.component';
import { UserProfileComponent } from './authorization/components/user-profile/user-profile.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'logout', pathMatch: 'full', component: LogoutComponent },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: 'start', component: StartComponent },
  { path: 'diseases', loadChildren: () => import('./diseases/diseases.module').then(m => m.DiseasesModule), canActivate: [AuthGuard] } ,
  { path: '**', redirectTo: 'start' }
]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
