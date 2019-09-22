import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastSalesComponent } from './components/last-sales/last-sales.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { REPORTS_ROUTES } from './reports.module.routing';



@NgModule({
  declarations: [LastSalesComponent],
  exports: [LastSalesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(REPORTS_ROUTES)
  ]
})
export class ReportsModule { }
