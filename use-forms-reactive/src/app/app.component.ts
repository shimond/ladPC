import { Component, OnInit } from '@angular/core';
import { Person } from './model/person.model';
import { PeopleService } from './services/people.service';
import { ClockService } from './services/clock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  peopleFromAppComponent: Array<Person>;
  selectedPerson: Person;
  time: Date;
  subscription: Subscription;
  isPeopleListVisible = false;
  constructor(private peopleService: PeopleService, private clockService: ClockService) {
    this.subscription = clockService.timeChanged.subscribe((time => this.time = time));
  }

  ngOnInit() {
    this.peopleFromAppComponent = this.peopleService.getAllPeople();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onSelectPersonRequested(p: Person) {
    this.selectedPerson = p;
  }

  onEditingFinished(p: Person) {
    this.peopleService.updatePerson(p);
  }

  onAddPerson(p: Person) {
    this.peopleService.addNewPerson(p);
  }
}
