(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),d=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=c(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+d+s+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,d=e.ariaHidden,s=l.default.createElement(O,(0,o.default)({ref:t,src:a},n,{ariaHidden:d}));return r.length>1?l.default.createElement("picture",null,i(r),s):s})),O=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,d=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:d,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,d.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,d=e.imgStyle,s=void 0===d?{}:d,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,E=e.loading,L=e.draggable,R=m||h;if(!R)return null;var V=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,o.default)({opacity:V?1:0,transition:H?"opacity "+y+"ms":"none"},s),N="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},_=(0,o.default)({opacity:this.state.imgLoaded?0:1},H&&T,s,f),P={title:t,alt:this.state.isVisible?"":a,style:_,className:p,itemProp:w},W=this.state.isHydrated?g(R):R[0];if(m)return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&T)}),W.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:R,generateSources:I}),W.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:R,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,S(R),l.default.createElement(O,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:E},W,{imageVariants:R}))}}));if(h){var j=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},H&&T)}),W.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:P,imageVariants:R,generateSources:I}),W.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:P,imageVariants:R,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,S(R),l.default.createElement(O,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:E},W,{imageVariants:R}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),k=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function N(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}V.propTypes={resolutions:H,sizes:k,fixed:N(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:N(u.default.oneOfType([k,u.default.arrayOf(k)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=V;t.default=T},eWm7:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return s}));var r=a("vOnD"),i=(r.default.h1.withConfig({displayName:"base__Heading",componentId:"sc-1hmnpru-0"})(["color:",";"],(function(e){return e.theme.colors.headingColor})),r.default.div.withConfig({displayName:"base__Card",componentId:"sc-1hmnpru-1"})(["width:auto;height:fit-content;padding:1rem;border-radius:5px;background:",";transition:all 0.5s ease-out;box-shadow:0px 3px 15px rgba(0,0,0,0.2);&:hover{transform:scale(1.02);}h1{font-size:1.5em;margin:1rem 0 0 0;}h2{font-size:1.2em;}p{margin:0;font-size:1em;}"],(function(e){return e.theme.colors.cardBackground}))),n=r.default.main.withConfig({displayName:"base__CardGrid",componentId:"sc-1hmnpru-2"})(["display:grid;grid-template-columns:'repeat(",", 1fr';grid-gap:1.5rem;@media only screen and (max-width:600px){grid-template-columns:auto;grid-gap:1rem;}"],(function(e){var t;return null!==(t=e.columns)&&void 0!==t?t:2})),d=Object(r.default)(i).withConfig({displayName:"base__BookCard",componentId:"sc-1hmnpru-3"})(["display:grid;grid-gap:1rem;grid-template-areas:'image title' 'image description';grid-template-columns:150px auto;div{grid-area:title;}h1{font-size:1.5em;margin:0;}h2{font-size:1.2em;}.description{margin:0;font-size:1em;grid-area:description;}img{width:150px;grid-area:image;}@media only screen and (max-width:760px){grid-template-areas:'image title' 'description description';grid-template-columns:75px auto;img{width:75px;}}"]),s=r.default.button.withConfig({displayName:"base__Tag",componentId:"sc-1hmnpru-4"})(["font-family:'Helvetica Neue';font-size:1em;font-weight:600;padding:0.25rem 0.5rem;border-radius:4px;border:none;cursor:pointer;background:linear-gradient( 201deg,rgba(0,250,154,1) 3%,rgba(30,144,255,1) 56% );&:hover{transform:scale(1.02);}&:disabled{cursor:'not-allowed';}"])},"rui/":function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("vOnD").default.div.withConfig({displayName:"video__Container",componentId:"sc-1lyhcp1-0"})(["width:",";video{width:100%;max-height:100%;}"],(function(e){var t;return null!==(t=e.width)&&void 0!==t?t:"auto"}));t.a=function(e){var t=e.source,a=e.width,d=e.showControls,s=void 0!==d&&d,o=e.filter,l=Object(r.useRef)(null);return i.a.createElement(n,{width:a},i.a.createElement("video",{controls:s,muted:!0,playsInline:!0,autoPlay:!0,loop:!0,style:{filter:o},ref:l,onCanPlay:function(){return l.current.playbackRate=3}},i.a.createElement("source",{src:t,type:"video/mp4"})))}}}]);
//# sourceMappingURL=64dc096b8c7bfea0b6a1937366572cc2efd8e5c7-fcf3dfb93c0b181d3a09.js.map