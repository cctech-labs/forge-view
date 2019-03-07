
import { PolymerElement } from '../node_modules/@polymer/polymer/polymer-element.js';

import './forge-view.js';
import { setPassiveTouchGestures } from '../node_modules/@polymer/polymer/lib/utils/settings.js';
import { html } from '../node_modules/@polymer/polymer/lib/utils/html-tag.js';
// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

class MyApp extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;

        display: block;
      }
    </style>
    <forge-view></forge-view>
`;
  }

  static get is() { return 'my-app'; }
}

window.customElements.define(MyApp.is, MyApp);
