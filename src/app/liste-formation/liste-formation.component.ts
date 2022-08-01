import { AppServiceService } from './../app-service.service';
//import { Objectifs } from './../objectifs-pedagogiques/obejctifs';
import { Component, OnInit } from '@angular/core';
import formationData from './formationList.json';
interface Formation {
  id: number;
  title: string;
  dateD: string;
  dateF: string;
  Mode: string;
  Lieu: string;
  nbreP: number;
  formateur: string;
  done: number;
  objectifs: string[];
}
@Component({
  selector: 'app-liste-formation',
  templateUrl: './liste-formation.component.html',
  styleUrls: ['./liste-formation.component.css'],
})
export class ListeFormationComponent implements OnInit {
  constructor(private service: AppServiceService) {}
  ngOnInit(): void {
    this.getDataFromAPI();
  }
  formationList = [];
  public postNewFormation(newFormation) {
    this.formationList.push(newFormation);
    console.warn(newFormation);
  }
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
}
