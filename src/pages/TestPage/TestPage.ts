import './TestPage.scss';
import { testData } from '../../utils/constants/data';
import { TestStarted } from '../../components/TestStarted/TestStarted';
import { TestResults } from '../../components/TestResults/TestResults';
import { HomePage } from '../HomePage/HomePage';
import { Menu } from '../../components/Menu/Menu';

export class TestPage {
  private container: HTMLElement;
  private testId: number;
  private test: { id: number; title: string; description: string } | undefined;

  constructor(container: HTMLElement, testId: number, private menu: Menu) {
    this.container = container;
    this.testId = testId;
    this.test = testData.find(test => test.id === testId);
    this.render();
    this.addEventListeners();
  }

  private render(): void {
    if (!this.test) {
      this.container.innerHTML = `<p>Тест не найден</p>`;
      return;
    }

    const completedTest = this.getCompletedTestFromLocalStorage();
    if (completedTest && completedTest.testId === this.testId) {
      new TestResults(this.container, this.testId);
    } else {
      this.container.innerHTML = `
        <div class="test">
          <div class="test__header">
            <h2 class="test__title">Описание</h2>
          </div>
          <div class="test__content">
            <p class="test__description">${this.test.description}</p>
            <div class="test__actions">
              <button class="test__start-btn">Начать</button>
              <button class="test__cancel-btn">Отмена</button>
            </div>
          </div>
        </div>
      `;
    }
  }

  private addEventListeners(): void {
    const startButton = this.container.querySelector('.test__start-btn');
    const cancelButton = this.container.querySelector('.test__cancel-btn');

    startButton?.addEventListener('click', () => this.startTest());
    cancelButton?.addEventListener('click', () => this.cancelTest());
  }

  private startTest(): void {
    this.container.innerHTML = '';
    new TestStarted(this.container, this.testId);
  }

  private cancelTest(): void {
    const url = new URL(window.location.href);
    url.searchParams.delete('test');
    window.history.replaceState({}, '', url.toString());
    this.menu.resetActiveTest();
    new HomePage(this.container);
  }

  private getCompletedTestFromLocalStorage(): { testId: number } | null {
    const storageKey = 'testsResults';
    const savedResults = JSON.parse(localStorage.getItem(storageKey) || '{}');

    const testKey = `test_${this.testId}`;

    if (savedResults[testKey]) {
      return { testId: this.testId };
    }

    return null;
  }
}
