import { LitElement, html, customElement, property } from 'lit-element';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';

import 'two-up-element/dist/two-up.mjs';
import 'pinch-zoom-element/dist/pinch-zoom.mjs';

import './icons.js';
import './top-bar.js';
import './left-panel.js';
import './canvas.js';
import './right-panel.js';
import './bottom-bar.js';
import './divider.js';

import './tree.js';
import './scene.js';
import './mesh.js';

import { connect } from 'pwa-helpers/connect-mixin.js';
// // This element is connected to the Redux store.
import { store } from '../redux/store.js';

@customElement('cad-app')
export class CadApp extends connect(store)(LitElement) {
  @property({ type: String }) name = 'cad-app';

  render() {
    return html`
      <style>
        :host {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

          --color-primary: #3636e7;
          --color-primary-light: #3636e726;
          --color-secondary: #ce8207;
          --color-secondary-light: #e39248bf;
          --color-accent: #cc6c7a;
          --color-accent-light: #ef8e9d99;
          --color-success: #1f8d57;
          --color-success-light: #1f8d5726;
          --color-danger: #fa3232;
          --color-danger-light: #fa323226;
          --color-warn: #cd9a1a;
          --color-warn-light: #cbab59ad;
          --color-outline: #6299f2;
          --color-fill: var(--color-primary-light);

          --font-small: 0.9rem;
          --font-medium: 1rem;
          --font-large: 1.1rem;
          --font-xlarge: 1.3rem;

          --text-color: #ececec;
          --background-color: #07162f;
          --font-size-small: 0.9rem;

          /* Partition */
          --cad-left-width: 192px;
          --cad-right-width: 192px;

          height: 100vh;
          position: relative;
          overflow-x: hidden;

          display: grid;
          grid-template-columns: minmax(0, min-content) minmax(0, min-content) minmax(0, min-content);
          grid-template-rows: 48px auto 96px;
          grid-template-areas:
            'top-bar top-bar top-bar'
            'left-panel canvas right-panel'
            'bottom-bar bottom-bar bottom-bar';
        }

        canvas {
          /* width: 100%;
          height: 100%; */
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
