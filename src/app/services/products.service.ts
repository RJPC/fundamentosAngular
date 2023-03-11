import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, map } from 'rxjs/operators';
import { createProductDTO, Product, updateProductDTO } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private urlAPI = 'https://damp-spire-59848.herokuapp.com/api'//'https://young-sands-07814.herokuapp.com/api'

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(limit?: number, offset?: number){
    let params = new HttpParams();

    if(limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }

    return this.http.get<Product[]>(`${this.urlAPI}/products`,{params})
    .pipe(
      retry(1),
      map(products => products.map(item => {
        return {
          ...item,
          // tax: item.price * .16
        }
      }))
    );
  }

  getProductsByCategory(categoryId: string, limit?: number, offset?: number) {

    let params = new HttpParams();

    if(limit !== undefined && offset !== undefined) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }

    return this.http.get<Product[]>(`${this.urlAPI}/categories/${categoryId}/products`,{params})
  }

  getProduct(id: string){
    return this.http.get<Product>(`${this.urlAPI}/products/${id}`);
  }

  created(dto: createProductDTO) {
    return this.http.post<Product>(`${this.urlAPI}/products`, dto);
  }

  updated(id: string, dto: updateProductDTO){
    return this.http.put<Product>(`${this.urlAPI}/products/${id}`, dto);
  }

  deleted(id: string) {
    return this.http.delete<boolean>(`${this.urlAPI}/products/${id}`);
  }
}
