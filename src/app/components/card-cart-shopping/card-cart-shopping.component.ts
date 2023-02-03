import { Router } from "@angular/router";
import { ICart } from "./../../interfaces/ICart";
import { ICupom } from "./../../interfaces/ICupom";
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
    private cupomSertvice: CupomService,
    private router: Router
  ) {}

  @Input()
  quantityProduct: number = 1;

  @Input() cartProductList: IProduct[] = [];
  countItemCart: number = 0;

  total: number = 0;
  subtotal: number = 0;
  cupomIsApplied: boolean = false;
  cupomApplied?: ICupom;
  cart = {} as ICart;

  @Input()
  item!: IProduct;

  ngOnInit() {
    this.total = 0;
    this.subtotal = 0;
  }

  setDiscount(cupom: string) {
    this.cupomApplied = this.cupomSertvice.cupomIsValid(cupom);
    this.cupomIsApplied = this.cupomApplied != null;
  }

  applyDiscount() {
    if (this.cupomIsApplied && !this.cupomApplied?.isPercent)
      this.total = this.cartService.calculateTotalWithDiscountValueOff(
        this.cupomApplied?.value
      );
  }

  goToHome(): void {
    this.router.navigate([""]);
  }

  goToCheckout() {
    this.router.navigate(['checkout']);
  }

  updateTotal() {
    this.subtotal = this.cartService.calculateSubtotal();
    this.total = this.cartService.calculateTotal(this.cupomApplied);
  }
}
