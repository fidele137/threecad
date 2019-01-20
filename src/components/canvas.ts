import { LitElement, html, property, customElement, query, PropertyValues } from 'lit-element';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { store, RootState } from '../redux/store.js';
import { PerspectiveCamera, Scene, WebGLRenderer, AmbientLight } from 'three';
// import { add, stop } from '../redux/actions/top-bar.js';
// import topBar from '../redux/reducers/top-bar.js';
// store.addReducers({ topBar });

@customElement('cad-canvas')
export class CadCanvas extends connect(store)(LitElement) {
  @property({ type: String }) name = 'cad-canvas';

  protected scene = new Scene();
  protected camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  protected renderer!: WebGLRenderer;

  protected light = new AmbientLight(0xffffff, 1);

  protected geometries: any;
  protected materials: any;
  protected textures: any;
  protected meshes: any;
  protected scripts: any;
  protected selectedObject: any;

  @query('canvas') canvas!: HTMLCanvasElement;

  firstUpdated(changedProperties: PropertyValues) {
    this.renderer = new WebGLRenderer({ canvas: this.canvas });
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }

        canvas {
          width: 100%;
          height: 100%;
        }
      </style>
      <canvas></canvas>
    `;
  }

  stateChanged(state: RootState) {
    console.log({ stateChanged: state });
    const meshes = state.topBar!.meshes;
    Object.keys(meshes).map(key => {
      const mesh = meshes[key];
      mesh.position.set(1 * Math.random(), 1 * Math.random(), 1 * Math.random());
      this.scene.add(mesh);
    });

    this.camera.position.z = 5;

    if (this.renderer) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
