import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/interfaces/IProduct';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent {

constructor(private cartSevice: CartService){}
@Input()
quantityProduct: number = 1;


  @Input()
  item!: IProduct;

  removeCart() {
    this.cartSevice.remove(this.item);
  }

  addQuantity() {
    this.quantityProduct++;
  }

  subQuantity() {
    if (this.quantityProduct > 1)
      this.quantityProduct--;
  }

}
