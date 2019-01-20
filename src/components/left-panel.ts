import { LitElement, html, property, customElement } from 'lit-element';

@customElement('cad-left-panel')
export class CadLeftPanel extends LitElement {
  @property({ type: String }) name = 'cad-left-panel';

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
