import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: string = '';
  category: string = '';
  quantity: number = 0;

  product = {
    name: '',
    category: '',
    quantity: 0
  }

  products = [{name: 'Tomate', category: 'Perecederos', quantity: 10}]

  addProduct(){
    this.products.push(this.product)
  }

}
