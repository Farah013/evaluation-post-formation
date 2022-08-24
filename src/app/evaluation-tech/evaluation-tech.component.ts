import { Objectifs } from './../models/obejctifs';
import { Component, Input, OnInit } from '@angular/core';
import { Evaluation } from '../models/evaluation';
@Component({
  selector: 'app-evaluation-tech',
  templateUrl: './evaluation-tech.component.html',
  styleUrls: ['./evaluation-tech.component.css'],
})
export class EvaluationTechComponent implements OnInit {
  @Input() idFormation: number;
  @Input() eval: Evaluation;
  @Input() objectifs: Objectifs[];
  i: number;
  constructor() {}

  ngOnInit(): void {}
  intialisation() {
    this.i = 0;
  }
  inc() {
    this.i = this.i + 1;
    return this.i;
  }
}
