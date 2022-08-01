import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.css'],
})
export class FormationCardComponent implements OnInit {
  @Input() titleF: string;
  @Input() dateF: string;
  @Input() nbreP: number;
  @Input() formateur: string;
  constructor() {}

  ngOnInit(): void {}
}
