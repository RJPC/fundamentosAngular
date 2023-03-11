import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../models/product.model';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: Product[], limit = 0, offset = 0): Product[] {
    return products.slice(limit, limit + offset);
  }

}
