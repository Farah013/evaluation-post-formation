import { AppServiceService } from './../app-service.service';
import { HttpClient } from '@angular/common/http';
import { Formation } from '../models/formation';
import { NgForm } from '@angular/forms';

import {
  Component,
  OnInit,
  Input,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DateAdapter } from '@angular/material/core';
import { eventListeners } from '@popperjs/core';

interface formationDetails {
  dateD: string;
  dateF: string;
  Mode: string;
  Lieu: string;
  formateur: string;
}

@Component({
  selector: 'app-ajout-formation',
  templateUrl: './ajout-formation.component.html',
  styleUrls: ['./ajout-formation.component.css'],
})
export class AjoutFormationComponent implements OnInit {
  @Input() formationList: Formation[];
  @Output() postNewFormation: EventEmitter<any> = new EventEmitter();
  public formation: Formation = new Formation();
  constructor(
    private modalService: NgbModal,
    private service: AppServiceService
  ) {}
  public newFormation: Formation = new Formation();

  closeResult = '';
  ngOnInit(): void {}
  open(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }
  openSave(content: any) {
    this.modalService.open(content, { size: 'l', centered: true });
  }
  public cleanForm() {
    this.newFormation = new Formation();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  public getNewFormation(objectifFormation) {
    this.newFormation.Objectifs = [];
    this.newFormation.Objectifs = objectifFormation;
    //console.warn(this.newFormation);
  }
  public getNewDetails(fDetails) {
    //this.newFormation = new Formation();
    this.newFormation.Lieu = fDetails.Lieu;
    this.newFormation.Mode = fDetails.Mode;
    this.newFormation.Formateur = fDetails.formateur;
    this.newFormation.DateDeb = fDetails.dateD;
    this.newFormation.DateFin = fDetails.dateF;
    // console.warn(this.newFormation);
  }
  var1 = 0;
  public getParticipantsList(participantsList) {
    this.var1 = Object.values(participantsList).length;
    this.newFormation.NbreParticipants = Object.keys(participantsList).length;
    this.newFormation.Participants = participantsList;
  }
  public getNewTitle() {
    const input_title = document.getElementById('title') as HTMLInputElement;
    const title = input_title?.value;
    this.newFormation.Titre = title;
  }
  public saveFormation() {
    //this.newFormation.NbreParticipants = 10;
    this.newFormation.idFormation = Math.floor(Math.random() * 100 + 1);
    this.newFormation.Eval = 0;
    this.postNewFormation.emit(this.newFormation);
  }
  public closeSave() {
    window.location.reload();
  }
}
