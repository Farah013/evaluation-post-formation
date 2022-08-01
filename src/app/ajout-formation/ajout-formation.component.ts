import { Formation } from './formation';
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
  constructor(private modalService: NgbModal) {}
  public newFormation: Formation = new Formation();

  closeResult = '';
  ngOnInit(): void {}
  open(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
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
    this.newFormation.objectifs = [];
    this.newFormation.objectifs = objectifFormation;
    //console.warn(this.newFormation);
  }
  public getNewDetails(fDetails) {
    //this.newFormation = new Formation();
    this.newFormation.Lieu = fDetails.Lieu;
    this.newFormation.Mode = fDetails.Mode;
    this.newFormation.formateur = fDetails.formateur;
    this.newFormation.dateD = fDetails.dateD;
    this.newFormation.dateF = fDetails.dateF;
    // console.warn(this.newFormation);
  }
  public getNewTitle() {
    const input_title = document.getElementById('title') as HTMLInputElement;
    const title = input_title?.value;
    this.newFormation.title = title;
  }
  public saveFormation() {
    //this.newFormation = new Formation();
    // console.warn(this.newFormation);
    this.postNewFormation.emit(this.newFormation);
  }
}
