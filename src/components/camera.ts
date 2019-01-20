import { LitElement, html, property, customElement } from 'lit-element';

@customElement('cad-camera')
export class CadCamera extends LitElement {
  @property({ type: String }) name = 'cad-camera';

  @property({ type: Object }) position: any;
  @property({ type: Object }) rotation: any;
  @property({ type: Object }) scale: any;

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        :host[hidden] {
          display: none;
        }
      </style>
      <div>${this.name}</div>
    `;
  }
}
