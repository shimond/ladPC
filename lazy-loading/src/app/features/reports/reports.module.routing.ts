import { Route } from '@angular/router';
import { LastSalesComponent } from './components/last-sales/last-sales.component';

export const REPORTS_ROUTES: Route[] = [
  {
    path: '', component: LastSalesComponent
  }
];