(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+ego":function(e,t,n){"use strict";var r=n("Kcwp"),o=n("q1tI"),i=n("TJpk"),a=n.n(i),c=n("Wbzz"),s=(n("ewTs"),n("qR4i")),l=n("N7jl"),u="\n  html {\n    box-sizing: border-box;\n    scroll-behavior: smooth;\n    width:100vw;\n    overflow-x:hidden;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: "+s.c.fontSize.regular+"px !important;\n    line-height: "+s.c.lineHeight.regular+" !important;\n  }\n\n  body {\n    width: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    font-family: "+s.d.sansSerif+";\n    color: "+s.b.white+";\n    background-color: "+s.b.black+";\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n  }\n\n  a {\n    color: "+s.b.brand+";\n    text-decoration: none;\n\n    &:hover,\n    &:focus {\n      text-decoration: underline;\n    }\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n    position: relative;\n  }\n\n  figure {\n    margin: 2rem 0;\n  }\n\n  figcaption {\n    font-size: 80%;\n  }\n\n  table {\n    width: 100%;\n    margin-bottom: 1rem;\n    border: 1px solid "+s.b.ui.light+";\n    font-size: 85%;\n    border-collapse: collapse;\n  }\n\n  td,\n  th {\n    padding: .25rem .5rem;\n    border: 1px solid "+s.b.ui.light+";\n  }\n\n  th {\n    text-align: left;\n  }\n\n  tbody {\n    tr {\n      &:nth-of-type(odd) {\n        td {\n          background-color: "+s.b.ui.whisper+";\n        }\n        tr {\n          background-color: "+s.b.ui.whisper+";\n        }\n      }\n    }\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 1.414rem;\n    margin-bottom: .5rem;\n    color: "+s.b.white+";\n    font-weight: 600;\n    line-height: "+s.c.lineHeight.heading+";\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin-top: 0;\n    font-size: "+s.c.headingSizes.h1+"rem;\n  }\n\n  h2 {\n    font-size: "+s.c.headingSizes.h2+"rem;\n  }\n\n  h3 {\n    font-size: "+s.c.headingSizes.h3+"rem;\n  }\n\n  h4, h5, h6 {\n    font-size: "+s.c.headingSizes.h4+"rem;\n  }\n\n  p {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  strong {\n    color: "+s.b.black+";\n  }\n\n  ul,\n  ol,\n  dl {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  dt {\n    font-weight: bold;\n  }\n\n  dd {\n    margin-bottom: .5rem;\n  }\n\n  hr {\n    position: relative;\n    margin: 1.5rem 0;\n    border: 0;\n    border-top: 1px solid "+s.b.ui.light+";\n  }\n\n  blockquote {\n    margin: .8rem 0;\n    padding: .5rem 1rem;\n    border-left: .25rem solid "+s.b.ui.light+";\n    color: "+s.b.gray.calm+";\n\n    p {\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    @media (min-width: "+Object(l.a)(s.a.md)+"em) {\n      padding-right: 5rem;\n      padding-left: 1.25rem;\n    }\n  }\n",d=n("wTIg"),f=n("qKvR"),p=Object(d.a)("div",{target:"e17su9850"})({name:"zf0iqh",styles:"display:flex;flex-direction:column;min-height:100vh;"}),T=function(e){var t=e.children,n=e.className;return Object(f.d)(o.Fragment,null,Object(f.d)(f.a,{styles:function(){return Object(f.c)(u)}}),Object(f.d)(p,{className:n},t))},m=Object(d.a)("main",{target:"e1qy7fsr0"})({name:"b95f0i",styles:"display:flex;flex-direction:column;flex:1;"}),h=function(e){var t=e.children,n=e.className;return Object(f.d)(m,{className:n},t)};t.a=function(e){var t=e.children;return Object(f.d)(c.b,{query:"991718019",render:function(e){return Object(f.d)(T,null,Object(f.d)(a.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),Object(f.d)(h,null,t))},data:r})}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var o=n("q1tI"),i=r(o),a=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function d(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!a(e,this.props)},c.componentWillMount=function(){u.push(this),d()},c.componentDidUpdate=function(){d()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},c.render=function(){return i.createElement(r,this.props)},o}(o.Component);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",s),f}}},"9Zgd":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n("wTIg"),o=n("N7jl"),i=n("qR4i"),a=Object(r.a)("div",{target:"egoabw80"})("overflow:hidden;margin-left:auto;margin-right:auto;max-width:",Object(o.a)(i.e.lg),"em;width:auto;"),c=Object(r.a)("div",{target:"egoabw81"})("height:80vh;display:flex;align-items:center;justify-content:center;@media (max-width:",Object(o.a)(i.a.sm),"em){height:90vh;}"),s=Object(r.a)("div",{target:"egoabw82"})({name:"1aayzr9",styles:"position:fixed;width:100vw;height:100vh;"}),l=Object(r.a)("div",{target:"egoabw83"})({name:"1l3p5lc",styles:"width:100vw;height:100vh;scroll-snap-align:start;"}),u=Object(r.a)("div",{target:"egoabw84"})({name:"1c4nmt7",styles:"display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));grid-gap:0.5rem;margin-top:8rem;margin-bottom:12rem;grid-auto-rows:1fr;"}),d=Object(r.a)("span",{target:"egoabw85"})("@media (min-width:",Object(o.a)(i.a.sm),"em){display:none;}"),f=Object(r.a)("span",{target:"egoabw86"})("@media (max-width:",Object(o.a)(i.a.sm),"em){display:none;}")},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var l=i[s];if(!c(l))return!1;var u=e[l],d=t[l];if(!1===(o=n?n.call(r,u,d,l):void 0)||void 0===o&&u!==d)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Kcwp:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Ross MacDonald","description":"Ross MacDonald, a software developer and web developer"}}}}')},N7jl:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("qR4i"),o=function(e){return e/r.c.fontSize.regular}},"NqE+":function(e,t,n){"use strict";var r=n("wTIg"),o=(n("q1tI"),n("qR4i")),i=n("qKvR"),a=Object(r.a)("div",{target:"e1aptqz40"})("display:block;flex:1;position:relative;padding:",o.c.containerPadding,"rem;padding-bottom:4rem;background-color:",o.b.black,";border-top:1px solid ",o.b.altWhite.trans,";");t.a=function(e){var t=e.children,n=e.className;return Object(i.d)(a,{id:"1",className:n},t)}},TBFr:function(e,t,n){"use strict";n("q1tI");var r=n("9Zgd"),o=n("qKvR");t.a=function(e){var t=e.children,n=e.className;return Object(o.d)(r.e,{className:n},t)}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=d(n("q1tI")),a=d(n("17x9")),c=d(n("8+s/")),s=d(n("bmMU")),l=n("v1p5"),u=n("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,h,g,E=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),b=(m=E,g=h=function(e){function t(){return p(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(o.type){case u.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=c,t.titleAttributes=r({},a),t));case u.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case u.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var o;n=r({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=f(o,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(m,o)},o(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),h.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=m.peek,h.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},g);b.renderStatic=b.rewind,t.Helmet=b,t.default=b},WLL4:function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},Wbzz:function(e,t,n){"use strict";n.d(t,"b",(function(){return d}));n("xfY5");var r=n("q1tI"),o=n.n(r),i=n("+ZDr"),a=n.n(i);n.d(t,"a",(function(){return a.a}));n("lw3w");var c=n("emEt"),s=n("qKvR"),l=(c.default.enqueue,o.a.createContext({}));function u(e){var t=e.staticQueryData,n=e.data,r=e.query,i=e.render,a=n?n.data:t[r]&&t[r].data;return Object(s.d)(o.a.Fragment,null,a&&i(a),!a&&Object(s.d)("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,n=e.query,r=e.render,o=e.children;return Object(s.d)(l.Consumer,null,(function(e){return Object(s.d)(u,{data:t,query:n,render:r||o,staticQueryData:e})}))}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,o=Object.keys,i=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,l,u=r(t),d=r(n);if(u&&d){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=d)return!1;var f=t instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==n.getTime();var T=t instanceof RegExp,m=n instanceof RegExp;if(T!=m)return!1;if(T&&m)return t.toString()==n.toString();var h=o(t);if((s=h.length)!==o(n).length)return!1;for(c=s;0!=c--;)if(!i.call(n,h[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(l=h[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},ewTs:function(e,t,n){},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},jm62:function(e,t,n){var r=n("XKFU"),o=n("mQtv"),i=n("aCFj"),a=n("EemH"),c=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,n,r=i(e),s=a.f,l=o(r),u={},d=0;l.length>d;)void 0!==(n=s(r,t=l[d++]))&&c(u,t,n);return u}})},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},mQtv:function(e,t,n){var r=n("kJMx"),o=n("JiEa"),i=n("y3w9"),a=n("dyZX").Reflect;e.exports=a&&a.ownKeys||function(e){var t=r.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},qR4i:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return c}));var r={brand:"#8400ff",lilac:"#9d7cbf",accent:"#ffb238",success:"#37b635",warning:"#ff005a",ui:{bright:"#e0d6eb",light:"#f5f3f7",whisper:"#fbfafc"},code:"#fcf6f0",gray:{dark:"hsla(270, 17.119554496%, 0%, 0.92)",copy:"hsla(270, 15.797828016000002%, 0%, 0.88)",calm:"rgba(0, 0, 0, 0.54)"},white:"#fff",altWhite:{trans:"rgba(255,255,255,0.3)"},black:"#030005",red:"#ff005a"},o={sansSerif:'-apple-system, BlinkMacSystemFont, "Montserrat", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'},i={xs:0,sm:576,md:768,lg:992,xl:1200},a={md:720,lg:960,xl:1140},c={fontSize:{regular:16,large:18},headingSizes:{h1:2.441,h2:1.953,h3:1.563,h4:1.25},lineHeight:{regular:1.45,heading:1.2},containerPadding:1.5}},rzlk:function(e,t,n){"use strict";n.r(t);n("91GP");var r=n("q1tI"),o=n.n(r),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=s(n("q1tI")),a=s(n("MgzW")),c=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var l,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,c.TAG_NAMES.TITLE),n=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},m=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),s=0;s<i.length;s++){var l=i[s],u=(0,a.default)({},o[l],r[l]);o[l]=u}return e}),[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},g=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){g(e)}),0)}),E=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;w(c.TAG_NAMES.BODY,r),w(c.TAG_NAMES.HTML,o),_(f,p);var T={baseTag:R(c.TAG_NAMES.BASE,n),linkTags:R(c.TAG_NAMES.LINK,i),metaTags:R(c.TAG_NAMES.META,a),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,s),scriptTags:R(c.TAG_NAMES.SCRIPT,u),styleTags:R(c.TAG_NAMES.STYLE,d)},m={},h={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=T[e].oldTags)})),t&&t(),l(e,m,h)},O=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=O(e)),w(c.TAG_NAMES.TITLE,t)},w=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var d=i.indexOf(l);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},R=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},I=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,o=M(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=P(n),i=O(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+u(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),i.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&y(v),e.defer?v=b((function(){S(e,(function(){v=null}))})):(S(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:I(c.TAG_NAMES.BASE,t,r),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,o,r),link:I(c.TAG_NAMES.LINK,i,r),meta:I(c.TAG_NAMES.META,a,r),noscript:I(c.TAG_NAMES.NOSCRIPT,s,r),script:I(c.TAG_NAMES.SCRIPT,l,r),style:I(c.TAG_NAMES.STYLE,u,r),title:I(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=A}).call(this,n("yLpj"))},wTIg:function(e,t,n){"use strict";n("f3/d"),n("HAE/"),n("WLL4"),n("jm62"),n("8+KV"),n("0l/t"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("0jh0"),o=n.n(r),i=n("q1tI"),a=n("4qRI"),c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,s=Object(a.a)((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),l=n("qKvR");n("KKXr");function u(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]):r+=n+" "})),r}var d=function(e,t,n){var r=e.key+"-"+t.name;if(!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var o=t;do{e.insert("."+r,o,e.sheet,!0);o=o.next}while(void 0!==o)}},f=n("MiSq"),p=s,T=function(e){return"theme"!==e&&"innerRef"!==e},m=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:T};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function e(t,n){var r,o,a;void 0!==n&&(r=n.label,a=n.target,o=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp);var c=t.__emotion_real===t,s=c&&t.__emotion_base||t;"function"!=typeof o&&c&&(o=t.__emotion_forwardProp);var p=o||m(s),T=!p("as");return function(){var h=arguments,E=c&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&E.push("label:"+r+";"),null==h[0]||void 0===h[0].raw)E.push.apply(E,h);else{0,E.push(h[0][0]);for(var b=h.length,y=1;y<b;y++)E.push(h[y],h[0][y])}var A=Object(l.e)((function(e,t,n){return Object(i.createElement)(l.b.Consumer,null,(function(r){var c=T&&e.as||s,l="",h=[],g=e;if(null==e.theme){for(var b in g={},e)g[b]=e[b];g.theme=r}"string"==typeof e.className?l=u(t.registered,h,e.className):null!=e.className&&(l=e.className+" ");var y=Object(f.a)(E.concat(h),t.registered,g);d(t,y,"string"==typeof c);l+=t.key+"-"+y.name,void 0!==a&&(l+=" "+a);var A=T&&void 0===o?m(c):p,v={};for(var S in e)T&&"as"===S||A(S)&&(v[S]=e[S]);return v.className=l,v.ref=n||e.innerRef,Object(i.createElement)(c,v)}))}));return A.displayName=void 0!==r?r:"Styled("+("string"==typeof s?s:s.displayName||s.name||"Component")+")",A.defaultProps=t.defaultProps,A.__emotion_real=A,A.__emotion_base=s,A.__emotion_styles=E,A.__emotion_forwardProp=o,Object.defineProperty(A,"toString",{value:function(){return"."+a}}),A.withComponent=function(t,r){return e(t,void 0!==r?g({},n||{},{},r):n).apply(void 0,E)},A}}},xfY5:function(e,t,n){"use strict";var r=n("dyZX"),o=n("aagx"),i=n("LZWt"),a=n("Xbzi"),c=n("apmT"),s=n("eeVq"),l=n("kJMx").f,u=n("EemH").f,d=n("hswa").f,f=n("qncB").trim,p=r.Number,T=p,m=p.prototype,h="Number"==i(n("Kuth")(m)),g="trim"in String.prototype,E=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,i=(t=g?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var a,s=t.slice(2),l=0,u=s.length;l<u;l++)if((a=s.charCodeAt(l))<48||a>o)return NaN;return parseInt(s,r)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(h?s((function(){m.valueOf.call(n)})):"Number"!=i(n))?a(new T(E(t)),n,p):E(t)};for(var b,y=n("nh4g")?l(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;y.length>A;A++)o(T,b=y[A])&&!o(p,b)&&d(p,b,u(T,b));p.prototype=m,m.constructor=p,n("KroJ")(r,"Number",p)}}}]);
//# sourceMappingURL=commons-90e2d85807a754eebe85.js.map