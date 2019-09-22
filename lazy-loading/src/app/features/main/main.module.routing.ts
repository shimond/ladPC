import { Route } from '@angular/router';
import { MainRootComponent } from './components/main-root/main-root.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const MAIN_MODULE_ROUTES: Route[] = [
  {
    path: '', component: MainRootComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ]
  }

];