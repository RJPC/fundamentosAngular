import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Rahiber';
  age = 5;
  img = "https://source.unsplash.com/random/"
  progressMax = 100;
  disabledIncreaseAge = false;
  disabledDecreaseAge = false;

  getAge(){
    return this.age
  }

  btnDisabled = true;

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    if(this.age < this.progressMax){
      this.age += 1;
    }

    if(this.age == 100){
      this.disabledIncreaseAge = true;
    }

    if(this.age > 0){
      this.disabledDecreaseAge = false;
    }
  }

  decreaseAge(){
    if(this.age > 0) {
      this.age -= 1;
    }

    if(this.age == 0){
      this.disabledDecreaseAge = true;
    }

    if(this.age < 100){
      this.disabledIncreaseAge = false;
    }
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changesName(event: Event){
    const element = event.target as HTMLInputElement;
    this.name = element.value;
    console.log(element.value);
  }
}
