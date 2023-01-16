import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card-cart-shopping',
  templateUrl: './card-cart-shopping.component.html',
  styleUrls: ['./card-cart-shopping.component.css'],
})
export class CardCartShoppingComponent {
  constructor(private productService: ProductService) {}
  quantityProduct: number = 1;


  @Input() cartProductList: IProduct[] = [];
  countItemCart: number = 0;

  @Input()
  item!: IProduct;

  addQuantity() {
    this.quantityProduct = this.quantityProduct + 1;
  }

  subQuantity() {
    this.quantityProduct = this.quantityProduct - 1;
  }


}
