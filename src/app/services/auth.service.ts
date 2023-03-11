import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { createUserDTO, Credentials, Login, User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private urlAPI = 'https://damp-spire-59848.herokuapp.com/api'//'https://young-sands-07814.herokuapp.com/api';
  private myProfile = new BehaviorSubject<User | null>(null);

  public myProfile$ = this.myProfile.asObservable();

  constructor(private _http: HttpClient, private _token: TokenService) {}

  loginUser(credentials: Credentials): Observable<Login> {
    return this._http
      .post<Login>(`${this.urlAPI}/auth/login`, credentials)
      .pipe(
        tap((resp) => {
          this._token.setToken(resp.access_token);
        })
      );
  }

  getAllUsers() {
    return this._http.get<User>(`${this.urlAPI}/users`);
  }

  createUser(user: createUserDTO) {
    return this._http.post<User>(`${this.urlAPI}/users`, user);
  }

    getProfile() {
      return this._http.get<User>(`${this.urlAPI}/auth/profile`)
        .pipe(
          tap(resp => {
            this.myProfile.next(resp)
          })
      );
  }

  // getHttpHeaders() {
  //   const token = localStorage.getItem('platzi_token');
  //   //  const token = sessionStorage.getItem('platzi_token');
  //   return {
  //     headers: new HttpHeaders({
  //       Authorization: `Bearer ${token}`,
  //     }),
  //   };
  // }

  logiAndProfile(credentials: Credentials) {
    return this.loginUser(credentials).pipe(switchMap(() => this.getProfile()));
  }

}
