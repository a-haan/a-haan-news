/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/* <script>
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
</script> */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import './news-icons.js';

import '../../../@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import { Polymer } from '../../../@polymer/polymer/lib/legacy/polymer-fn.js';
import { scroll } from '../../../@polymer/app-layout/helpers/helpers.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="news-footer">
  

  
  <template>
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
      }
      a {
        color: #999;
        text-decoration: none;
      }
      .footer-media-links {
        background: #AA00FF;  /* a more sedated version of pink-a400 */
        padding: 20px;
      }
      .footer-media-links a {
        color: black;
        display: inline-block;
        padding: 3px 20px;
        font-size: 13px;
        font-weight: 500;
        text-shadow: none;
        text-decoration: none;
        text-align: center;
        min-width: 100px;
        white-space: nowrap;
      }
      paper-icon-button {
        height: 50px;
        width: 50px;
      }
      .footer-media-links a span {
        line-height: 24px;
        margin-left: 5px;
      }
      .footer-links {
        background: #263238;  /* blue-grey-900 */
        padding: 30px 10px;
      }
      .footer-links > * {
        margin: 10px;

            }
      .footer-links .title {
        font-family: 'Roboto Slab', 'Roboto', 'Noto', sans-serif;
        color: white;
        border-top: 1px solid #707375;
        padding-top: 10px;
        font-size: 13px;
      }
      .footer-links a {
        text-decoration: none;
        color: #979797;
        display: block;
        font-size: 11px;
        line-height: 20px;
      }
      .copyright {
        background: black;
        color: white;
        padding: 10px;
      }
      .copyright div {
        font-size: 11px;
      }
      .copyright img {
        padding-left: 10px;
        height: 20px;
      }
      .copyright * {
        vertical-align: middle;
      }
      @media (max-width: 767px) {
        .footer-media-links a {
          min-width: 24px;
          padding-left: 15px;
          padding-right: 15px;
        }
        .footer-media-links a span{
          display: none;
        }
      }
      @media (max-width: 479px) {
        .footer-links.layout.horizontal {
          flex-direction: column;
          padding: 20px 10px;
        }
        .footer-links > * {
          flex: 0 0 auto;
        }
        .copyright .additional-text {
          display: none;
        }
      }
    </style>

    <footer>
      <section class="footer-media-links">
        <div class="layout horizontal center center-justified">
          <a href="https://plus.google.com/u/0/+AliAhmedHussan" title="Follow A-hAAn on Google+" aria-label="Follow A-hAAn on Google+">
            <paper-icon-button icon="gplus"></paper-icon-button>
            <span>A-hAAn</span></a>
          <a href="https://twitter.com/AhAAn20" title="Follow @ahaan20 on Twitter" aria-label="Follow ahaan22 on Twitter">
          <paper-icon-button icon="twitter" aria-label="Share on social networks"></paper-icon-button>
            <span>@ahaan20</span>
          </a>
          <a href="https://www.youtube.com/user/ahaan22/" title="Follow @ahaan22 on YouTube" aria-label="Follow @ahaan22 on YouTube">
          <paper-icon-button icon="youtube" aria-label="Follow @ahaan22 on YouTube"></paper-icon-button>
            <span>A-hAAn</span>
          </a>
        </div>
      </section>

      <section class="footer-links layout horizontal justified">

        <div class="flex">
          <div class="title"></div>
          <a href="mailto:website@ahaan.co.uk?Subject=Yo%20A-hAAn" target="_top"><paper-icon-button icon="mail" aria-label="Send by mail"></paper-icon-button>Get in Contact by Email</a>
        </div>

      </section>

      <div class="copyright layout horizontal">
        <div class="flex">
          © 2018 A-hAAn Authors.
          <span class="additional-text">Inc. All Rights Reserved<span>
        </span></span></div>
        <a id="myBtn" href="#" on-click="_smoothScrollToTop">
          Back to Top<img src="/images/A-hAAn128.png">
        </a>
      </div>
    </footer>
  </template>
<!-- <script>
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
&lt;/script> -->
  
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
  is: 'news-footer',
  _smoothScrollToTop: function(event) {
    event.preventDefault();
    scroll({ behavior: 'smooth' });
    // Kick focus back to the page
    // User will start from the top of the document again
    event.target.blur();
  }
});
