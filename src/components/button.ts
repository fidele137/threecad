import { LitElement, html, property, customElement } from 'lit-element';

@customElement('cad-button')
export class CadButton extends LitElement {
  @property() name = 'cad-button';

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
        }

        button {
          background: #0000ff;
          color: #ffffff;
          padding: 1rem 2rem;
          border: 1px solid red;
        }
      </style>
      <button>${this.name}</button>
    `;
  }
}
