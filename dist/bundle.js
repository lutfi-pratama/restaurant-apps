!function(n){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(d&&d(e);p.length;)p.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],r=!0,s=1;s<t.length;s++){var c=t[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),n=o(o.s=t[0]))}return n}var r={},i={2:0},a=[];function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)o.d(t,r,function(e){return n[e]}.bind(null,r));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;a.push([12,1,0]),t()}([,,,,,,,function(n,e,t){var r=t(2),i=t(8);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},function(n,e,t){(e=t(3)(!1)).push([n.i,'* {\n  margin: 0;\n  padding: 0;\n  font-family: "Poppins", sans-serif;\n}\n\nmain {\n  padding: 30px 0;\n}\n\n.skip-to-content {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 999;\n  transform: translate(-50%, -100%);\n  display: block;\n  padding: 15px 16px;\n  background-color: white;\n  color: black;\n  font-weight: 600;\n  text-decoration: none;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  transition: transform 0.3s;\n}\n\n.skip-to-content:focus {\n  text-decoration: underline;\n  transform: translate(-50%, 0);\n  transition: transform 0.3s;\n}\n\n.showing-mobile-menu {\n  transform: translateX(0);\n  transition: transform 0.3s;\n}\n\n/* \n  APP BAR \n*/\n\n.app-bar {\n  padding: 8px 16px;\n  background-color: white;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 10px;\n  position: sticky;\n  top: 0;\n  z-index: 99;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n  font-weight: 600;\n  text-transform: lowercase;\n}\n\n.app-bar .app-bar__menu {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__menu button {\n  background-color: transparent;\n  border: none;\n  font-size: 18px;\n  padding: 18px;\n  cursor: pointer;\n}\n\n.app-bar .app-bar__brand {\n  display: flex;\n  align-items: center;\n}\n\n.app-bar .app-bar__brand h1 {\n  color: #db0000;\n  text-transform: uppercase;\n  font-size: 22px;\n  user-select: none;\n}\n\n.app-bar .app-bar__navigation {\n  position: absolute;\n  top: 50px;\n  left: -180px;\n  width: 150px;\n  transition: all 0.3s;\n  padding: 5px;\n  background-color: white;\n  overflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n  left: 0;\n}\n\n.app-bar .app-bar__navigation ul li a {\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  margin-bottom: 5px;\n  width: 100%;\n  font-size: 1rem;\n  padding: 15px;\n}\n\n.app-bar .app-bar__navigation ul li::after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: "";\n  display: block;\n  height: 2px;\n  left: 50%;\n  background: rgb(230, 85, 85);\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0;\n}\n.app-bar .app-bar__navigation ul li:hover::after {\n  width: 100%;\n  left: 0;\n}\n\n.jumbotron {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 90vh;\n  width: 100%;\n  margin-bottom: 40px;\n  overflow: hidden;\n}\n\n.jumbotron picture {\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  align-self: center;\n  filter: blur(0.7px) brightness(20%) grayscale(30%);\n}\n\n.jumbotron picture img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.jumbotron > div {\n  padding: 0 20px;\n}\n\n.jumbotron div > * {\n  color: white;\n}\n\n.jumbotron > div h1 {\n  text-transform: lowercase;\n  font-size: 3.5rem;\n  text-align: center;\n}\n\n.subtitle {\n  font-weight: 300;\n}\n\n.jumbotron > div h2 {\n  border-top: 1px solid white;\n  padding-top: 5px;\n  font-weight: 300;\n  font-size: 0.8rem;\n  text-align: center;\n}\n\n/*\n   Content\n*/\n\nimg {\n  display: block;\n}\n\n#top-restaurants {\n  width: 100%;\n  margin: 0 auto;\n}\n\n#top-restaurants > h2 {\n  font-size: 2rem;\n}\n\n#top-restaurants h3 {\n  font-size: 0.9rem;\n  padding: 0 20px;\n}\n\n#top-restaurants > h2,\n#top-restaurants > h3 {\n  text-align: center;\n}\n\n/* #restaurant {\n  display: grid;\n  margin: 30px auto;\n  grid-template-columns: 1fr;\n  row-gap: 40px;\n} */\n\n/* .cards {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  margin: 1em;\n}\n\n.card__item {\n  border: 2px solid gray;\n  border-radius: 0 0 20px 20px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  margin: 5px;\n  background-color: white;\n  cursor: pointer;\n}\n\n.card__item:hover {\n  box-shadow: 0 6px 10px 0 rgb(15, 64, 129);\n}\n\n.card__item > a {\n  text-decoration: none;\n  color: unset;\n}\n\n.card__item > a:active {\n  color: unset;\n}\n\n.card__image {\n  position: relative;\n}\n\n.card__image img {\n  width: 100%;\n  max-height: 160px;\n  object-fit: cover;\n}\n\n.card__image span {\n  position: absolute;\n  top: 5px;\n  padding: 5px;\n  min-width: 44px;\n  border-radius: 25px;\n}\n\n.card__imageLeft {\n  background-color: rgb(255, 252, 82);\n  left: 5px;\n}\n\n.card__imageRight {\n  right: 5px;\n  background-color: var(--pink);\n  color: #000000;\n  font-weight: 700;\n}\n\n.card__content {\n  padding: 0 1em 1em 1em;\n}\n\n.card__content > h3 {\n  padding: 0.5em;\n}\n\n.card__content > p {\n  text-align: justify;\n  max-height: 160px;\n  overflow: hidden;\n} */\n\n\n#top-restaurants__ul {\n  display: grid;\n  margin: 30px auto;\n  grid-template-columns: 1fr;\n  row-gap: 40px;\n}\n\n.restaurant-item {\n  display: block;\n  width: 90%;\n  max-width: 400px;\n  overflow: hidden;\n  border-radius: 8px; \n  list-style-type: none;\n  padding-bottom: 10px;\n  justify-self: center;\n  transition: all 0.3s;\n}\n\n.restaurant-item__name {\n  text-decoration: none;\n  display: block;\n}\n\n.restaurant-item__name h2 {\n  display: inline-block;\n  position: relative;\n  color: black;\n}\n\n.restaurant-item header {\n  margin-bottom: 10px;\n}\n\n.restaurant-item header,\n.restaurant-item .restaurant-description {\n  padding: 0 10px;\n}\n\n.restaurant-item:hover {\n  box-shadow: 0 6px 12px #dbdbdb;\n  transition: all 0.3s;\n}\n\n.restaurant-item header h2 {\n  margin: 10px 0 5px;\n}\n\n.restaurant-description {\n  font-size: 0.8rem;\n  line-height: 1.6em;\n  letter-spacing: 0.9px;\n  color: #333;\n}\n\n.restaurant-item__image {\n  height: 150px;\n  overflow: hidden;\n}\n\n.restaurant-item__image img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.restaurant-item__metadata {\n  display: inline-flex;\n  align-items: center;\n  margin-right: 10px;\n  color: #333;\n}\n\n.restaurant-item__metadata > p {\n  font-size: 0.9rem;\n} \n\nion-icon {\n  margin-right: 3px;\n}\n\n\n/* \n  Detailed Page\n*/\n\n.container .center{\n  text-align: center;\n  padding: 20px;\n}\n\n.center h2{\n  font-size: 2.5rem;\n}\n\n.detail {\n  display: grid;\n  grid-template-areas: "detailHeader detailHeader detailInfo" "detailOverview detailOverview detailOverview" "detailReviews detailReviews detailReviews";\n  \n  font-size: 1rem;\n  margin-top: 30px;\n}\n\n.detail > div {\n  margin: auto;\n}\n\n.detail_header {\n  grid-area: detailHeader;\n}\n\n.detail_poster {\n  width: 90%;\n  margin: auto;\n}\n\n.detail_title {\n  color: #0d7583;\n  text-align: center;\n  padding: 30px;\n}\n\n.detail_info {\n  grid-area: detailInfo;\n  text-align: left;\n  width: 100%;\n  height: 100%;\n  padding-bottom: 50px;\n}\n\n.detail_info > div {\n  margin-top: 0.5em;\n}\n\n.detail_info > div > ul {\n  padding: 5px;\n  list-style-type: none;\n}\n\n.detail_overview {\n  border-top: #0d7583 dashed 2px;\n  padding: 35px;\n  grid-area: detailOverview;\n  text-align: justify;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.detail_reviews {\n  grid-area: detailReviews;\n  padding: 35px;\n  text-align: left;\n  margin-left: 0 !important;\n  padding-bottom: 50px;\n}\n\n.detail_reviews h3{\n  margin-bottom: 30px;\n}\n\n.info_categories > h4 {\n  margin: 0.5em 0;\n}\n\n.info_categories > span {\n  padding: 5px 15px;\n  color: white;\n  background-color: #db0000;\n  border-radius: 20px;\n  margin-right: 5px;\n}\n\n\n/*\n   Like\n*/\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #db0000;\n  color: white;\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#no_result {\n  display: block !important;\n  margin: 40vh 50px;\n  text-align: center;\n}\n\n/*\n  Add Review\n*/\n\n.add-reviews > .add-review_title {\n  font-size: 1.5rem;\n  padding: 10px;\n  text-align: center;\n}\n\n.review_form {\n  text-align: center;\n  background-color: #3b444b;\n  color: white;\n  padding: 30px;\n}\n\n.input_form {\n  padding-bottom: 20px;\n}\n\ninput#reviewerName {\n  width: 70%;\n  padding: 5px;\n}\ntextarea#reviewContent {\n  width: 70%;\n  padding: 5px;\n}\n\nbutton#submit {\n  padding: 10px 30px;\n  border-radius: 20px;\n  background-color: #ddd;\n  border: none;\n  font-size: 1rem;\n  transition: 0.3s;\n  cursor: pointer;\n  font-weight: 600;\n}\n\nbutton#submit:hover {\n  background-color: rgb(230, 85, 85);\n  color: white;\n}\n\n/*\n  Footer\n*/\n\nfooter {\n  font-size: 0.9rem;\n  width: 100%;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n/* \n  Loading \n*/\n\n#loading {\n  width: 2rem;\n  height: 2rem;\n  border: 5px solid #f3f3f3;\n  border-top: 6px solid #9c41f2;\n  border-radius: 100%;\n  margin: auto;\n  visibility: hidden;\n  animation: spin 1s infinite linear;\n}\n\n#loading.display {\n  visibility: visible;\n}\n\n@keyframes spin {\n  from {\n      transform: rotate(0deg);\n  }\n  to {\n      transform: rotate(360deg);\n  }\n}\n\n\n',""]),n.exports=e},function(n,e,t){var r=t(2),i=t(10);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);n.exports=i.locals||{}},function(n,e,t){(e=t(3)(!1)).push([n.i,'@media screen and (max-width: 500px) {\r\n    .detail {\r\n        grid-template-areas: "detailHeader" "detailInfo" "detailOverview" "detailReviews";\r\n        margin-top: 30px;\r\n    }\r\n\r\n    .detail_info {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    \r\n    /* Jumbotron */\r\n    .jumbotron > div h1 {\r\n      font-size: 4rem;\r\n    }\r\n    \r\n    .jumbotron > div h2 {\r\n      font-size: 0.9rem;\r\n    }\r\n\r\n    /* Home */\r\n    #top-restaurants {\r\n      width: 90%;\r\n    }\r\n  \r\n    #top-restaurants__ul {\r\n      grid-template-columns: repeat(2, 1fr);\r\n      row-gap: 50px;\r\n    }\r\n  \r\n    #top-restaurants > h2 {\r\n      font-size: 2.2rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n        grid-template-columns: 1fr auto;\r\n        padding: 8px 32px;\r\n    }\r\n   \r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 1.5em;\r\n    }\r\n   \r\n    .app-bar .app-bar__menu {\r\n        display: none;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation {\r\n        position: static;\r\n        width: 100%;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li {\r\n        display: inline-block;\r\n    }\r\n    \r\n    .app-bar .app-bar__navigation ul li a {\r\n        display: inline-block;\r\n        width: 120px;\r\n        text-align: center;\r\n        margin: 0;\r\n    }\r\n}\r\n   \r\n@media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 2em;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .app-bar .app-bar__navigation ul li a{\r\n        width: 90%;\r\n        font-size: 0.9em;\r\n    }\r\n\r\n    /* Detail */\r\n    .center h2{\r\n        font-size: 2.2rem;\r\n    }\r\n\r\n    .detail{\r\n        font-size: 0.8rem;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n\r\n}\r\n\r\n@media only screen and (min-width: 956px) {\r\n#top-restaurants__ul {\r\n    grid-template-columns: repeat(3, 1fr);\r\n    row-gap: 70px;\r\n}\r\n\r\n#top-restaurants > h2 {\r\n    font-size: 2.5rem;\r\n}\r\n\r\n.jumbotron > div h1 {\r\n    font-size: 5rem;\r\n}\r\n\r\n.jumbotron > div h2 {\r\n    font-size: 1rem;\r\n}\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n\r\n}',""]),n.exports=e},,function(n,e,t){"use strict";t.r(e);t(6),t(7),t(9);var r={init:function(n){var e=this,t=n.button,r=n.drawer,i=n.content;t.addEventListener("click",(function(n){e._toggleDrawer(n,r)})),i.addEventListener("click",(function(n){e._closeDrawer(n,r)}))},_toggleDrawer:function(n,e){n.stopPropagation(),e.classList.toggle("open")},_closeDrawer:function(n,e){n.stopPropagation(),e.classList.remove("open")}},i={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},a={KEY:"12345",BASE_URL:"https://restaurant-api.dicoding.dev",DATABASE_NAME:"feed-app-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurants",CACHE_NAME:(new Date).toISOString(),WEB_SOCKET_SERVER:"wss://movies-feed.dicoding.dev"},o={LIST:"".concat(a.BASE_URL,"/list"),DETAIL:function(n){return"".concat(a.BASE_URL,"/detail/").concat(n)},IMG:{Small:"".concat(a.BASE_URL,"/images/small/"),Medium:"".concat(a.BASE_URL,"/images/medium/"),Large:"".concat(a.BASE_URL,"/images/large/")},POST_REVIEW:"".concat(a.BASE_URL,"/review")};function s(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){s(a,r,i,o,c,"next",n)}function c(n){s(a,r,i,o,c,"throw",n)}o(void 0)}))}}function u(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var d=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,r,i,s,d;return e=n,t=null,r=[{key:"List",value:(d=c(regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(o.LIST);case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.restaurants);case 7:case"end":return n.stop()}}),n)}))),function(){return d.apply(this,arguments)})},{key:"Details",value:(s=c(regeneratorRuntime.mark((function n(e){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(o.DETAIL(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)}))),function(n){return s.apply(this,arguments)})},{key:"addReview",value:(i=c(regeneratorRuntime.mark((function n(e){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(o.POST_REVIEW,{method:"POST",body:JSON.stringify(e),headers:{"X-Auth-Token":a.KEY,"Content-Type":"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)}))),function(n){return i.apply(this,arguments)})}],t&&u(e.prototype,t),r&&u(e,r),n}(),l=(t(1),t(11),function(n){return"\n  <li id=".concat(n.id,' class="restaurant-item" tebindex="0">\n    <div class="restaurant-item__image">\n        <img class="lazyload" src="').concat(o.IMG.Small).concat(n.pictureId,'" alt="resto ').concat(n.name,'" aria-hidden="true"/>\n    </div>\n\n    <header>\n        <a href="',"/#/detail/".concat(n.id),'" class="restaurant-item__name" aria-label="Restaurant name: ').concat(n.name,'."> \n          <h2>').concat(n.name,'</h2> \n        </a>\n\n        <div class="restaurant-item__metadata restaurant-item__location" aria-label="Location: ').concat(n.city,'.">\n            <ion-icon name="pin"></ion-icon> <p>').concat(n.city,'</p>\n        </div>\n\n        <div class="restaurant-item__metadata restaurant-item__rating" aria-label="Rating: ').concat(n.rating,' out of 5.">\n            <ion-icon name="star"></ion-icon> <p>').concat(n.rating,'<p/>\n        </div>\n    </header>\n\n    <p class="restaurant-description" aria-label="Description: ').concat(n.description,'">\n        ',"".concat(n.description.substr(0,200)," ... "),"\n    </p>\n    \n  </li>")}),p=function(n){var e="";return n.forEach((function(n){e+="\n      <p>Oleh ".concat(n.name," : </p>\n      <p>").concat(n.review,"</p>\n      <p>Pada ").concat(n.date,"</p>\n      <br>\n    ")})),e},m=function(n){for(var e="",t=0;t<n;t+=1)e+='\n      <li class="restaurant-item">\n        <div class="restaurant-item__image">\n            <img class="lazyload" src="./placeholder.svg" alt="skeleton-img"/>\n        </div>\n\n        <header>\n            <a class="restaurant-item__name"> \n              <h2>Lorem ipsum dolor sit amet.</h2> \n            </a>\n        </header>\n\n        <p class="restaurant-description">\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt voluptatum veniam amet reprehenderit eligendi doloremque et maxime? Incidunt, nulla assumenda.\n        </p>\n      \n      </li>\n  ';return e},f={displayLoading:function(n){n.classList.add("display"),setTimeout((function(){n.classList.remove("display")}),1500)},hideLoading:function(n){n.classList.remove("display")}};function v(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function h(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){v(a,r,i,o,s,"next",n)}function s(n){v(a,r,i,o,s,"throw",n)}o(void 0)}))}}var g={render:function(){return h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n    <section id="top-restaurants">\n      <h2 tabindex="0">Top Restaurants</h2>\n      <h3 class="subtitle">These are some of the best restaurants we have</h3>\n      <div id="loading"></div>\n      <ul id="top-restaurants__ul">\n        '.concat(m(20),"\n      </ul>\n    </section>\n    "));case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return h(regeneratorRuntime.mark((function n(){var e,t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector("#loading"),f.displayLoading(e),n.next=4,d.List();case 4:t=n.sent,f.hideLoading(e),r=document.getElementById("top-restaurants__ul"),t&&t.length>0&&(r.innerHTML="",t.forEach((function(n){r.innerHTML+=l(n)})));case 8:case"end":return n.stop()}}),n)})))()}},b=t(5);function x(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function w(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){x(a,r,i,o,s,"next",n)}function s(n){x(a,r,i,o,s,"throw",n)}o(void 0)}))}}var _=a.DATABASE_NAME,y=a.DATABASE_VERSION,k=a.OBJECT_STORE_NAME,R=Object(b.a)(_,y,{upgrade:function(n){n.createObjectStore(k,{keyPath:"id",autoIncrement:!0})}}),E={getDish:function(n){return w(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,R;case 4:return e.abrupt("return",e.sent.get(k,n));case 5:case"end":return e.stop()}}),e)})))()},getAllDish:function(){return w(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R;case 2:return n.abrupt("return",n.sent.getAll(k));case 3:case"end":return n.stop()}}),n)})))()},putDish:function(n){return w(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object.prototype.hasOwnProperty.call(n,"id")){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,R;case 4:return e.abrupt("return",e.sent.put(k,n));case 5:case"end":return e.stop()}}),e)})))()},deleteDish:function(n){return w(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R;case 2:return e.abrupt("return",e.sent.delete(k,n));case 3:case"end":return e.stop()}}),e)})))()}};function S(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function L(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){S(a,r,i,o,s,"next",n)}function s(n){S(a,r,i,o,s,"throw",n)}o(void 0)}))}}function P(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function A(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){P(a,r,i,o,s,"next",n)}function s(n){P(a,r,i,o,s,"throw",n)}o(void 0)}))}}var O={init:function(n){var e=this;return A(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.likeButtonContainer,i=n.resto,e._likeButtonContainer=r,e._resto=i,t.next=5,e._renderButton();case 5:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var n=this;return A(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n._resto.id,e.next=3,n._isRestoExist(t);case 3:if(!e.sent){e.next=7;break}n._renderUnlike(),e.next=8;break;case 7:n._renderLike();case 8:case"end":return e.stop()}}),e)})))()},_isRestoExist:function(n){return A(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getDish(n);case 2:return t=e.sent,e.abrupt("return",!!t);case 4:case"end":return e.stop()}}),e)})))()},_renderLike:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="Favorite this resto" id="likeButton" class="like">\n    <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.getElementById("likeButton").addEventListener("click",A(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.putDish(n._resto);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))},_renderUnlike:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="Unfavourite this resto" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.getElementById("likeButton").addEventListener("click",A(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.deleteDish(n._resto.id);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))}};function B(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function I(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){B(a,r,i,o,s,"next",n)}function s(n){B(a,r,i,o,s,"throw",n)}o(void 0)}))}}var j={post:function(n){var e=this,t=document.querySelector("#submit"),r=document.querySelector("#reviewerName"),i=document.querySelector("#reviewContent");t.addEventListener("click",I(regeneratorRuntime.mark((function t(){var a,o,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a={id:n.id,name:r.value,review:i.value}).name||!a.review){t.next=14;break}return o=document.querySelector(".detail_reviews"),t.prev=3,t.next=6,d.addReview(a);case 6:s=t.sent,d.Details(n.id),o.innerHTML=p(s.customerReviews),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(3),o.innerHTML="<b>Error:</b> ".concat(t.t0);case 14:e._emptyForm();case 15:case"end":return t.stop()}}),t,null,[[3,11]])}))))},_emptyForm:function(){document.querySelector("#reviewerName").value="",document.querySelector("#reviewContent").value=""}};function T(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function M(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){T(a,r,i,o,s,"next",n)}function s(n){T(a,r,i,o,s,"throw",n)}o(void 0)}))}}var z={"/":g,"/home":g,"/our-favorites":{render:function(){return L(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n        <section id="top-restaurants">\n          <h2 tabindex="0">Our Favorite Restaurant</h2>\n          <div id="loading"></div>\n          <ul id="top-restaurants__ul">\n \n          </ul>\n        </section>\n      ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return L(regeneratorRuntime.mark((function n(){var e,t,r,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector("#loading"),t=document.getElementById("top-restaurants__ul"),n.next=4,E.getAllDish();case 4:0===(r=n.sent).length?(t.innerHTML+='\n  <div class="empty_container">\n    <h3>Sorry...</h3>\n    <p class="resto-item__not__found">There\'s no one restaurant has been liked</p>\n  </div>\n',t.style.textAlign="center",t.style.display="block",t.style.marginBottom="500px"):(f.displayLoading(e),f.hideLoading(e),i=document.getElementById("top-restaurants__ul"),r.forEach((function(n){i.innerHTML+=l(n)})));case 6:case"end":return n.stop()}}),n)})))()}},"/detail/:id":{render:function(){return M(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="container">\n        <div class="center">\n          <h2 tabindex="0">Detail Restaurant</h2>\n        </div>\n        <div id="loading"></div>\n        <div id="resto_details" class="detail container_height"></div>\n        <div id="likeButtonContainer"></div>\n\n        <div class="add-reviews">\n          <h2 class="add-review_title">Add New Review</h2>\n          <div class="review_form">\n            <div class="input_form">\n              <div class="review_form_name">\n                  <label for="name">Name</label><br>\n                  <input type="text" name="name" id="reviewerName" placeholder="Input your name" required>\n              </div>\n              <div class="review_form_content">\n                  <label for="content">Review</label><br>\n                  <textarea name="content" id="reviewContent" placeholder="Input your review" required></textarea>\n              </div>\n            </div>\n            <button class="submit" id="submit" aria-label="Submit my review">Add Review</submit>\n          </div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return M(regeneratorRuntime.mark((function n(){var e,t,r,a;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=document.querySelector("#loading"),f.displayLoading(e),t=i.parseActiveUrlWithoutCombiner(),n.next=5,d.Details(t.id);case 5:r=n.sent,f.hideLoading(e),a=r.restaurant,document.getElementById("resto_details").innerHTML=(s=a,'\n  <div class="detail_header">\n    <picture>\n      <source type="image/webp" srcset='.concat(o.IMG.Medium).concat(s.pictureId,'/>\n      <source type="image/jpeg" srcset=').concat(o.IMG.Medium).concat(s.pictureId,'/>\n      <source media="(max-width: 600px)" srcset=').concat(o.IMG.S).concat(s.pictureId,'>\n      <img class="detail_poster lazyload" data-src=').concat(o.IMG.Medium).concat(s.pictureId,' alt="').concat(s.name,'"/>\n    </picture>\n    <h2 class="detail_title">').concat(s.name.toUpperCase(),'</h2>\n  </div>\n  <div class="detail_info">\n    <h3>INFORMATION</h3>\n    <p>City : ').concat(s.city,"</p>\n    <p>Address : ").concat(s.address,"</p>\n    <p>Rating : ").concat(s.rating,'⭐️</p>\n    <div class="info_food">\n      <h4>FOOD</h4>\n      <ul>\n        <li>').concat(s.menus.foods[0].name,"</li>\n        <li>").concat(s.menus.foods[1].name,"</li>\n        <li>").concat(s.menus.foods[2].name,'</li>\n      </ul>\n    </div>\n    <div class="info_drinks">\n      <h4>DRINKS</h4>\n      <ul>\n        <li>').concat(s.menus.drinks[0].name,"</li>\n        <li>").concat(s.menus.drinks[1].name,"</li>\n        <li>").concat(s.menus.drinks[2].name,'</li>\n      </ul>\n    </div>\n    <div class="info_categories">\n      <h4>CATEGORIES</h4>\n      <span>').concat(s.categories[0].name,"</span>\n      ").concat(s.categories.length>1?"<span>".concat(s.categories[1].name,"</span>"):"",'\n    </div>\n  </div>\n  <div class="detail_overview">\n    <h3>Overview</h3>\n    <p>').concat(s.description,'</p>\n  </div>\n  <div class="detail_reviews">\n    <h3>Reviews</h3>\n    ').concat(p(s.customerReviews),"\n  </div>\n")),j.post(t),O.init({likeButtonContainer:document.getElementById("likeButtonContainer"),resto:{id:a.id,name:a.name,city:a.city,rating:a.rating,description:a.description,pictureId:a.pictureId}});case 12:case"end":return n.stop()}var s}),n)})))()}}};function C(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function D(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var N=function(){function n(e){var t=e.button,r=e.drawer,i=e.content;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=t,this._drawer=r,this._content=i,this._initialAppShell()}var e,t,a,o,s;return e=n,(t=[{key:"_initialAppShell",value:function(){r.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function n(){var e,t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.parseActiveUrlWithCombiner(),t=z[e],n.next=4,t.render();case 4:return this._content.innerHTML=n.sent,n.next=7,t.afterRender();case 7:case"end":return n.stop()}}),n,this)})),s=function(){var n=this,e=arguments;return new Promise((function(t,r){var i=o.apply(n,e);function a(n){C(i,t,r,a,s,"next",n)}function s(n){C(i,t,r,a,s,"throw",n)}a(void 0)}))},function(){return s.apply(this,arguments)})}])&&D(e.prototype,t),a&&D(e,a),n}(),q=t(4),H=t.n(q);function U(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}var W=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,H.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){U(a,r,i,o,s,"next",n)}function s(n){U(a,r,i,o,s,"throw",n)}o(void 0)}))});return function(){return e.apply(this,arguments)}}();function F(n,e,t,r,i,a,o){try{var s=n[a](o),c=s.value}catch(n){return void t(n)}s.done?e(c):Promise.resolve(c).then(r,i)}function G(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function o(n){F(a,r,i,o,s,"next",n)}function s(n){F(a,r,i,o,s,"throw",n)}o(void 0)}))}}var J={sendNotification:function(n){var e=n.title,t=n.options;if(this._checkAvailability())return this._checkPermission()?void this._showNotification({title:e,options:t}):(console.log("User did not yet granted permission"),void this._requestPermission());console.log("Notification not supported in this browser")},_checkAvailability:function(){return!!("Notification"in window)},_checkPermission:function(){return"granted"===Notification.permission},_requestPermission:function(){return G(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Notification.requestPermission();case 2:"denied"===(e=n.sent)&&console.log("Notification Denied"),"default"===e&&console.log("Permission closed");case 5:case"end":return n.stop()}}),n)})))()},_showNotification:function(n){return G(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.title,r=n.options,e.next=3,navigator.serviceWorker.ready;case 3:e.sent.showNotification(t,r);case 5:case"end":return e.stop()}}),e)})))()}},V={init:function(n){new WebSocket(n).onmessage=this._onMessageHandler},_onMessageHandler:function(n){var e=JSON.parse(n.data);J.sendNotification({title:"".concat(e.title," is on cinema!"),options:{body:e.overview}})}},K=new N({button:document.querySelector("#hamburgerButton"),drawer:document.querySelector("#navigationDrawer"),content:document.querySelector("#main-content")});window.addEventListener("hashchange",(function(){K.renderPage()})),window.addEventListener("load",(function(){K.renderPage(),W(),V.init(a.WEB_SOCKET_SERVER)}))}]);