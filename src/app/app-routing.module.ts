import { LoginComponent } from './pages/login/login.component';
import { CardCartShoppingComponent } from './components/card-cart-shopping/card-cart-shopping.component';
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  }
  // {
  //   path: "/cart",
  //   component: CardCartShoppingComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
