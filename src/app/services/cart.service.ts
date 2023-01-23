import { ICart } from '../interfaces/ICart';
import { ProductService } from 'src/app/services/product.service';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private productSevice: ProductService) {}

  countItemCart: number = 0;
  quantityProduct: number = 1;
  cartProductList: IProduct[] = [];
  products: IProduct[] = this.productSevice.getAllProducts();
  total: number = 0;
  cart = {} as ICart;

  add(product: IProduct) {
    if(!this.cartProductList.includes(product)){
      this.cartProductList.push(product);
      this.countItemCart++;
    } else {
      this.quantityProduct++;
    }

  }

  getAllProductInCart() {
    return this.cartProductList;
  }

  remove(item: IProduct){
    this.cartProductList = this.cartProductList.filter( product =>  product.id != item.id)
  }

  getCountItemCart() {
    return this.countItemCart = this.cartProductList.length;
  }
  
  getQuantityProductsInCart() {
    return this.quantityProduct;
  }

}
