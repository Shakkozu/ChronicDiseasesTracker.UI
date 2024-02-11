import { Injectable } from '@angular/core';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
} from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, switchMap, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor (private authService: AuthService) { }

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return this.authService.getAccessTokenSilently().pipe(
			tap(token => {
				console.log(token);
				if (token) {
					req = req.clone({
						setHeaders: {
							Authorization: `Bearer ${ token }`,
						},
					});
				}
			}),
			switchMap(() => next.handle(req))
		);
	}
}