import './TestStarted.scss';
import { testData } from '../../utils/constants/data';
import { Test } from '../../types';
import { HomePage } from '../../pages/HomePage/HomePage';
import { TestResults } from '../TestResults/TestResults';
import { Modal } from '../Modal/Modal';
import { startTimer, clearTimer } from '../../utils/timerUtils';

export class TestStarted {
  private container: HTMLElement;
  private testId: number;
  private test: Test | undefined;
  private answers: Record<string, { answerId: number; answerText: string }> = {};

  constructor(container: HTMLElement, testId: number) {
    this.container = container;
    this.testId = testId;
    this.test = testData.find(test => test.id === testId);
    this.render();
    this.startTimer();
  }

  private render(): void {
    if (!this.test) {
      this.container.innerHTML = `<p>Тест не найден</p>`;
      return;
    }

    this.container.innerHTML = `
      <div class="test-started">
        <div class="test-started__header">
          <button class="test-started__exit-btn">Выход</button>
          <h2 class="test-started__title">${this.test.title}</h2>
          <div class="test-started__actions">
            <button class="test-started__reset-btn">Сбросить все ответы</button>
            <span class="test-started__progress">${this.updateProgress() || '0/0'}</span>
            <span class="test-started__timer">00:05:00</span>
          </div>
        </div>
        <form class="test-started__form">
          <div class="test-started__questions">
            ${this.test.questions
              .map((item, index) => `
                <div class="test-started__question">
                  <h3 class="test-started__question-title">${index + 1}. ${item.question}</h3>
                  <div class="test-started__answers">
                    ${item.answers
                    .map(
                      (answer) => `
                      <div class="test-started__answer">
                        <input type="radio" name="question-${item.id}" value="${answer.id}" id="question-${item.id}-answer${answer.id}" ${this.answers[item.id]?.answerId === answer.id ? 'checked' : ''} />
                        <label for="question-${item.id}-answer${answer.id}">${answer.text}</label>
                      </div>
                      `
                    )
                    .join('')}
                  </div>
                </div>
              `)
            .join('')}
          </div>
          <div class="test-started__buttons">
            <button type="button" class="test-started__finish-btn">Завершить</button>
          </div>
        </form>
      </div>
    `;

    this.addEventListeners();
    this.startTimer();
  }

  private addEventListeners(): void {
    this.container.querySelector('.test-started__exit-btn')?.addEventListener('click', () => this.showExitModal());
    this.container.querySelector('.test-started__reset-btn')?.addEventListener('click', () => this.resetAnswers());
    this.container.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', (event) => this.handleAnswerChange(event));
    });
    this.container.querySelector('.test-started__finish-btn')?.addEventListener('click', () => this.finishTest());
  }

  private handleAnswerChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const questionId = Number(target.name.split('-')[1]);
    const answerId = Number(target.value);
    const answerText = target.nextElementSibling?.textContent || '';

    this.answers[`question_${questionId}`] = { answerId, answerText };
    this.updateProgress();
  }

  private saveAnswers(): void {
    const storageKey = 'testsResults';
    const savedResults = JSON.parse(localStorage.getItem(storageKey) || '{}');

    savedResults[`test_${this.testId}`] = this.answers;

    localStorage.setItem(storageKey, JSON.stringify(savedResults));
  }

  private showExitModal(): void {
    const modal = new Modal(
      () => this.exitTest(),
      () => this.closeModal()
    );
    modal.show();
  }

  private closeModal(): void {
    const modal = new Modal(() => {}, () => {});
    modal.close();
  }

  private startTimer(): void {
    startTimer((formattedTime: string) => {
      const timerElement = this.container.querySelector('.test-started__timer');
      if (timerElement) {
        timerElement.textContent = formattedTime;
      }

      if (formattedTime === '00:00:00') {
        this.finishTest();
      }
    });
  }

  private updateProgress(): string {
    const selectedAnswers = Object.keys(this.answers).length;
    const progress = `${selectedAnswers}/${this.test?.questions.length || 0}`;

    const progressElement = this.container.querySelector('.test-started__progress');
    if (progressElement) {
      progressElement.textContent = progress;
    }

    return progress;
  }

  private resetAnswers(): void {
    this.answers = {};
    this.container.querySelectorAll('input[type="radio"]').forEach(input => {
      (input as HTMLInputElement).checked = false;
    });
    this.updateProgress();
  }

  private finishTest(): void {
    clearTimer();

    this.saveAnswers();

    new TestResults(this.container, this.testId);
  }

  private exitTest(): void {
    clearTimer();
    new HomePage(this.container);
    this.closeModal();
  }
}
