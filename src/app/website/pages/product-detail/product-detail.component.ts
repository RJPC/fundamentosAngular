import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product, updateProductDTO } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null;
  productDetail: Product | null = null;

  constructor(
    private _activetedRouter: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductsService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this._activetedRouter.paramMap
      .pipe(
        switchMap((params) => {
          this.productId = params.get('id')
          if (this.productId)
            return this._productsService.getProduct(this.productId)

          return [null]
        })
      ).subscribe((data) => {
        this.productDetail = data
      });
  }

  updateProduct() {
    const changes: updateProductDTO = {
      title: 'nuevo titulo',
      price: 356,
    };

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const id = this.productDetail!.id;

    this._productsService.updated(id, changes).subscribe((data) => {
      this.productDetail = data;
    });
  }

  deleteProduct() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const id = this.productDetail!.id;
    this._productsService.deleted(id).subscribe(() => {
      this._location.back();
    });
  }

  goToBack() {
    this._location.back()
  }

}
