import { Formateur } from '../models/Formateur';
import { AppServiceService } from './../app-service.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-liste-formateurs',
  templateUrl: './liste-formateurs.component.html',
  styleUrls: ['./liste-formateurs.component.css'],
})
export class ListeFormateursComponent implements OnInit {
  //TABLE

  constructor(
    private service: AppServiceService,
    private modalService: NgbModal
  ) {
    //this.getFormateurFromAPI();
    this.refreshFormateurs();
  }
  openSave(content: any) {
    this.modalService.open(content, { size: 'l', centered: true });
  }
  public closeSave() {
    window.location.reload();
  }
  open(content: any) {
    this.modalService.open(content, { size: 'l', centered: true });
  }

  formateurList: Formateur[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = this.formateurList.length;
  formateurs: Formateur[] = this.formateurList;
  ngOnInit(): void {
    this.getFormateurFromAPI();
    // this.refreshFormateurs();
  }

  getFormateurFromAPI() {
    this.service.getFormateurs().subscribe(
      (response) => {
        console.log('Response from API is ', response);
        this.formateurList = Object.values(response);
        for (let i = 0; i < 4; i++) {
          this.formateurs[i] = this.formateurList[i];
        }
        console.warn(this.formateurList);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }

  //table steup

  refreshFormateurs() {
    this.formateurs = this.formateurList
      .map((formateur, i) => ({
        id: i + 1,
        ...formateur,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
  public postNewFormateur(newFormateur) {
    console.log('newFormateur ===', newFormateur.Name);
    this.service.postFormateur(newFormateur);
  }

  public deleteFormateur(CIN) {
    this.service.deleteFormateur(CIN);
    // window.location.reload();
  }
  public newFormateur: Formateur = new Formateur();
  public getNewName() {
    const input_Name = document.getElementById('name') as HTMLInputElement;
    const name = input_Name?.value;
    this.newFormateur.Name = name;
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

  public updateFormateur(CIN) {
    this.newFormateur.CIN = CIN;
    this.service.updateFormateur(this.newFormateur, CIN);
    //window.location.reload();
  }
}
