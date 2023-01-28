import { CategoryService } from "./../../services/category.service";
import { CartService } from "src/app/services/cart.service";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Input() countItemCart: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    private categoryService: CategoryService
  ) {}

  categories: string[] = [];

  getTotalItemCart() {
    return (this.countItemCart = this.cartService.getCountItemCart());
  }

  getCategories() {
    return (this.categories = this.categoryService.getNameAllCategories());
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
  
  goToCartPage(){
    this.router.navigate(['cart']);
  }

  goToHome() {
    this.router.navigate([''])
  }
}
