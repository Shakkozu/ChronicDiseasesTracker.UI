import { Component, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store } from '@ngxs/store';
import { Diseases } from './diseases/store/disease.actions';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

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
  constructor (private store: Store, private translate: TranslateService, private cookieService: CookieService) {
    const storedCulture = this.cookieService.get('culture') ?? 'en';
    console.log(storedCulture);
    this.translate.setDefaultLang(storedCulture);
    translate.use(storedCulture);
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');
    this.store.dispatch(new Diseases.FetchAll()).subscribe(_ => {});
  }

  public isMobile: boolean = false;
}
