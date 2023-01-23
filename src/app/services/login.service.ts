import { IUser } from './../interfaces/IUser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  user: IUser = {} as IUser;

  getUsername() {
    return this.user.name;
  }
  
  setUser(user:IUser){
    this.user = user;
  }
}
