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

import { html } from '../../../@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '../../../@polymer/polymer/polymer-element.js';
class NewsSideList extends PolymerElement {
  static get template() {
    return html`
    <style>

      :host {
        display: block;
      }

      h3 {
        @apply(--app-sub-section-headline);
      }

      a {
        text-decoration: none;
        color: inherit;
        display: block;
        padding: 5px;
      }

      .category {
        display: none;
      }

      .time-ago {
        font-size: 12px;
        font-weight: bold;
        white-space: nowrap;
      }

      :host([featured]) > a {
        padding-bottom: 24px;
        border-bottom: var(--app-border-style);
      }

      :host([featured]) > a:last-of-type {
        border-bottom: none;
      }

      :host([featured]) .category {
        display: inline-block;
        padding: 6px 20px 7px 20px;
        font-weight: bold;
        font-size: 13px;
        color: black;
      }

      :host([featured]) .headline {
        display: block;
        margin: 20px 0;
      }

      :host([featured]) .time-ago {
        display: block;
      }

    </style>

    <h3>
    <slot></slot>
  </h3>
  <dom-repeat items="[[items]]">
    <template>
      <a href\$="[[item.href]]">
        <div class="category">[[item.category]]</div>
        <span class="headline">[[item.headline]]</span>
        <span class="time-ago">[[item.timeAgo]]</span>
      </a>
    </template>
  </dom-repeat>
`;
  }

  static get is() { return 'news-side-list'; }
  static get properties() { return {
    items: Array
  }}
}
customElements.define(NewsSideList.is, NewsSideList);
