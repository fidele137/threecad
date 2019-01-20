import { LitElement, html, property, customElement, TemplateResult } from 'lit-element';

@customElement('cad-tree')
export class CadTree extends LitElement {
  @property({ type: String }) name = 'cad-tree';
  @property({ type: Object }) data = {
    Applications: {
      Calendar: 'app',
      Chrome: 'app',
      Webstorm: 'app'
    },
    Documents: {
      angular: {
        src: {
          compiler: 'ts',
          core: 'ts'
        }
      },
      material2: {
        src: {
          button: 'ts',
          checkbox: 'ts',
          input: 'ts'
        }
      }
    },
    Downloads: {
      October: 'pdf',
      November: 'pdf',
      Tutorial: 'html'
    },
    Pictures: {
      'Photo Booth Library': {
        Contents: 'dir',
        Pictures: 'dir'
      },
      Sun: 'png',
      Woods: 'jpg'
    }
  };

  treeTemplate(data: any, level: number = 0): TemplateResult {
    let result: TemplateResult = html``;
    this._keys(data).map(key => {
      const node = data[key];
      if (typeof node === 'object' && (level === 0 || node._visible)) {
        result = html`
          ${result}
          <div class="node level-${level}" role="group" aria-expanded="${!!node._expanded}">
            <button @click="${() => this._nodeClicked(node)}">
              <iron-icon icon="${!!node._expanded ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}"></iron-icon>
            </button>
            <span>${key}</span>
          </div>
          ${this.treeTemplate(node, level + 1)}
        `;
      } else {
        if (level === 0 || data._expanded) {
          result = html`
            ${result}
            <div class="node level-${level + 1}" role="treeitem"><span>${key}</span></div>
          `;
        }
      }
    });
    return result;
  }

  private _nodeClicked(node: any) {
    node._expanded = !node._expanded;
    this._keys(node).map(key => {
      const childNode = node[key];
      if (typeof childNode === 'object') {
        childNode._visible = !childNode._visible;
      }
    });
    this.requestUpdate();
  }

  private _keys(node: any): any[] {
    return Object.keys(node).filter(key => key !== '_expanded' && key !== '_visible');
  }

  render() {
    return html`
      <style>
        :host {
          display: inline-block;
          --padding-base: 1.5rem;
        }

        :host[hidden] {
          display: none;
        }

        .node {
          display: flex;
        }

        .level-1 {
          padding-left: var(--padding-base);
        }
        .level-2 {
          padding-left: calc(2 * var(--padding-base));
        }
        .level-3 {
          padding-left: calc(3 * var(--padding-base));
        }
        .level-4 {
          padding-left: calc(4 * var(--padding-base));
        }
        .level-5 {
          padding-left: calc(5 * var(--padding-base));
        }
        .level-6 {
          padding-left: calc(6 * var(--padding-base));
        }

        button {
          border: none;
          padding: 0;
          background: none;
          cursor: pointer;
        }
      </style>
      ${this.treeTemplate(this.data)}
    `;
  }
}
