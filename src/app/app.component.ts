import { Component } from '@angular/core';
import { Register } from './models/register.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  register: Register = {
    username: '',
    email: '',
    password: ''
  }

  onRegister(){
    console.log(this.register);
  }

}
