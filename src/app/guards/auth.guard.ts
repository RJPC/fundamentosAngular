import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

import { TokenService } from "../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _tokenService: TokenService,
    private _routerService: Router,
    private _authService: AuthService
  ) { }

  canActivate(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    route: ActivatedRouteSnapshot,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // const token = this._tokenService.getToken()
    // if (!token) {
    //   this._routerService.navigate(['/home']);
    //   return false;
    // }

    // return true;

    return this._authService.myProfile$
      .pipe(
        map(profile => {

          if (!profile) {
            this._routerService.navigate(['/home']);
            return false;
          }

          return true;
        })
      );
  }

}
