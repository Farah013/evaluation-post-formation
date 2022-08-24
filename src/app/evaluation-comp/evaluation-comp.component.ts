import { Component, OnInit, Input } from '@angular/core';
import { Evaluation } from '../models/evaluation';
@Component({
  selector: 'app-evaluation-comp',
  templateUrl: './evaluation-comp.component.html',
  styleUrls: ['./evaluation-comp.component.css'],
})
export class EvaluationCompComponent implements OnInit {
  @Input() eval: Evaluation;
  constructor() {}

  ngOnInit(): void {}
}
