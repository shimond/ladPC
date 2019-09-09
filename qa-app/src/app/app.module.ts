import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { QuestionViewerComponent } from './components/question-viewer/question-viewer.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { SuffixPipe } from './pipes/suffix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowListComponent,
    QuestionViewerComponent,
    QuestionListComponent,
    SuffixPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
