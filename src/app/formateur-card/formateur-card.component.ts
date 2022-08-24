import { Component, OnInit, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { Formateur } from '../models/Formateur';
@Component({
  selector: 'app-formateur-card',
  templateUrl: './formateur-card.component.html',
  styleUrls: ['./formateur-card.component.css'],
})
export class FormateurCardComponent implements OnInit {
  @Input() formateurList: Formateur[];
  page = 1;
  pageSize = 4;
  //collectionSize = this.formateurList.length;
  formateurs: Formateur[];
  constructor() {
    //  this.refreshFormateurs();
  }

  ngOnInit(): void {
    this.refreshFormateurs();
  }
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
}
