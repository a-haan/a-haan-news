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
import '../../../google-youtube/google-youtube.js';
import './news-img.js';
import { html } from '../../../@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '../../../@polymer/polymer/polymer-element.js';
class NewsListFeaturedItem extends PolymerElement {
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
        color: inherit;
        overflow: hidden;
        background-color: black;
        color:white;
        z-index:1;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
      }
      a:hover  {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
      }
      .img-container {
        position: relative;
      }

      h2 {
        margin: 18px 0;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        padding: 5px;
      }

      .category {
        padding: 20px 20px 20px 20px;
        display: inline-block;
        font-weight: bold;
        font-size: 30px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }

      .category[hidden] {
        display: none;
      }

      .details {
        @apply(--layout-horizontal);
        font-size: 11px;
        font-weight: bold;
      }

      .time-ago {
        white-space: nowrap;
        font-size: 15px;
      }

      .author {
        padding-left: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
        font-size: 15px;
        color:var(--app-nav-background-color);
            }
        .authorby {
          padding-left: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: bold;
          font-size: 15px;
          color:white;

            }
            .border {
          width: auto;
          border-bottom: 80px solid transparent;
          border-top: 6px solid transparent;
          border-right: 6px solid transparent;
          border-left: 6px solid transparent;
          border-image: linear-gradient(to right, #d8de33 , #ef017c);
          border-image-slice: 1;
          background-size:10px 100%;
          background-position:0 0, 100% 0;
          background-repeat:no-repeat;
          z-index: 0;
          }
          .bordervid {
          width: auto;
          border-bottom: 1px solid transparent;
          border-top: 20px solid transparent;
          border-right: 0px solid transparent;
          border-left: 0px solid transparent;
          border-image: linear-gradient(to right, #d8de33 , #ef017c);
          border-image-slice: 1;
          background-size:10px 100%;
          background-position:0 0, 100% 0;
          background-repeat:no-repeat;
          z-index: 0;
        }
          .border:hover {
          }
          .floatcontainer {
            float:left;
            position:relative;
            left:50%;
            /*overflow:hidden;*/
          }
          .fixfloatcontainer {
            float:left;
            position:relative;
            left:-50%;
          }
          .bordertext {
            font-size: 45px;
            font-weight:bold;
            color: black;

            background: none;
            box-shadow:none;
            position: relative;
            float: left;
            margin: 10px;
          }
          .bordertext:hover {
            box-shadow:none;

          }
            .bordervideo {
              float:left;
              text-align: center;
              margin-left: auto;
              margin-right: auto;
              color: black;
              left: 27%;
              position: relative;
              list-style: none;
              background: none;
              box-shadow:none;
            }
          .googleyoutube {
            display: none;
          }
      p {
        margin: 0;
        line-height: 26px;
        font-size: 16px;
      }

      /* mobile and desktop small */
      @media (max-width: 1309px) {
        a {
          height: 99vh;
          background: black;
          color: var(--app-cover-text-color);
        }
        .category {
          padding: 20px 20px 20px 20px;
          color: white;
          display: inline-block;
          font-weight: bold;
          font-size: 30px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .bordertext {
          display: none;

        }
        google-youtube {
          width: calc(100% - 0px);
        }
        .border {
          width: auto;
          border-bottom: 6px solid transparent;
          border-top: 6px solid transparent;
          border-right: 6px solid transparent;
          border-left: 6px solid transparent;
          border-image: linear-gradient(to right, #d8de33 , #ef017c);
          border-image-slice: 1;
          background-size:10px 100%;
          background-position:0 0, 100% 0;
          background-repeat:no-repeat;
          z-index: 0;
        }
        .bordervid {
        border-bottom: 1px solid transparent;
        border-top: 20px solid transparent;
        border-right: 0px solid transparent;
        border-left: 0px solid transparent;
        border-image: linear-gradient(to right, #d8de33 , #ef017c);
        border-image-slice: 1;
        background-size:10px 100%;
        background-position:0 0, 100% 0;
        background-repeat:no-repeat;
        z-index: 0;
      }
        :host-context(.fixed-viewport-height) a {
          height: var(--viewport-height);
        }

        news-img {
          min-height: 60vh;
        }

        :host-context(.fixed-viewport-height) news-img {
        min-height: calc(var(--viewport-height) * 0.6);
        }
        .scrim {
          @apply --layout-fit;
          background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.25) 25%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,1) 100%);
        }

        .headline {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 24px;
        }

        h2 {
          margin: 24px 0;
          font-size: 6vh;
          line-height: 7vh;
          max-height: calc(7vh * 7);
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
        }

        :host-context(.fixed-viewport-height) h2 {
          font-size: calc(var(--viewport-height) * 0.06);
          line-height: calc(var(--viewport-height) * 0.07);
          max-height: calc(var(--viewport-height) * 0.49);
        }

        .category {
          border: var(--app-transparent-border-style);
        }

        .details {
          height: 19px;
          border-top: var(--app-transparent-border-style);
          padding-top: 29px;
        }

        p {
          display: none;
        }
      }

      /* desktop small */
      @media (min-width: 768px) and (max-width: 1309px) {
        a {
          height: 50vmax;
        }
      }
      /* mobile */
      @media (max-width: 767px) {
      .ad-container {
        display: none;
      }
    }
    /* desktop small 970 */
    @media (max-width: 1027px) {
    .ad-container {
      display: none;
    }
  }

      /* desktop large */
      @media (min-width: 1310px) {
        a {
          @apply(--layout-horizontal);
        }

        h2 {
          font-size: 38px;
          line-height: 48px;
        }

        news-img {
          @apply(--layout-fit);
        }

        .img-container {
          width: 550px;
          min-width: 572px;
          min-height: 440px;
          margin-right: 24px;
        }

        .details {
          padding: 24px 0;
          border-top: var(--app-border-style);

        }
      }

    </style>
    <center><div class="ad-container"><news-gpt-ad id="adslot4article" ad-unit-path="/21615022194/smart" ad-width="970" ad-height="250" text-align="center"></news-gpt-ad><br><br></div></center>

<div class="border">
    <a href\$="[[item.href]]">
      <div class="img-container">
        <news-img alt="[[item.headline]]" src="[[item.imageUrl]]" placeholder-src="[[item.placeholder]]"></news-img>
        <div class="scrim"></div>
      </div>
      <div class="headline">
        <div class="category" hidden\$="[[!item.category]]">[[item.category]]</div>
        <h2>[[item.headline]]</h2>
        <div class="details">
          <div class="time-ago">[[item.timeAgo]]</div>
          <div class="authorby">by</div><div class="author">[[item.author]]</div>
        </div>
        <p>[[item.summary]]</p>
        <br>
      </div>
    </a>
    <div class="bordervid"><center><google-youtube class="[[item.vidShow]]" playsupported="{{playSupported}}" video-id="[[item.vidSrc]]" state="{{state}}" width="auto" height="500px" currenttime="{{currentTime}}" currenttimeformatted="{{currentTimeFormatted}}" duration="{{duration}}" durationformatted="{{durationFormatted}}" fractionloaded="{{fractionLoaded}}" volume="{{volume}}" playbackrate="{{playbackRate}}" playbackquality="{{playbackQuality}}" on-google-youtube-error="handleYouTubeError"></google-youtube></center></div>

    <div class="floatcontainer"><div class="fixfloatcontainer"><a class="bordertext">[[item.vidTxt]]<br></a></div></div>
      <div><a class="bordervideo"></a></div>
    </div>
`;
  }

  static get is() { return 'news-list-featured-item'; }
  static get properties() { return {
    item: Object
  }}
}
customElements.define(NewsListFeaturedItem.is, NewsListFeaturedItem);
