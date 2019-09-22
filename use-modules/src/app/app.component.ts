import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { BusyIndicatorService } from './core/services/busy-indicator.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  personFormGroup: FormGroup;
  isBusy = true;

  constructor(private fb: FormBuilder, private busyIndicatorService: BusyIndicatorService) {

  }

  ngOnInit() {
    this.personFormGroup = this.fb.group({ email: [null, Validators.required] });
    this.busyIndicatorService.isBusy$.subscribe(isBusy=>{
      this.isBusy = isBusy;
    })
  }
}
