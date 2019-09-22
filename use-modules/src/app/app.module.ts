
// typescript : 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ReportsModule } from './features/reports/reports.module';

@NgModule({
  declarations: [ // Pipes, Components, Directives
    AppComponent
  ],
  imports: [
    BrowserModule, // ngIf, ngFor
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    ReportsModule

  ],
  providers: [], // Services - Singletone in all app.
  bootstrap: [AppComponent] // only in appModule
})
export class AppModule { }
