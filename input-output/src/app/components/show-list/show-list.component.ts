import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Show } from 'src/app/model/show';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {

  @Input() shows: Show[];
  @Input() selectedShow:Show;

  @Output() showSelected = new EventEmitter<Show>();
  constructor() { }

  ngOnInit() {

  }

  showClicked(show: Show) {
    // this.selectedShow = show;
    this.showSelected.emit(show);
  }
}
