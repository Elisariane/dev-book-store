import { ICupom } from "./../interfaces/ICupom";
import { ICart } from "../interfaces/ICart";
import { ProductService } from "src/app/services/product.service";
import { Injectable } from "@angular/core";
import { IProduct } from "../interfaces/IProduct";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private productSevice: ProductService) {}

  countItemCart: number = 0;
  quantityProduct: number = 1;
  cartProductList: IProduct[] = [];
  products: IProduct[] = this.productSevice.getAllProducts();
  total: number = 0;
  subtotal: number = 0;
  cart = {} as ICart;

  add(product: IProduct) {
    if (!this.cartProductList.includes(product)) {
      this.cartProductList.push(product);
      this.countItemCart++;
    }
    product.quantity++;
  }

  getAllProductInCart() {
    return this.cartProductList;
  }

  remove(item: IProduct) {
    this.cartProductList = this.cartProductList.filter(
      (product) => product.id != item.id
    );
  }

  getCountItemCart() {
    return (this.countItemCart = this.cartProductList.length);
  }

  calculateSubtotal() {
    this.subtotal = 0;
    this.cartProductList.forEach((product) => {
      this.subtotal += product.quantity * product.price;
    });
    return this.subtotal;
  }

  calculateTotal(discount?: ICupom) {
    this.total = 0;
    if (discount?.isPercent){
      this.total = this.calculateTotalWithDiscountPercent(discount.value);
    }
    else {
      this.total = this.calculateTotalWithDiscountValueOff(discount?.value);
    }

    return this.total;
  }

  calculateTotalWithDiscountPercent(discount: number) {
    let subtotal = this.calculateSubtotal();
    return subtotal * (discount / 100);
  }

  calculateTotalWithDiscountValueOff(discount?: number) {
    discount = discount == null || discount == undefined ? 0 : discount;
    let subtotal = this.calculateSubtotal();
    console.log(subtotal)
    return subtotal - discount;
  }
}
