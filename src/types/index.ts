interface Answer {
  id: number;
  text: string;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
  correctAnswerId: number;
}

export interface Test {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}