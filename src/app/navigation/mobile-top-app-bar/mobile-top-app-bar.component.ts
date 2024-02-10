import { Component, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-mobile-top-app-bar',
  templateUrl: './mobile-top-app-bar.component.html',
  styleUrl: './mobile-top-app-bar.component.scss'
})
  
export class MobileTopAppBarComponent {
  constructor (private auth: AuthService) { }
  @Input() text: string = 'Chronic Disease Tracker';

  public get IsAuthenticated$() :Observable<boolean> {
    return this.auth.isAuthenticated$;
  }
  

}
