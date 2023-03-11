import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";

import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null;
  productId: string | null = null;
  products: Product[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this._route.paramMap
    .pipe(
      switchMap(params => {
        this.categoryId = params.get('id');

        if (this.categoryId)
          return this._productsService.getProductsByCategory(this.categoryId)

        return []
      })
    ).subscribe(data => {
      this.products = data
    })

    this._activatedRoute.queryParamMap.subscribe((params) => {
      this.productId = params.get('product');
    })
  }
}
