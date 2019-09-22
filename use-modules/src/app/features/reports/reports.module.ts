import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastSalesComponent } from './components/last-sales/last-sales.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LastSalesComponent],
  exports: [LastSalesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ReportsModule { }
