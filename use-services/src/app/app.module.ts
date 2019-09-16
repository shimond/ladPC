import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { PeopleService, PeopleMockService } from './services/people.service';
import { environment } from 'src/environments/environment';
import { MarkDirective } from './directives/mark.directive';
import { OnlyHebrewDirective } from './directives/only-hebrew.directive';

// const real = [{ provide: PeopleService, useClass: PeopleService }];
// same as:
const real = [PeopleService];

const mock = [{ provide: PeopleService, useClass: PeopleMockService }];



@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    UserIconComponent,
    MarkDirective,
    OnlyHebrewDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: environment.production ? real : mock,
  bootstrap: [AppComponent]
})
export class AppModule { }
