import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Formation } from '../models/formation';
@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.css'],
})
export class DetailsFormationComponent implements OnInit {
  @Output() getNewDetails: EventEmitter<any> = new EventEmitter();
  fDetails: Formation = new Formation();
  constructor() {}
  ngOnInit(): void {}
  public saveDetails() {
    const inputDD = document.getElementById('dateDeb') as HTMLInputElement;
    const dateD = inputDD?.value;

    const inputDF = document.getElementById('dateFin') as HTMLInputElement;
    const dateF = inputDF?.value;

    const inputM = document.getElementById('mode') as HTMLInputElement;
    const Mode = inputM?.value;

    const inputL = document.getElementById('lieu') as HTMLInputElement;
    const Lieu = inputL?.value;

    const inputF = document.getElementById('formateur') as HTMLInputElement;
    const formateur = inputF?.value;

    this.getNewDetails.emit({ dateD, dateF, Mode, Lieu, formateur });
  }
}
