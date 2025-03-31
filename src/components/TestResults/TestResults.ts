import './TestResults.scss';
import { Test } from '../../types';
import { testData } from '../../utils/constants/data';
import { TestStarted } from '../TestStarted/TestStarted';

export class TestResults {
  private container: HTMLElement;
  private testId: number;
  private test: Test | undefined;
  private userAnswers: Record<string, { answerId: number; answerText: string }> = {};

  constructor(container: HTMLElement, testId: number) {
    this.container = container;
    this.testId = testId;
    this.test = testData.find(test => test.id === testId);
    this.loadUserAnswers();
    this.render();
  }

  private loadUserAnswers(): void {
    const storageKey = 'testsResults';
    const savedResults = JSON.parse(localStorage.getItem(storageKey) || '{}');
    this.userAnswers = savedResults[`test_${this.testId}`] || {};
  }

  private render(): void {
    if (!this.test) {
      this.container.innerHTML = `<p>Тест не найден</p>`;
      return;
    }

    const answeredCount = Object.keys(this.userAnswers).length;
    const totalQuestions = this.test.questions.length;

    this.container.innerHTML = `
      <div class="test-results">
        <div class="test-results__header">
          <h2 class="test-results__title">${this.test.title}</h2>
        </div>
        <div class="test-results__wrapper">
          <div class="test-results__content">
            <div class="test-results__status">
              <h3>Тест завершён</h3>
              <p>Вы ответили на ${answeredCount} из ${totalQuestions} вопросов.</p>
            </div>
            <div class="test-results__text">Ваши ответы</div>
            <div class="test-results__questions">
              ${this.test.questions
                .map((item) => {
                  const userAnswer = this.userAnswers[`question_${item.id}`];
                  const correctAnswer = item.answers.find(answer => answer.id === item.correctAnswerId);
                  const userAnswerText = userAnswer ? userAnswer.answerText : 'Не ответили';
                  const correctAnswerText = correctAnswer ? correctAnswer.text : '';

                  return `
                    <div class="test-results__question">
                      <h3>${item.id}. ${item.question}</h3>
                      <div class="test-results__answers">
                        <p>Правильный ответ: ${correctAnswerText}.</p>
                        <p>Вы ответили: ${userAnswerText}.</p>
                      </div>
                    </div>
                  `;
                })
              .join('')}
            </div>
          </div>
          <div class="test-results__buttons">
            <button type="button" class="test-results__retry-btn">Пройти ещё раз</button>
          </div>
        </div>
      </div>
    `;

    this.addEventListeners();
  }

  private addEventListeners(): void {
    this.container.querySelector('.test-results__retry-btn')?.addEventListener('click', () => this.retryTest());
  }

  private retryTest(): void {
    const storageKey = 'testsResults';
    const savedResults = JSON.parse(localStorage.getItem(storageKey) || '{}');

    delete savedResults[`test_${this.testId}`];

    localStorage.setItem(storageKey, JSON.stringify(savedResults));

    new TestStarted(this.container, this.testId);
  }
}
