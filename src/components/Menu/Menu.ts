import './Menu.scss';
import { testData } from "../../utils/constants/data";

export class Menu {
  private container: HTMLElement;
  private isOpen: boolean = false;
  private activeTestId: number | null = null;
  private onTestSelectCallback: (testId: number) => void;

  constructor(container: HTMLElement, onTestSelect: (testId: number) => void) {
    this.container = container;
    this.onTestSelectCallback = onTestSelect;
    this.updateActiveTestFromURL();
    this.render();
    this.addEventListeners();
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="menu">
        <div class="menu__overlay"></div>
        <div class="menu__content">
          <div class="menu__header">
            <button class="menu__burger-btn">
            </button>
            <h2 class="menu__title">Тесты</h2>
          </div>
          <nav class="menu__nav">
            <ul class="menu__list">
              ${testData.map(test => `
                <li class="menu__item ${this.activeTestId === test.id ? 'menu__item_active' : ''}" data-test-id="${test.id}">
                  ${test.title}
                </li>
              `).join('')}
            </ul>
          </nav>
        </div>
      </div>
    `;
  }

  private addEventListeners(): void {
    this.container.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      if (target.closest('.menu__burger-btn')) {
        this.toggle();
      }

      const item = target.closest('.menu__item');
      if (item) {
        const testId = parseInt((item as HTMLElement).dataset.testId!);
        this.setActiveTest(testId);
        this.onTestSelectCallback(testId);
      }
    });
  }

  private setActiveTest(testId: number): void {
    this.activeTestId = testId;

    this.container.querySelectorAll('.menu__item').forEach(el => {
      const item = el as HTMLElement;
      item.classList.toggle('menu__item_active', parseInt(item.dataset.testId!) === testId);
    });
  }

  public resetActiveTest(): void {
    this.activeTestId = null;

    const menuItems = this.container.querySelectorAll('.menu__item');
    menuItems.forEach(item => {
      item.classList.remove('menu__item_active');
    });
  }

  public toggle(): void {
    this.isOpen = !this.isOpen;
    this.updateMenuState();
  }

  private updateMenuState(): void {
    const menuElement = this.container.querySelector('.menu');
    const menuBurger = this.container.querySelector('.menu__burger-btn');
    menuElement?.classList.toggle('menu_open', this.isOpen);
    menuBurger?.classList.toggle('menu__burger-btn_open', this.isOpen);
  }


  public updateActiveTestFromURL(): void {
    const url = new URL(window.location.href);
    const testId = url.searchParams.get('test');

    if (testId) {
      const id = parseInt(testId);
      this.setActiveTest(id);
    } else {
      this.activeTestId = null;
    }
  }
}
