import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { KefelBoardComponent } from './components/kefel-board/kefel-board.component';
import { CalcResultComponent } from './components/calc-result/calc-result.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const APP_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'kefel', component: KefelBoardComponent },
  { path: '404', component: NotfoundComponent },
  { path: 'result/:xValue/:yValue', component: CalcResultComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: '404' }
];
