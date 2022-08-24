import { AppServiceService } from './../app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-passed',
  templateUrl: './formation-passed.component.html',
  styleUrls: ['./formation-passed.component.css'],
})
export class FormationPassedComponent implements OnInit {
  constructor(private service: AppServiceService) {}

  ngOnInit(): void {
    this.getDataFromAPI();
  }
  formationList = [];
  getDataFromAPI() {
    this.service.getData().subscribe(
      (response) => {
        console.log('Response from API is ', response);
        this.formationList = Object.values(response);
        console.warn(this.formationList);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }

  public SearchNewTitle(title) {
    if (title.length > 0) {
      console.log('TITLE==', title);
      this.service.getDataByTitle(title).subscribe(
        (response) => {
          console.log('Response from API is ', response);
          this.formationList = Object.values(response);
          console.warn(this.formationList);
        },
        (error) => {
          console.log('Error is ', error);
        }
      );
    } else {
      this.getDataFromAPI();
    }
  }
}
