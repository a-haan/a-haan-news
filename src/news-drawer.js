/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '../../../@polymer/polymer/polymer-legacy.js';

import '../../../@polymer/app-layout/app-drawer/app-drawer.js';
import '../../../@polymer/iron-selector/iron-selector.js';
import { Polymer } from '../../../@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '../../../@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>

      app-drawer {
        --app-drawer-content-container: {
          background: var(--app-nav-background-color);
          color: var(--app-nav-text-color);
          background-image: url(../images/geo.png);
        };
        --app-drawer-width: 230px;
        z-index: 11;
      }

      app-drawer paper-icon-button {
        margin: 10px;
        --paper-icon-button-ink-color: var(--app-nav-text-color);
      }

      .drawer-list {
        margin: 0 20px;
      }

      .drawer-list a {
        display: block;
        padding: 0 24px;
        line-height: 48px;
        text-decoration: none;
        color: inherit;
      }

      .drawer-list a.iron-selected {
        background: var(--app-nav-selected-background-color);
      }

    </style>

    <app-drawer opened="{{drawerOpened}}" swipe-open="" tabindex="0">
      <paper-icon-button icon="close" on-click="_closeDrawer"></paper-icon-button>
      <iron-selector role="navigation" class="drawer-list" selected="[[category.name]]" attr-for-selected="name">
        <template is="dom-repeat" items="[[categories]]" as="category" initial-count="9">
          <a name="[[category.name]]" href="/list/[[category.name]]">[[category.title]]</a>
        </template>
      </iron-selector>
    </app-drawer>
`,

  is: 'news-drawer',

  properties: {

    categories: Array,

    category: Object,

    drawerOpened: {
      type: Boolean,
      notify: true
    }

  },

  _closeDrawer: function() {
    this.drawerOpened = false;
  }
});
