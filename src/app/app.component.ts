import { Component } from '@angular/core';
import { Product } from 'src/models/product.model';

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
    price: 0,
    total: 0
  }

  products: Product[] = [{name: 'Tomate', category: 'Perishable', quantity: 10, price: 3, total: 30}]

  addProduct(){
    this.products.push(this.product);
    this.product = {name: '', category:'',quantity:0, price: 0, total: 0};
  }

  deleteProduct(index: number){
    this.products.splice(index, 1);
  }

}
