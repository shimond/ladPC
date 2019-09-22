import { Route } from '@angular/router';


export const APP_ROUTES: Route[] = [
  { path: 'main', loadChildren: './features/main/main.module#MainModule' },
  { path: 'reports', loadChildren: './features/reports/reports.module#ReportsModule' },
  { path: '', pathMatch: 'full', redirectTo: 'main' }
];
