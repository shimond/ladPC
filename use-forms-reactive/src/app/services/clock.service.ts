import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private time = new Date();
  timeChanged = new BehaviorSubject<Date>(new Date());
  constructor() {
    setInterval(() => {
      this.time = new Date();
      this.timeChanged.next(this.time);
    }, 20000);
    //last value
    // this.timeChanged.value
  }
}
