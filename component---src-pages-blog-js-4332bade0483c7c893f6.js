(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{eWm7:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return d}));var a=n("vOnD"),r=(a.default.h1.withConfig({displayName:"base__Heading",componentId:"sc-1hmnpru-0"})(["color:",";"],(function(e){return e.theme.colors.headingColor})),a.default.div.withConfig({displayName:"base__Card",componentId:"sc-1hmnpru-1"})(["width:auto;height:fit-content;padding:1rem;border-radius:5px;background:",";transition:all 0.5s ease-out;box-shadow:0px 3px 15px rgba(0,0,0,0.2);&:hover{transform:scale(1.02);}h1{font-size:1.5em;margin:1rem 0 0 0;}h2{font-size:1.2em;}p{margin:0;font-size:1em;}"],(function(e){return e.theme.colors.cardBackground}))),i=a.default.main.withConfig({displayName:"base__CardGrid",componentId:"sc-1hmnpru-2"})(["display:grid;grid-template-columns:'repeat(",", 1fr';grid-gap:1.5rem;@media only screen and (max-width:600px){grid-template-columns:auto;grid-gap:1rem;}"],(function(e){var t;return null!==(t=e.columns)&&void 0!==t?t:2})),o=Object(a.default)(r).withConfig({displayName:"base__BookCard",componentId:"sc-1hmnpru-3"})(["display:grid;grid-gap:1rem;grid-template-areas:'image title' 'image description';grid-template-columns:150px auto;div{grid-area:title;}h1{font-size:1.5em;margin:0;}h2{font-size:1.2em;}.description{margin:0;font-size:1em;grid-area:description;}img{width:150px;grid-area:image;}@media only screen and (max-width:760px){grid-template-areas:'image title' 'description description';grid-template-columns:75px auto;img{width:75px;}}"]),d=a.default.button.withConfig({displayName:"base__Tag",componentId:"sc-1hmnpru-4"})(["font-family:'Helvetica Neue';font-size:1em;font-weight:600;padding:0.25rem 0.5rem;border-radius:4px;border:none;cursor:pointer;background:linear-gradient( 201deg,rgba(0,250,154,1) 3%,rgba(30,144,255,1) 56% );&:hover{transform:scale(1.02);}&:disabled{cursor:'not-allowed';}"])},vx99:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return p}));var a=n("q1tI"),r=n.n(a),i=n("Bl7J"),o=n("Wbzz"),d=n("vOnD"),l=n("eWm7"),m=d.default.div.withConfig({displayName:"PostListing__Container",componentId:"sc-10ha88k-0"})(["a:hover{color:",";}"],(function(e){return e.theme.colors.blueLight})),c=d.default.article.withConfig({displayName:"PostListing__Listing",componentId:"sc-10ha88k-1"})(["h3{margin:0;}"]),s=function(e){var t=e.postEdges,n=function(){var e=[];return t.forEach((function(t){e.push({path:t.node.frontmatter.slug,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt})})),e}();return r.a.createElement(m,null,n.map((function(e){return r.a.createElement(o.Link,{to:e.path,key:e.title,style:{textDecoration:"none"}},r.a.createElement(l.b,{style:{marginBottom:"1rem"}},r.a.createElement(c,null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.date),r.a.createElement("p",null,e.excerpt))))})))},u=n("vrFN"),p="1789563872";t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(u.a,{title:"blog"}),r.a.createElement(s,{postEdges:t.allMarkdownRemark.edges}))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-4332bade0483c7c893f6.js.map