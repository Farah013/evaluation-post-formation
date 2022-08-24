import { NgForm } from '@angular/forms';
import { Objectifs } from '../models/obejctifs';
import { Formation } from '../models/formation';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-objectifs-pedagogiques',
  templateUrl: './objectifs-pedagogiques.component.html',
  styleUrls: ['./objectifs-pedagogiques.component.css'],
})
export class ObjectifsPedagogiquesComponent implements OnInit {
  //formation: Formation = new Formation();
  @Output() getNewFormation: EventEmitter<any> = new EventEmitter();
  obj: Objectifs = new Objectifs();
  objectif: string;
  constructor() {}
  ngOnInit(): void {}
  objectifFormation: string[] = [];
  public saveObectifs(objectifsForm: NgForm) {
    const input = document.getElementById('objectif') as HTMLInputElement;
    const value = input?.value;
    this.objectifFormation.push(value);
    this.getNewFormation.emit(this.objectifFormation);
  }
  public DeleteObj(obj) {
    for (var i = 0; i < this.objectifFormation.length; i++) {
      if (this.objectifFormation[i] === obj) {
        this.objectifFormation.splice(i, 1);
      }
    }
    this.getNewFormation.emit(this.objectifFormation);
  }
}
