import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  product = {
    name: '',
    category: '',
    quantity: 0
  }

  products: {name: string, category: string, quantity: number}[] = []

  addProduct(){
    this.products.push(this.product);
    this.product = {name: '', category:'',quantity:0};
  }

}
