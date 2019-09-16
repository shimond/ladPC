import { Component, Injector, OnInit } from '@angular/core';
import { Person, Gender } from './model/person.model';
import { PeopleService, PeopleMockService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  people: Array<Person>;
  
  constructor(private peopleService: PeopleService) {
    
  }

  ngOnInit(){
    this.people = this.peopleService.getAllPeople();
  }
}
