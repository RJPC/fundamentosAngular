import { Component } from '@angular/core';
import { Product } from './models/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Product[] = [
    {
      id: '01',
      name: 'bike',
      price: 250,
      image: './assets/images/bike.jpg'
    },
    {
      id: '02',
      name: 'albun',
      price: 50,
      image: './assets/images/album.jpg'
    },
    {
      id: '03',
      name: 'books',
      price: 25,
      image: './assets/images/books.jpg'
    },
    {
      id: '04',
      name: 'toy',
      price: 50,
      image: './assets/images/toy.jpg'
    }
  ];

  imgParent: string = '';

  onLoaded(img: string) {
    console.log("Log del padre", img);
  }
}
