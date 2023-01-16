import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css'],
})
export class CardProductComponent {
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}


  products: IProduct[] = this.productService.getAllProducts();

  @Output() addItem: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  selectProduct(product: IProduct) {
    this.cartService.add(product);
  }
}
