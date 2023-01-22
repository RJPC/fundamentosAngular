import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  product: Product = {
    name: '',
    category: '',
    quantity: 0,
    cost: 0,
    price: 0
  }

  products: Product[] = [{name: 'Tomate', category: 'Perishable', quantity: 10, cost: 1.75, price: 3}]

  addProduct(){
    this.products.push(this.product);
    this.product = {name: '', category:'',quantity:0, cost: 0, price: 0};
  }

  deleteProduct(index: number){
    this.products.splice(index, 1);
  }

}
