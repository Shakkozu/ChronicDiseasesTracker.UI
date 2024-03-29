import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  template: '<button (click)="login()">Log in</button>'
})
export class LoginButtonComponent {
  constructor (private auth: AuthService) {
  }

  login() {
    this.auth.loginWithRedirect().subscribe(_ => {
      this.auth.idTokenClaims$.subscribe(tokenClaims => console.log(tokenClaims));
    }
    );
  }
}
