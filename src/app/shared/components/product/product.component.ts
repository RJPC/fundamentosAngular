import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: 0,
      name: '',
      typeImg: ''
    }
  }

  imgRta = '';

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  constructor(
    private _file: FilesService
  ){}

  onAddToCart() {
    this.addedProduct.emit(this.product)
  }

  onShowProduct() {
    this.showProduct.emit(this.product.id)
  }

  downloadFile() {
    this._file.getFile('my.txt', '../../assets/files/texto.txt', 'application/txt')
      .subscribe()
  }

  uploadFile(event: Event) {
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0)
    if(file){
      this._file.uploadFile(file)
        .subscribe(rta => {
          this.imgRta = rta.location
        })
    }
  }
}
