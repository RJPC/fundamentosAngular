import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _token: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.addHeaders(request);

    return next.handle(request);
  }

  private addHeaders(resquest: HttpRequest<unknown>) {
    const token = this._token.getToken('platzi_token');
    if (token) {
      return resquest.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      return resquest;
    }
  }
}
