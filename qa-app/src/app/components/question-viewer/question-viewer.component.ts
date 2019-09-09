import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, QA, QuestionStatus } from 'src/app/model/qa';

@Component({
  selector: 'app-question-viewer',
  templateUrl: './question-viewer.component.html',
  styleUrls: ['./question-viewer.component.scss']
})
export class QuestionViewerComponent implements OnInit {
  @Input() question: Question;
  @Output() userAnswered = new EventEmitter<QA>();
  constructor() { }

  ngOnInit() {

  }

  isCurrentOptionCorrect(op: string) {
    if (this.question.status === QuestionStatus.NotAnswered) {
      return false;
    }

    if (this.question.status === QuestionStatus.Correct && this.question.userAnswer === op) {
      return true;
    }

  }

  isCurrentOptionWrong(op: string) {
    if (this.question.status === QuestionStatus.NotAnswered) {
      return false;
    }

    if (this.question.status === QuestionStatus.Wrong && this.question.userAnswer === op) {
      return true;
    }

  }
  onAnswerClicked(option: string) {
    this.userAnswered.emit({ question: this.question, userAnswer: option });
  }

}
