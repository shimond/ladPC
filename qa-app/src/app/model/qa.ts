export interface Question {
    questionText: string;
    options: string[];
    correctAnswer: string;
    status?: QuestionStatus;
    userAnswer?: string;
    answerTime?: Date;
}

export interface QA {
    question: Question;
    userAnswer: string;
}

export enum QuestionStatus {
    NotAnswered = "NotAnswered", Correct = "Correct", Wrong = "Wrong"
}