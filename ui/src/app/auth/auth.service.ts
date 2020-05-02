import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}
  // ...
  public isAuthenticated(): boolean {
    // Check whether the token is expired and return
    // true or false
    let isUserLoggedIn = sessionStorage.getItem("isUserLoggedIn");
    return isUserLoggedIn == "true"? true: false;
  }
}