import { IUser } from './../../interfaces/IUser';
import { LoginService } from './../../services/login.service';
import { Component, Input } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  constructor( private router: Router, private loginService: LoginService) {}

  @Input()
  name: string = '';
  @Input()
  email: string = '';
  @Input()
  password:string = '';

  login() {
    let user: IUser = {} as IUser;
    user.name = this.name;
    // user.email = 
    // user.password = 
    this.loginService.setUser(user);
    this.router.navigate(['']);
  }

}
