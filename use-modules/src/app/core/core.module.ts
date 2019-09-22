import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorService } from './services/busy-indicator.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{ provide: BusyIndicatorService, useClass: BusyIndicatorService }]
})
export class CoreModule { }
