(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{NEcW:function(e,t,r){e.exports=r.p+"static/spicelamp-0d50f155cc1f161e0e5a9117aa59479b.mp4"},QHRp:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return R}));var n=r("MUpH"),a=r("q1tI"),i=r.n(a),o=r("9eSz"),c=r.n(o),l=r("Wbzz"),u=r("vOnD"),s=r("Bl7J"),h=r("vrFN"),f=r("eWm7"),p=r("ae1s"),d=r.n(p),m=r("NEcW"),v=r.n(m),y=r("Z/qy"),w=r.n(y),g=r("rui/"),E=r("o0o1"),b=r.n(E);r("ls82");function x(e,t,r,n,a,i,o){try{var c=e[i](o),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,a)}var L="https://js.stripe.com/v3",S=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,j="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",k=null,I=function(e){return null!==k?k:k=new Promise((function(t,r){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(j),window.Stripe)t(window.Stripe);else try{var n=function(){for(var e=document.querySelectorAll('script[src^="'.concat(L,'"]')),t=0;t<e.length;t++){var r=e[t];if(S.test(r.src))return r}return null}();n&&e?console.warn(j):n||(n=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(L).concat(t);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(r),r}(e)),n.addEventListener("load",(function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))})),n.addEventListener("error",(function(){r(new Error("Failed to load Stripe.js"))}))}catch(a){return void r(a)}else t(null)}))},N=function(e,t,r){if(null===e)return null;var n=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.11.0",startTime:t})}(n,r),n},O=Promise.resolve().then((function(){return I(null)})),_=!1;O.catch((function(e){_||console.warn(e)}));var C,F=function(){return C||(C=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];_=!0;var n=Date.now();return O.then((function(e){return N(e,t,n)}))}("pk_live_mWvINn7y2KZobnQtGGzjt7y5")),C},A=function(e){var t=e.priceId,r=e.children,n=Object(a.useState)(!1),o=n[0],c=n[1],l=function(){var e,r=(e=b.a.mark((function e(r){var n,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),c(!0),e.next=4,F();case 4:return n=e.sent,e.next=7,n.redirectToCheckout({mode:"payment",lineItems:[{price:t,quantity:1}],successUrl:"https://wileys.website/thank-you",cancelUrl:"https://wileys.website/art",shippingAddressCollection:{allowedCountries:["US","CA"]}});case 7:a=e.sent,(i=a.error)&&(console.warn("Error:",i),c(!1));case 10:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){x(i,n,a,o,c,"next",e)}function c(e){x(i,n,a,o,c,"throw",e)}o(void 0)}))});return function(e){return r.apply(this,arguments)}}();return i.a.createElement(f.d,{type:"button",disabled:o,onClick:l},r)};function G(){var e=Object(n.a)(["\n  display: grid;\n  gap: 1.5rem;\n  grid-template-columns: repeat(auto-fill, minmax(21rem, 1fr));\n  grid-template-rows: masonry;\n  align-content: start;\n"]);return G=function(){return e},e}var P=u.default.main(G());function R(){var e=Object(l.c)("2226385237");return i.a.createElement(s.a,null,i.a.createElement(h.a,{title:"art"}),i.a.createElement(P,null,i.a.createElement(f.b,{className:"art"},i.a.createElement(c.a,{fluid:e.goaMural.childImageSharp.fluid,alt:"mural image",style:{width:"auto"}}),i.a.createElement("div",null,i.a.createElement("h1",null,"Collaborative mural in Anjuna"),i.a.createElement("h2",null,"Red Door Hostel - Goa, India"))),i.a.createElement(f.b,{className:"art"},i.a.createElement(g.a,{source:d.a,showControls:!1,filter:"brightness(160%)"}),i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"}},i.a.createElement("h1",null,"Tripple Handle Swirly"),i.a.createElement(A,{priceId:"price_1HwKuYHNkflIFOEUjYUPvbcz"},"FOR SALE")),i.a.createElement("h2",null,"Red and white stoneware"))),i.a.createElement(f.b,{className:"art",as:l.a,to:"/art/spice-lamp",style:{textDecoration:"inherit"}},i.a.createElement(g.a,{source:v.a,showControls:!1}),i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"}},i.a.createElement("h1",null,"Spice Lamp"),i.a.createElement(A,{priceId:"price_1IC7YjHNkflIFOEU7frfgptk"},"FOR SALE")),i.a.createElement("h2",null,"Red and white stoneware with black stain"))),i.a.createElement(f.b,{className:"art",as:l.a,to:"/art/space-chicken",style:{textDecoration:"inherit"}},i.a.createElement(g.a,{source:w.a,showControls:!1,filter:"brightness(115%)"}),i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"}},i.a.createElement("h1",null,"Space Chicken"),i.a.createElement(A,{priceId:"price_1IC7c0HNkflIFOEUazBVWZsu"},"FOR SALE")),i.a.createElement("h2",null,"Red and white stoneware with black stain"))),i.a.createElement(f.b,{className:"art"},i.a.createElement(c.a,{fluid:e.spaceMonkey.childImageSharp.fluid,alt:"space monkey image",style:{width:"auto",filter:"contrast(135%)"}}),i.a.createElement("div",null,i.a.createElement("h1",null,"Space Monkey"),i.a.createElement("h2",null,"Ink and watercolor on paper"))),i.a.createElement(f.b,{className:"art"},i.a.createElement(c.a,{fluid:e.continentalDivide.childImageSharp.fluid,alt:"continental divide",style:{width:"auto",objectFit:"cover"}}),i.a.createElement("div",null,i.a.createElement("h1",null,"Continental Divide"),i.a.createElement("h2",null,"Acrylic on Canvas"))),i.a.createElement(f.b,{className:"art"},i.a.createElement(c.a,{fluid:e.bipolarBiped.childImageSharp.fluid,alt:"bipolar image",style:{width:"auto",filter:"contrast(160%)"}}),i.a.createElement("div",null,i.a.createElement("h1",null,"Bipolar Biped"),i.a.createElement("h2",null,"Marker on paper"))),i.a.createElement(f.b,{className:"art"},i.a.createElement(c.a,{fluid:e.glitchArt.childImageSharp.fluid,alt:"glitchart image",style:{width:"auto",filter:"contrast(160%)"}}),i.a.createElement("div",null,i.a.createElement("h1",null,"Glitch Art"),i.a.createElement("h2",null,"Created with ",i.a.createElement("a",{href:"https://glitchart.io/"},"glitchart.io"))))))}},"Z/qy":function(e,t,r){e.exports=r.p+"static/spacechicken-9e9130810a6e72fefce9f15d0d6ae694.mp4"},ae1s:function(e,t,r){e.exports=r.p+"static/swirly01-380467f9ae5476cf0d1f3c28297e1a57.mp4"},ls82:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),o=new L(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return j()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=E(o,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,o),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var s={};function h(){}function f(){}function p(){}var d={};d[a]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(S([])));v&&v!==t&&r.call(v,a)&&(d=v);var y=p.prototype=h.prototype=Object.create(d);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(a,i){function o(){return new t((function(n,o){!function n(a,i,o,c){var l=u(e[a],e,i);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(h).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,c)}))}c(l.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=y.constructor=p,p.constructor=f,f.displayName=c(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(g.prototype),g.prototype[i]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new g(l(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,o,"Generator"),y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")}}]);
//# sourceMappingURL=component---src-pages-art-js-97fc882d90b954e721dc.js.map