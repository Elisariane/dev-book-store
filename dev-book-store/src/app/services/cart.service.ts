import { ProductService } from 'src/app/services/product.service';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private productSevice: ProductService) {}
  countItemCart: number = 0;
  cartProductList: IProduct[] = [];
  products: IProduct[] = this.productSevice.getAllProducts();

  add(product: IProduct) {
    this.cartProductList = this.products.filter((p) => p.id == product.id);
    this.countItemCart++;
    console.log(this.cartProductList)
  }

  remove(item: IProduct){
    this.cartProductList = this.cartProductList.filter(p => p.id != item.id)
  }
}
