import { IUser } from './../interfaces/IUser';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  user: IUser = {} as IUser;

  getUsername() {
    return localStorage.getItem('userName');
  }
  
  setUser(user:IUser){
    localStorage.setItem('userName', this.user.name)
    this.user = user;
  }
}
