import { Component, OnInit, Input } from '@angular/core';
import { Gender } from 'src/app/model/person.model';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.scss']
})
export class UserIconComponent implements OnInit {

  @Input() gender : Gender;
  constructor() { }

  ngOnInit() {
  }

}
