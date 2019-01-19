import { LitElement, html, property, customElement } from 'lit-element';

@customElement('cad-right-panel')
export class CadRightPanel extends LitElement {
  @property() name = 'cad-right-panel';

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>${this.name}</div>
    `;
  }
}
