import { ICart } from './../../interfaces/ICart';
import { ICupom } from './../../interfaces/ICupom';
import { CupomService } from "./../../services/cupom.service";
import { CartService } from "src/app/services/cart.service";
import { Component, Input } from "@angular/core";
import { IProduct } from "src/app/interfaces/IProduct";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-card-cart-shopping",
  templateUrl: "./card-cart-shopping.component.html",
  styleUrls: ["./card-cart-shopping.component.css"],
})
export class CardCartShoppingComponent {
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private cupomSertvice: CupomService
  ) {}

  @Input()
  quantityProduct: number = 1;

  @Input() cartProductList: IProduct[] = [];
  countItemCart: number = 0;

  total: number = 0;
  subTotal?: number = 0;
  discountIsApplied: boolean = false;
  cupomApplied?: ICupom; 
  cart = {} as ICart;

  @Input()
  item!: IProduct;


  ngOnInit(): void {
    this.updateTotal();
  }
  updateTotal() {
    this.cartProductList.forEach(prod => {
      this.total = this.total + prod.price * 1;
    })
    return this.total;
  }

  applyDiscount(cupom: string) {
    this.cupomApplied = this.cupomSertvice.cupomIsValid(cupom);
    this.discountIsApplied = this.cupomApplied != null;
    if(this.discountIsApplied)
    this.subTotal =  this.cupomApplied?.value;
  }

  

}
