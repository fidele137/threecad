import { LitElement, html, property, customElement, query, PropertyValues } from 'lit-element';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { store, RootState } from '../redux/store.js';
import { PerspectiveCamera, Scene, WebGLRenderer, AmbientLight, Mesh, Object3D } from 'three';
// import { add } from '../redux/actions/top-bar.js';
// import { add } from '../redux/actions/top-bar.js';
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

  protected currentObject!: Object3D;

  @query('canvas') canvas!: HTMLCanvasElement;

  constructor() {
    super();
    this.camera.position.z = 5;
  }

  firstUpdated() {
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
    const mesh = state.topBar!.mesh;
    if (this.currentObject != mesh) {
      this.currentObject = <Mesh>mesh;
      this.currentObject.position.set(2 * Math.random(), 2 * Math.random(), 2 * Math.random());
      this.scene.add(mesh);
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.rotate.bind(this));
    }
  }

  rotate() {
    // this.currentObject.rotation.x += 0.01;
    // this.currentObject.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.rotate.bind(this));
  }
}
