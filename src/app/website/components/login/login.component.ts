import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) {}

  user: Credentials = {
    email: '',
    password: '',
  };

  getAllUsers() {
    this._auth.getAllUsers().subscribe((resp) => {
      console.log(resp);
    });
  }

  loginAndProfile() {

    this._auth.logiAndProfile(this.user).subscribe(() => {
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
        title: 'Successful login',
      });
      this._router.navigate(['/'])
    });
  }
}
