import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kefel-board',
  templateUrl: './kefel-board.component.html',
  styleUrls: ['./kefel-board.component.scss']
})
export class KefelBoardComponent implements OnInit {

  values: Array<{ x: number, y: number }> = [];
  constructor() { }

  ngOnInit() {
    for (let index = 1; index <= 5; index++) {
      for (let index2 = 1; index2 <= 5; index2++) {
        this.values.push({ x: index, y: index2 });
      }
    }
  }

}
