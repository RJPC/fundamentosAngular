import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  urlAPI = 'https://damp-spire-59848.herokuapp.com/api'//'https://young-sands-07814.herokuapp.com/api'

  constructor(
    private _http: HttpClient
  ) { }

  getCategories() {
    return this._http.get<Category[]>(`${this.urlAPI}/categories`)
  }
}
