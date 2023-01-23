import { categories, ICategory } from './../interfaces/ICategory';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  categories: ICategory[] = categories;

  getNameAllCategories() {
    let nameOfCategories: string[] = [];
    categories.forEach(category => {
      nameOfCategories.push(category.name);
    });
    return nameOfCategories;
  }
}
