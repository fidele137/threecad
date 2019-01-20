import { LitElement, html, property, customElement } from 'lit-element';

export interface Object3D {
  x: number;
  y: number;
  z: number;
}

@customElement('cad-object')
export class CadObject extends LitElement {
  @property({ type: String }) name = 'cad-object';

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
