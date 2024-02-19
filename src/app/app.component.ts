import { Component, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store } from '@ngxs/store';
import { Diseases } from './diseases/store/disease.actions';
import { TranslateService } from '@ngx-translate/core';

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
  constructor (private store: Store, private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    translate.use('en');
    this.isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');
    this.store.dispatch(new Diseases.FetchAll()).subscribe(_ => {});
  }

  public isMobile: boolean = false;
}
