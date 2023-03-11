import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../../models/user.model';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  showMenu = false;
  counter = 0;

  login = false;
  username = '';
  password = '';
  profile: User | null = null;
  categories: Category[] = [];

  constructor(
    private _storeService: StoreService,
    private _auth: AuthService,
    private _token: TokenService,
    private _route: Router,
    private _category: CategoryService
  ) {}

  ngOnInit(): void {
    this._storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });

    // this._token.myToken$.subscribe((token) => {
    //   if (token.access_token !== '') {
    //     this.login = true;
    //   }
    // });

    this._auth.myProfile$.subscribe((profile) => {
      this.profile = profile;
      this.login = true;
    });

    this._category.getCategories().subscribe(data => this.categories = data)

  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onLogout() {
    this._token.removeToken();
    console.log();

    this._route.navigate(['/home']);
    this.login = false;
    this.profile = null;


    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Successful logout',
    });
  }
}
