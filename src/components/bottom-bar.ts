import { LitElement, html, property, customElement } from 'lit-element';

@customElement('cad-bottom-bar')
export class CadBottomBar extends LitElement {
  @property() name = 'cad-bottom-bar';

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
