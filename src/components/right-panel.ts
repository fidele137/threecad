import { LitElement, html, property, customElement } from 'lit-element';

@customElement('cad-right-panel')
export class CadRightPanel extends LitElement {
  @property({ type: String }) name = 'cad-right-panel';

  private _width = 192;

  render() {
    return html`
      <style>
        :host {
          display: block;
          position: relative;
          --cad-right-width: 192px;
          width: var(--cad-right-width);
        }
        :host[hidden] {
          display: none;
        }

        .object-panel {
          overflow: auto;
        }
      </style>
      <cad-divider position="left" @move="${this._move}" @end="${this._end}"></cad-divider>
      <div>${this.name}</div>
      <section class="object-panel">
        <div class="info"></div>
        <div class="transform"></div>
        <div class="geometry"></div>
        <div class="material"></div>
      </section>
    `;
  }

  private _move(e: CustomEvent) {
    const { dx } = e.detail;
    const resizedWidth = this._width + dx;
    if (resizedWidth > 0) {
      requestAnimationFrame(() => {
        this.style.setProperty('--cad-right-width', `${this._width - dx}px`);
      });
    }
  }

  private _end() {
    this._width = parseFloat(this.style.getPropertyValue('--cad-right-width').split('px')[0]);
  }
}
