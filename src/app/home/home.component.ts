import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private shared: SharedService) {}
  Component: string;
  ngOnInit(): void {
    // this.message = this.shared.getmessage();
  }
  getComponent() {
    this.Component = this.shared.getComponent();
    console.log('getMessage = ', this.Component);
    return this.Component;
  }
}
