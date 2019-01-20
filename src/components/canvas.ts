import { LitElement, html, property, customElement } from 'lit-element';

@customElement('cad-canvas')
export class CadCanvas extends LitElement {
  @property({ type: String }) name = 'cad-canvas';

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <div>${this.name}</div>
      <cad-tree></cad-tree>
    `;
  }
}
