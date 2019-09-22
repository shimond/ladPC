import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export class BusyIndicatorService {

  private isBusy = new BehaviorSubject<boolean>(false);

  get isBusy$(): Observable<boolean> {
    return this.isBusy.asObservable();
  }


  setIsBusy(isBusy: boolean) {
    if (isBusy !== this.isBusy.value) {
      this.isBusy.next(isBusy);
    }
  }

  constructor() { }
}
