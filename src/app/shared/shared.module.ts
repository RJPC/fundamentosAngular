import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgComponent } from '../shared/components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ReplaceVowelsPipe } from './pipes/replace-vowels.pipe';
import { FilterProductPipe } from '../shared/pipes/filter-product.pipe';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReplaceVowelsPipe,
    FilterProductPipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    ReplaceVowelsPipe,
    FilterProductPipe,
  ]
})
export class SharedModule { }
