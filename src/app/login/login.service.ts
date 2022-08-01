import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  $isLoggedIn = new EventEmitter();
  constructor() {}
  login() {
    console.log('Login Service');
  }
}
