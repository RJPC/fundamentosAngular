import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnExit } from 'src/app/guards/exit.guard';
import { createUserDTO } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnExit {

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  onExit(): Promise<boolean> | boolean {
    // const exit = confirm('Seguro que desea salir?')
    // return exit;

    const confirm = Swal.fire({
      title: 'Seguro que desea salir?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      }
      return false
    });
    return confirm

  }

  newUser: createUserDTO = {
    name: '',
    email: '',
    password: '',
    role: 'customer'
  }

  createUser() {
    this._auth.createUser(this.newUser)
      .subscribe(() => {
        this._router.navigate(['/login']);
        this.onExit = () => true;
      })
  }

}
