import { LitElement, html, property, customElement } from 'lit-element';

@customElement('cad-left-panel')
export class CadLeftPanel extends LitElement {
  @property({ type: String }) name = 'cad-left-panel';

  private _width = 192;

  sceneObjects: any = {
    Applications: {
      Calendar: 'app',
      Chrome: 'app',
      Webstorm: 'app'
    },
    Documents: {
      angular: {
        src: {
          compiler: 'ts',
          core: 'ts'
        }
      },
      material2: {
        src: {
          button: 'ts',
          checkbox: 'ts',
          input: 'ts'
        }
      }
    },
    Downloads: {
      October: 'pdf',
      November: 'pdf',
      Tutorial: 'html'
    },
    Pictures: {
      'Photo Booth Library for Vacations': {
        Contents: 'dir',
        Pictures: 'dir'
      },
      Sun: 'png',
      Woods: 'jpg'
    }
  };

  render() {
    return html`
      <style>
        :host {
          display: block;
          position: relative;
          --cad-left-width: 192px;
          width: var(--cad-left-width);
        }
        :host[hidden] {
          display: none;
        }

        .scene-panel {
          overflow: auto;
        }
      </style>
      <section class="scene-panel"><cad-tree .data="${this.sceneObjects}"></cad-tree></section>
      <cad-divider position="right" @move="${this._move}" @end="${this._end}"></cad-divider>
    `;
  }

  private _move(e: CustomEvent) {
    const { dx } = e.detail;
    const resizedWidth = this._width + dx;
    if (resizedWidth > 0) {
      requestAnimationFrame(() => {
        this.style.setProperty('--cad-left-width', `${this._width + dx}px`);
      });
    }
  }

  private _end() {
    this._width = parseFloat(this.style.getPropertyValue('--cad-left-width').split('px')[0]);
  }
}
