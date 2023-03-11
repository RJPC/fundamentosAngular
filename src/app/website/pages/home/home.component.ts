import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  productId: string | null = null;

  constructor(
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    // this.productsServise.getAllProducts().subscribe((data) => {
    //   this.products = data;
    // });
    this._productsService.getAllProducts().subscribe({
      next: (value) => {
        this.products = value;
      },
      error: (err) => {
        if (err.status === 0)
          Swal.fire({
            title: 'Consulte su conexion a internet',
            text: err.name,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        console.log('Mensaje de Error', err);
      },
    });

    this._activatedRoute.queryParamMap
      .subscribe((params) => {
        this.productId = params.get('product');
      })
  }


}
