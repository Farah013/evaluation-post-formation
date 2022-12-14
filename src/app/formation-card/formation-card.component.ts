import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppServiceService } from './../app-service.service';
import { Participant } from '../models/participant';

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.css'],
})
export class FormationCardComponent implements OnInit {
  @Input() idFormation: number;
  @Input() titleF: string;
  @Input() dateF: string;
  @Input() nbreP: number;
  @Input() formateur: string;
  @Input() Eval: number;
  constructor(
    private modalService: NgbModal,
    private service: AppServiceService
  ) {}

  ngOnInit(): void {}
  openSave(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }
  data;

  formation;
  getFormationFromAPI() {
    console.log('idFormarion==', this.idFormation);
    this.service.getFormationById(this.idFormation).subscribe(
      (response) => {
        console.log('Response from API is ', response);
        this.formation = Object.values(response);
        this.formation = this.formation[0];
        console.warn('This formation..', this.formation);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }

  objectifs = [];
  getObjectifsFromAPI() {
    this.service.getObjectifsByFormation(this.idFormation).subscribe(
      (response) => {
        console.log('Response from API is ', response);
        this.objectifs = Object.values(response);
        //this.formation = this.formation[0];
        console.warn(this.objectifs);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }
  participants: Participant[];
  getParticipantsFromAPI() {
    this.service.getParticipantsByFormation(this.idFormation).subscribe(
      (response) => {
        console.log('Response from API is ', response);
        this.participants = Object.values(response);
        //this.formation = this.formation[0];
        console.warn(this.participants);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }
}
