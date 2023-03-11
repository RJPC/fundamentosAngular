import { Component, OnInit } from '@angular/core';

import { AuthService } from "./services/auth.service";
import { TokenService } from "./services/token.service";

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  imgParent = '';
  showImg = true;

  constructor(
    private _tokenService: TokenService,
    private _AuthService: AuthService
  ){}

  ngOnInit() {
    const token = this._tokenService.getToken()

    if (token)
      this._AuthService.getProfile().subscribe()
  }

  onLoaded(img: string) {
    console.log("Log del padre", img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }
}
