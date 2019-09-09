import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/model/qa';
import { QuestionViewerComponent } from '../question-viewer/question-viewer.component';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  @Input() questions: Question[];
  @Input() selectedQuestion: Question;
  @Output() selectQuestionRequested = new EventEmitter<Question>();

  constructor() { }

  ngOnInit() {
  }

  onquestionClicked(q: Question) {
    this.selectQuestionRequested.emit(q);
  }

}
