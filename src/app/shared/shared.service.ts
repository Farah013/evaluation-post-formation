import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  $profile = new EventEmitter();
  Component: string;
  constructor() {}
  setComponent(data: string) {
    this.Component = data;
  }
  getComponent() {
    return this.Component;
  }
  login() {
    console.log('Profile Service');
  }
}
