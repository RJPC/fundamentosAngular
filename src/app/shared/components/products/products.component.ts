import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { createProductDTO, Product, updateProductDTO } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {

  @Input() products: Product[] = [];
  @Input() set productId(id: string | null) {
    if (id)
      this.onShowProduct(id);
  }
  myShoppingCart: Product[] = [];
  today: Date = new Date();
  showProductDetail = false;
  total = 0;
  limit = 0;
  offset = 15;
  statusDetail: 'Loading' | 'Success' | 'Error' | 'Init' = 'Init';
  productChosen?: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: 0,
      name: '',
      typeImg: '',
    },
  };

  constructor(
    private _storeService: StoreService,
    private _productsServise: ProductsService,
    private _router: Router
  ) {
    this.myShoppingCart = _storeService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product) {
    this._storeService.addProduct(product);
    this.total = this._storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
    const urlBack = this._router.url.split('?');
    this._router.navigate([urlBack[0]])
    this.productChosen = {
      id: '',
      title: '',
      price: 0,
      images: [],
      description: '',
      category: {
        id: 0,
        name: '',
        typeImg: '',
      },
    };
  }

  onShowProduct(id: string) {
    this.statusDetail = 'Loading';
    this._productsServise.getProduct(id).subscribe({
      next: (data) => {
        if (!this.showProductDetail)
          this.showProductDetail = true

        this.statusDetail = 'Success';
        this.productChosen = data;
      },
      error: (errorMsg) => {
        console.log(errorMsg.error.message);
        this.statusDetail = 'Error';
        Swal.fire({
          title: 'Error!',
          text: errorMsg.error.message,
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      },
    });
  }

  createNewProduct() {
    const product: createProductDTO = {
      title: 'Nuevo Producto',
      price: 1000,
      images: [
        `https://placeimg.com/640/480/any?r=${Math.random()}`,
        `https://placeimg.com/640/480/any?r=${Math.random()}`,
        `https://placeimg.com/640/480/any?r=${Math.random()}`,
      ],
      categoryId: 2,
      description: 'Bla Bla Bla',
    };

    this._productsServise.created(product).subscribe((p: Product) => {
      this.products.unshift(p);
    });
  }

  updateProduct() {
    const changes: updateProductDTO = {
      title: 'nuevo titulo',
      price: 356,
    };

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const id = this.productChosen!.id;

    this._productsServise.updated(id, changes).subscribe((data) => {
      const productIndex = this.products.findIndex((p) => p.id === id);
      this.products[productIndex] = data;
      this.productChosen = data;
    });
  }

  deleteProduct() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const id = this.productChosen!.id;
    this._productsServise.deleted(id).subscribe(() => {
      const productIndex = this.products.findIndex((p) => p.id === id);
      this.products.splice(productIndex, 1);
      this.toggleProductDetail();
    });
  }

  prev() {
    this.limit -= this.offset;
  }

  next() {
    this.limit += this.offset;
  }
}
