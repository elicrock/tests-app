import './Modal.scss';

export class Modal {
  private onExit: () => void;
  private onCancel: () => void;
  private modal: HTMLElement | null = null;

  constructor(onExit: () => void, onCancel: () => void) {
    this.modal = document.querySelector('.modal');
    this.onExit = onExit;
    this.onCancel = onCancel;
  }

  public show(): void {
    if (this.modal) return;

    this.modal = document.createElement('div');
    this.modal.classList.add('modal');
    this.modal.innerHTML = `
      <div class="modal__content">
        <div class="modal__header">
          <h3 class="modal__title">Вы уверены что хотите выйти?</h3>
          <p class="modal__description">Все результаты будут сброшены</h3>
        </div>
        <div class="modal__buttons">
          <button class="modal__btn modal__btn_exit">Выход</button>
          <button class="modal__btn modal__btn_cancel">Отмена</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.modal);

    this.modal.querySelector('.modal__btn_exit')?.addEventListener('click', () => {
      this.onExit();
      const url = new URL(window.location.href);
      url.searchParams.delete('test');
      window.history.replaceState({}, '', url.toString());
    });
    this.modal.querySelector('.modal__btn_cancel')?.addEventListener('click', this.onCancel);
  }

  public close(): void {
    if (this.modal) {
      this.modal.remove();
    }
  }
}
