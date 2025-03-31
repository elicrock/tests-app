import './App.scss';
import { Menu } from "../../components/Menu/Menu";
import { HomePage } from "../../pages/HomePage/HomePage";
import { TestPage } from "../../pages/TestPage/TestPage";

export class App {
  private rootElement: HTMLElement;
  private contentContainer!: HTMLElement;
  private menu: Menu;

  constructor() {
    this.rootElement = document.getElementById('app')!;
    this.renderLayout();
    this.menu = new Menu(this.rootElement.querySelector('.menu-container')!, this.handleTestSelect.bind(this));
    this.handleRoute();
    window.addEventListener('popstate', this.handleRoute.bind(this));
  }

  private renderLayout(): void {
    this.rootElement.innerHTML = `
      <main class="main">
        <aside class="menu-container"></aside>
        <section class="content-container"></section>
      </main>
    `;
    this.contentContainer = this.rootElement.querySelector('.content-container')!;
  }

  private handleRoute(): void {
    const testId = this.getTestIdFromUrl();
    this.contentContainer.innerHTML = '';

    if (testId !== null) {
      new TestPage(this.contentContainer, testId, this.menu);
    } else {
      new HomePage(this.contentContainer);
    }
  }

  private handleTestSelect(testId: number): void {
    history.pushState({}, '', `?test=${testId}`);
    this.handleRoute();
  }

  private getTestIdFromUrl(): number | null {
    const params = new URLSearchParams(window.location.search);
    const testId = params.get('test');
    return testId ? parseInt(testId, 10) : null;
  }
}
