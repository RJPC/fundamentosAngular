import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../models/user.model';


@Injectable({
  providedIn: 'root',
})
export class TokenService {


  private myToken = new BehaviorSubject<Login>({access_token: ''});
  public myToken$ = this.myToken.asObservable();

  setToken(token: string) {
    localStorage.setItem('platzi_token', token);
    this.myToken.next({access_token: token})
  }

  getToken(keyToken = 'platzi_token') {
    return localStorage.getItem(keyToken);
  }

  removeToken() {
    localStorage.removeItem('platzi_token');
  }
}
