import { IUser } from './../../interfaces/IUser';
import { LoginService } from './../../services/login.service';
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  constructor( private router: Router, private loginService: LoginService) {}
  
  form = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    if (!this.form.valid) 
      return;
    this.router.navigate(['/home']);
    let user: IUser = {} as IUser;
    user.name = this.getName();
    user.email = this.getEmail();
    user.password = this.getPassword();
    this.loginService.setUser(user);
    this.router.navigate(['']);
  }

  getName(): any {
    return this.form.get('userName')?.value;
  }

  getEmail(): any {
    return this.form.get('email')?.value;
  }

  getPassword(): any {
    return this.form.get('password')?.value;
  }

}
