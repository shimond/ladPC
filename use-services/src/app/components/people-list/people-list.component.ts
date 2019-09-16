import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/model/person.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  markColor = 'yellow';

  @Input() people: Array<Person> = [];
  constructor() { }

  ngOnInit() {
  }

}
