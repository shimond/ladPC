import { Component, OnInit } from '@angular/core';
import { Show } from './model/show';
import { QuestionViewerComponent } from './components/question-viewer/question-viewer.component';
import { Question, QA, QuestionStatus } from './model/qa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  questions: Question[];
  selectedQuestion: Question;
  beginDate = new Date();
  ngOnInit() {
    this.questions = [
      { questionText: '8 * 3', options: ['11', '24', '10', '22'], correctAnswer: '24', status: QuestionStatus.NotAnswered },
      { questionText: '10 + 1', options: ['11', '124', '310', '2'], correctAnswer: '11', status: QuestionStatus.NotAnswered },
      { questionText: '8 + 9', options: ['-9', '0', '17', '12'], correctAnswer: '17', status: QuestionStatus.NotAnswered },
      { questionText: '10 * 3', options: ['12', '30', '33', '13'], correctAnswer: '30', status: QuestionStatus.NotAnswered },
      { questionText: '33 * 3', options: ['1', '2', '0', '99'], correctAnswer: '99', status: QuestionStatus.NotAnswered }
    ];
  }

  onUserAnswer(qa: QA) {
    // post to web server...
    qa.question.userAnswer = qa.userAnswer;
    qa.question.answerTime = new Date();
    if (qa.question.correctAnswer === qa.userAnswer) {
      qa.question.status = QuestionStatus.Correct;
    } else {
      qa.question.status = QuestionStatus.Wrong;
    }

  }

  onSelectQuestionRequested(q: Question) {
    this.selectedQuestion = q;
  }
}
