import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css'],
})
export class SidenavBarComponent implements OnInit {
  constructor(private shared: SharedService) {}
  message = 'Hello from navbaaarrr';
  ngOnInit(): void {}
  collapsed = true;
  /*clickedComponent: string = 'home';
  clicked(data: string) {
    this.clickedComponent = data;
  }*/

  setComponent(data: string) {
    this.shared.setComponent(data);
  }
}
