import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Person } from 'src/app/model/person.model';
import { ClockService } from 'src/app/services/clock.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {

  @Input() people: Array<Person>;
  @Output() selectPersonRequested = new EventEmitter<Person>();
  time: Date;
  subscription: Subscription;
  constructor(private clockService: ClockService) {
    this.subscription = clockService.timeChanged
      .subscribe(time => this.time = time);
  }

  ngOnInit() {

  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onPersonClick(p: Person) {
    this.selectPersonRequested.emit(p);
  }
}
