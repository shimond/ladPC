import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MainRootComponent } from './components/main-root/main-root.component';
import { RouterModule } from '@angular/router';
import { MAIN_MODULE_ROUTES } from './main.module.routing';



@NgModule({
  declarations: [HomeComponent, AboutComponent, MainRootComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MAIN_MODULE_ROUTES)
  ]
})
export class MainModule { }
