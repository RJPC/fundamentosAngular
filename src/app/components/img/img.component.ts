import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  @Input() img: string = ''; //https://www.w3schools.com/howto/img_avatar.png
  @Output() loaded = new EventEmitter<string>(); //Creation the event custom

  imgDefault: string = "./assets/images/default.png" //"https://www.m2crowd.com/core/i/placeholder.png";

  constructor(){
    // before render
    // NO async -- once time
    console.log('constructor', 'imgValue =>', this.img);
  }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded(){
    console.log('Log del hijo');
    this.loaded.emit(this.img); //Emit event custom
  }
}
