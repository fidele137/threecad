import { LitElement, html, customElement, query } from 'lit-element';
import PointerTracker from 'pointer-tracker';

@customElement('cad-divider')
export class CadDivider extends LitElement {
  protected pointerTracker!: PointerTracker;
  @query('.divider') divider!: HTMLElement;

  protected firstUpdated() {
    this.pointerTracker = new PointerTracker(this.divider, {
      start: (_, event) => {
        event.preventDefault();
        return true;
      },
      move: () => {
        const startPointer = this.pointerTracker.startPointers[0];
        const currentPointer = this.pointerTracker.currentPointers[0];
        const dx = currentPointer.pageX - startPointer.pageX;
        const dy = currentPointer.pageY - startPointer.pageY;
        this.dispatchEvent(new CustomEvent('move', { detail: { dx, dy } }));
      },
      end: () => {
        this.dispatchEvent(new CustomEvent('end'));
      }
    });
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          position: absolute;
        }
        :host[hidden] {
          display: none;
        }

        :host([position='left']) {
          left: -2px;
          top: 0;
          bottom: 0;
        }
        :host([position='right']) {
          right: 2px;
          top: 0;
          bottom: 0;
        }
        :host([position='top']) {
          top: -2px;
          left: 0;
          right: 0;
        }
        :host([position='bottom']) {
          bottom: 2px;
          left: 0;
          right: 0;
        }

        .divider {
          display: inline-block;
          background: lightblue;
          position: absolute;
          opacity: 0;
          width: 4px;
          height: 100%;
        }

        .divider:hover {
          cursor: ew-resize;
        }
      </style>
      <span class="divider"></span>
    `;
  }
}
