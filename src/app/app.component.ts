import { Component, inject } from '@angular/core';
import { AuthService } from './authorization/auth.service';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DiseasesState } from './diseases/store/diseases.state';
import { Store } from '@ngxs/store';
import { Diseases } from './diseases/store/disease.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'material-starter';
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor (private authService: AuthService, private store: Store) {
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');
    console.log('calling dieseases state')
    this.store.dispatch(new Diseases.FetchAll()).subscribe(_ => {});
  }

  public isUserLoggedIn$: Observable<boolean> = this.authService.isLoggedIn();
  public isMobile: boolean = false;

  logout() {
    this.authService.logout();
  }
}
