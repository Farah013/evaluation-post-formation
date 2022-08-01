import { AppServiceService } from './app-service.service';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'stage-2022';
  console = console;
  constructor(private service: AppServiceService) {}
  ngOnInit() {
    this.getDataFromAPI();
  }
  getDataFromAPI() {
    this.service.getData().subscribe(
      (response) => {
        this.console.log('Response from API is ', response);
      },
      (error) => {
        this.console.log('Error is ', error);
      }
    );
  }
}
