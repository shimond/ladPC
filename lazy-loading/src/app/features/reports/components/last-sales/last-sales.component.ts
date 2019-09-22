import { Component, OnInit } from '@angular/core';
import { BusyIndicatorService } from 'src/app/core/services/busy-indicator.service';

@Component({
  selector: 'app-last-sales',
  templateUrl: './last-sales.component.html',
  styleUrls: ['./last-sales.component.scss']
})
export class LastSalesComponent implements OnInit {

  constructor(private busyIndicatorService: BusyIndicatorService) { }

  ngOnInit() {
    this.busyIndicatorService.isBusy$.subscribe(isBusy=>{
      alert('IS BUSY = ' + isBusy + ' in LastSalesComponent');
    });
  }

}
