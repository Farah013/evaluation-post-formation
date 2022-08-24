import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Formateur } from '../models/Formateur';
@Component({
  selector: 'app-ajout-formateur',
  templateUrl: './ajout-formateur.component.html',
  styleUrls: ['./ajout-formateur.component.css'],
})
export class AjoutFormateurComponent implements OnInit {
  @Output() postNewFormateur: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal) {}
  open(content: any) {
    this.modalService.open(content, { size: 'l', centered: true });
  }
  openSave(content: any) {
    this.modalService.open(content, { size: 's', centered: true });
  }
  public cleanForm() {}
  ngOnInit(): void {}
  public newFormateur: Formateur = new Formateur();

  public getNewName() {
    const input_Name = document.getElementById('name') as HTMLInputElement;
    const name = input_Name?.value;
    this.newFormateur.Name = name;
  }
  public getNewCIN() {
    const input_CIN = document.getElementById('CIN') as HTMLInputElement;
    const CIN = input_CIN?.value;
    this.newFormateur.CIN = parseInt(CIN);
  }
  public getNewSpeciality() {
    const input_spec = document.getElementById('spec') as HTMLInputElement;
    const spec = input_spec?.value;
    this.newFormateur.Speciality = spec;
  }
  public getNewEmail() {
    const input_email = document.getElementById('email') as HTMLInputElement;
    const email = input_email?.value;
    this.newFormateur.Email = email;
  }

  public saveFormateur() {
    this.postNewFormateur.emit(this.newFormateur);
  }
  public closeSave() {
    window.location.reload();
  }
}
