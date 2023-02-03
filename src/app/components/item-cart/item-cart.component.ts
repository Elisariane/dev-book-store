import { CartService } from "src/app/services/cart.service";
import { IProduct } from "src/app/interfaces/IProduct";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-item-cart",
  templateUrl: "./item-cart.component.html",
  styleUrls: ["./item-cart.component.css"],
})
export class ItemCartComponent {
  constructor(private cartSevice: CartService) {}

  ngOnInit(){
    this.updateTotal.emit(); 
  }


  @Input()
  quantityProduct: number = 1;

  @Input()
  item!: IProduct;

  @Output() updateTotal = new EventEmitter<void>();

  removeCart() {
    this.cartSevice.remove(this.item);
    this.updateTotal.emit(); 
  }

  addQuantity() {
    this.item.quantity++;
    this.updateTotal.emit(); 
  }

  subQuantity() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
      this.updateTotal.emit(); 
    }
  }
}
