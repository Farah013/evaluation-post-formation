import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppServiceService } from './../app-service.service';

@Component({
  selector: 'app-search-comp',
  templateUrl: './search-comp.component.html',
  styleUrls: ['./search-comp.component.css'],
})
export class SearchCompComponent implements OnInit {
  @Output() SearchNewTitle: EventEmitter<any> = new EventEmitter();
  constructor(private service: AppServiceService) {}

  ngOnInit(): void {}

  public getTitle() {
    const input_title = document.getElementById('title') as HTMLInputElement;
    const title = input_title?.value;
    console.log('title', title);
    this.SearchNewTitle.emit(title);
  }
}
