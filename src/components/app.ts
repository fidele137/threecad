import { LitElement, html, customElement, property } from 'lit-element';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';

import './icons.js';
import './top-bar.js';
import './left-panel.js';
import './canvas.js';
import './right-panel.js';
import './bottom-bar.js';

@customElement('cad-app')
export class CadApp extends LitElement {
  @property() name = 'cad-app';

  render() {
    return html`
      <style>
        :host {
          --app-primary-color: #202020;
          --app-secondary-color: #757575;
          --app-accent-color: #172c50;
          --paper-button-ink-color: var(--app-accent-color);
          --paper-icon-button-ink-color: var(--app-accent-color);
          --paper-spinner-color: var(--app-accent-color);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          color: var(--app-primary-color);

          height: 100vh;
          position: relative;
          display: grid;
          grid-template-columns: 192px auto 192px;
          grid-template-rows: 48px auto 96px;
          grid-template-areas:
            'top-bar top-bar top-bar'
            'left-panel canvas right-panel'
            'bottom-bar bottom-bar bottom-bar';
        }

        cad-top-bar {
          grid-area: top-bar;
        }

        cad-left-panel {
          grid-area: left-panel;
        }

        cad-canvas {
          grid-area: canvas;
        }

        cad-right-panel {
          grid-area: right-panel;
        }

        cad-bottom-bar {
          grid-area: bottom-bar;
        }
      </style>

      <cad-top-bar></cad-top-bar>
      <cad-left-panel></cad-left-panel>
      <cad-canvas></cad-canvas>
      <cad-right-panel></cad-right-panel>
      <cad-bottom-bar></cad-bottom-bar>
    `;
  }
}
