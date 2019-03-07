import { PolymerElement } from '../../@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures } from '../../@polymer/polymer/lib/utils/settings.js';
import { html } from '../../@polymer/polymer/lib/utils/html-tag.js';
// TODO_NOP: hacky hardcode specific for making it as a polymer component
window.LMV_RESOURCE_ROOT = "https://developer.api.autodesk.com/derivativeservice/v2/viewers/";
// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

class ForgeView extends PolymerElement {
  static get template() {
    return html`
        <link rel="stylesheet" href="https://developer.api.autodesk.com/derivativeservice/v2/viewers/style.min.css?v=4.1" type="text/css">

        <style>
            #viewerdiv {
                width: 100%;
                height: 100%;
                margin: 0;
                background-color: #F0F8FF;
            }
        </style>
        <div id="viewerdiv"></div>
`;
  }

  static get is() { return 'forge-view'; }
  constructor() {
      super();
  }
  connectedCallback() {
      super.connectedCallback();
      this._documentId = './models/shaver/0.svf';
      let vieweroptions = {
          env: "Local",
          useAdp: false,
      };
      this._viewerApp = new Autodesk.Viewing.Private.GuiViewer3D(this.$.viewerdiv);
      Autodesk.Viewing.Initializer(vieweroptions, () => {
          this._viewerApp.start(this._documentId,vieweroptions);
      });
  }
  static get properties() {
      return {
          _viewerApp: {
              type: Object
          },
          _documentId: {
              type: Object
          }
      };
  }
}

window.customElements.define(ForgeView.is, ForgeView);
