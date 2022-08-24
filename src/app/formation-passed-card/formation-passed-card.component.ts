import { Objectifs } from './../models/obejctifs';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppServiceService } from './../app-service.service';
import { Participant } from '../models/participant';
import { Evaluation } from '../models/evaluation';
@Component({
  selector: 'app-formation-passed-card',
  templateUrl: './formation-passed-card.component.html',
  styleUrls: ['./formation-passed-card.component.css'],
})
export class FormationPassedCardComponent implements OnInit {
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
  openEval(content: any) {
    this.modalService.open(content, {
      windowClass: 'myCustomModalClass',
      centered: true,
    });
  }
  openConsultation(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }
  ngOnInit(): void {}

  formation;
  getFormationFromAPI() {
    this.service.getFormationById(this.idFormation).subscribe(
      (response) => {
        console.log('Response from API is ', response);
        this.formation = Object.values(response);
        this.formation = this.formation[0];
        console.warn(this.formation);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }
  objectifs: Objectifs[];
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
  eval: Evaluation[];
  getEvalFromAPI() {
    this.service.getEvalByFormation(this.idFormation).subscribe(
      (response) => {
        console.log('Evaluation from API== ', response);
        this.eval = Object.values(response);
        //this.formation = this.formation[0];
        console.warn(this.participants);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }
}
