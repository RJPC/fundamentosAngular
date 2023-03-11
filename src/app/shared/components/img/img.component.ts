import { Component, EventEmitter, Input, Output/*, OnChanges, OnInit, AfterViewInit, OnDestroy, SimpleChanges*/ } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent /*implements OnInit, OnChanges, AfterViewInit, OnDestroy*/ {

  img = ''; //https://www.w3schools.com/howto/img_avatar.png

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('img') set changeImg(newImg: string) {
    this.img = newImg;
    // console.log("change just img =>", this.img);
  }
  @Output() loaded = new EventEmitter<string>(); //Creation the event custom

  imgDefault = "./assets/images/default.png" //"https://www.m2crowd.com/core/i/placeholder.png";
  // counter: number = 0;
  // counterFn: number | undefined;

  // before render -- No async
  // once time
  constructor(){
    // console.log('constructor', 'imgValue =>', this.img);
  }
  // before - during render, changes input
  // all times
  // ngOnChanges(changes: SimpleChanges) {
    // console.log ('ngOnChanges', 'imgValue =>', this.img);
    // console.log('changes =>', changes);

  // }
  // before render -- async, fetch
  // once time
  // ngOnInit() {
    // console.log('ngOnInit', 'imgValue =>', this.img);
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log("run counter");
    // }, 1000)
  // }
  // after render -- handler children
  // ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');

  // }
  // delete component
  // ngOnDestroy(): void {
    // console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  // }

  imgError() {
    this.img = this.imgDefault;
  }

  imgLoaded(){
    // console.log('Log del hijo');
    this.loaded.emit(this.img); //Emit event custom
  }
}
