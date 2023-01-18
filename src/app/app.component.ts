import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Rahiber';
  private age = 32;
  img = "https://source.unsplash.com/random/"

  getAge(){
    return this.age
  }

  btnDisabled = true;
}
