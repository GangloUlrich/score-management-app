import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  private readonly AUTHORIZATION_HEADER_PREFIX = 'Bearer ';
  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userToken = this.authService.getAccessToken();
    if(userToken) {
      request = request.clone({
        setHeaders: {
          Authorization: this.AUTHORIZATION_HEADER_PREFIX + userToken
        }
      });
    }
    return next.handle(request);
  }
}
