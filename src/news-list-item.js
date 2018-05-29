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

import '../../../@polymer/iron-flex-layout/iron-flex-layout.js';
import './news-img.js';
import { html } from '../../../@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '../../../@polymer/polymer/polymer-element.js';
class NewsListItem extends PolymerElement {
  static get template() {
    return html`
    <style>

      :host {
        display: block;
      }

      a {
        display: block;
        position: relative;
        text-decoration: none;
        color: #212121;
        overflow: hidden;
        background: #FFFFFF;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        border-radius:5px;
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
      }

      a:hover {
        display: block;
        position: relative;
        text-decoration: none;
        color: #212121;
        overflow: hidden;
        background: #FFFFFF;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        -moz-transform: scale(50px, 50px);
        -webkit-transform: scale(50px, 50px);
        transform: scale(50px, 50px);
}
      news-img {
        height: 150px;
      }

      h2 {
        margin: 18px 5px 5px 5px;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        min-height: 55px;
        max-height: 60px;
      }

      .category {
        padding: 6px 20px 7px;
        border: solid;
        display: block;
        font-weight: bold;
        font-size: 15px;
        background: black;
        color: var(--app-cover-text-color);
      }

      .category[hidden] {
        visibility: hidden;
        height: 0px;
        margin-top: 0px;
        padding: 0px;
      }

      .details {
        @apply(--layout-horizontal);
        font-size: 11px;
        font-weight: bold;
        padding: 10px;
        border-top: 1px solid #CCC
      }

      .time-ago {
        white-space: nowrap;
      }

      .author {
        padding-left: 35px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* mobile */
      @media (max-width: 767px) {
            .details {
          font-size: 11px;
          font-weight: bold;
          padding-bottom: 5px;
        }
        .category {
          display: none;
        }
          h2 {
            margin: 2px 0;
            font-weight: 400;
            font-size: 15px;
            line-height: 28px;
            padding: 10px;
            min-height: 15px;
            max-height: 25px;
            overflow: hidden;

          }

      }

      /* desktop */
      @media (min-width: 768px) {
        :host([horizontal]) {
          margin-bottom: 24px;
        }
        h2 {
          margin: 5px 0;
          font-weight: 400;
          font-size: 18px;
          line-height: 28px;
          padding: 10px;
          min-height: 60px;
          max-height: 70px;
          overflow: hidden;
        }
        .category {
          display: none;
        }
      }

      /* desktop large */
      @media (min-width: 1310px) {
        :host([horizontal]) a {
          @apply(--layout-horizontal);
        }

        :host([horizontal]) news-img {
          min-width: 150px;
          margin-right: 5px;
        }

        :host([horizontal]) .category {
          display: none;
        }
      }

    </style>


    <a href\$="[[item.href]]">
      <news-img src="[[item.imageUrl]]" alt="[[item.headline]]"></news-img>
      <div class="headline">
        <div class="category" hidden\$="[[!item.category]]">[[item.category]]</div>
        <h2>[[item.headline]]</h2>
        <div class="details">
          <div class="time-ago">[[item.timeAgo]]</div>
          <div class="author">[[item.author]]</div>
        </div>
      </div>
    </a>
`;
  }

  static get is() { return 'news-list-item'; }
  static get properties() { return {
    item: {
      type: Object
    }
  }}
}
customElements.define(NewsListItem.is, NewsListItem);
