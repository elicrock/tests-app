import './HomePage.scss';

export class HomePage {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.render();
  }

  private render(): void {
    this.container.innerHTML = `
      <div class="home-page">
        <div class="home-page__header"></div>
        <div class="home-page__content">
          <h1 class="home-page__title">Выберите тест из списка</h1>
        </div>
      </div>
    `;
  }
}