(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9Zgd":function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return u}));var r=n("wTIg"),a=n("N7jl"),o=n("qR4i"),i=Object(r.a)("div",{target:"egoabw80"})("height:80vh;display:flex;align-items:center;justify-content:center;@media (max-width:",Object(a.a)(o.a.sm),"em){height:90vh;}"),c=Object(r.a)("div",{target:"egoabw81"})({name:"1aayzr9",styles:"position:fixed;width:100vw;height:100vh;"}),s=Object(r.a)("div",{target:"egoabw82"})({name:"1l3p5lc",styles:"width:100vw;height:100vh;scroll-snap-align:start;"}),d=Object(r.a)("span",{target:"egoabw83"})("@media (min-width:",Object(a.a)(o.a.sm),"em){display:none;}"),l=Object(r.a)("span",{target:"egoabw84"})("@media (max-width:",Object(a.a)(o.a.sm),"em){display:none;}"),u=Object(r.a)("span",{target:"egoabw85"})()},C9qv:function(t,e,n){var r,a;void 0===(a="function"==typeof(r=function(){var t={};function e(t,e,n){this.x=t,this.y=e,this.z=n}e.prototype.dot2=function(t,e){return this.x*t+this.y*e},e.prototype.dot3=function(t,e,n){return this.x*t+this.y*e+this.z*n};var n=[new e(1,1,0),new e(-1,1,0),new e(1,-1,0),new e(-1,-1,0),new e(1,0,1),new e(-1,0,1),new e(1,0,-1),new e(-1,0,-1),new e(0,1,1),new e(0,-1,1),new e(0,1,-1),new e(0,-1,-1)],r=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],a=new Array(512),o=new Array(512);t.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var e=0;e<256;e++){var i;i=1&e?r[e]^255&t:r[e]^t>>8&255,a[e]=a[e+256]=i,o[e]=o[e+256]=n[i%12]}},t.seed(0);var i=.5*(Math.sqrt(3)-1),c=(3-Math.sqrt(3))/6,s=1/6;function d(t){return t*t*t*(t*(6*t-15)+10)}function l(t,e,n){return(1-n)*t+n*e}return t.simplex2=function(t,e){var n,r,s=(t+e)*i,d=Math.floor(t+s),l=Math.floor(e+s),u=(d+l)*c,f=t-d+u,h=e-l+u;f>h?(n=1,r=0):(n=0,r=1);var b=f-n+c,p=h-r+c,v=f-1+2*c,g=h-1+2*c,m=o[(d&=255)+a[l&=255]],w=o[d+n+a[l+r]],j=o[d+1+a[l+1]],y=.5-f*f-h*h,O=.5-b*b-p*p,x=.5-v*v-g*g;return 70*((y<0?0:(y*=y)*y*m.dot2(f,h))+(O<0?0:(O*=O)*O*w.dot2(b,p))+(x<0?0:(x*=x)*x*j.dot2(v,g)))},t.simplex3=function(t,e,n){var r,i,c,d,l,u,f=(t+e+n)*(1/3),h=Math.floor(t+f),b=Math.floor(e+f),p=Math.floor(n+f),v=(h+b+p)*s,g=t-h+v,m=e-b+v,w=n-p+v;g>=m?m>=w?(r=1,i=0,c=0,d=1,l=1,u=0):g>=w?(r=1,i=0,c=0,d=1,l=0,u=1):(r=0,i=0,c=1,d=1,l=0,u=1):m<w?(r=0,i=0,c=1,d=0,l=1,u=1):g<w?(r=0,i=1,c=0,d=0,l=1,u=1):(r=0,i=1,c=0,d=1,l=1,u=0);var j=g-r+s,y=m-i+s,O=w-c+s,x=g-d+2*s,k=m-l+2*s,I=w-u+2*s,M=g-1+.5,C=m-1+.5,q=w-1+.5,R=o[(h&=255)+a[(b&=255)+a[p&=255]]],S=o[h+r+a[b+i+a[p+c]]],z=o[h+d+a[b+l+a[p+u]]],P=o[h+1+a[b+1+a[p+1]]],B=.6-g*g-m*m-w*w,E=.6-j*j-y*y-O*O,T=.6-x*x-k*k-I*I,A=.6-M*M-C*C-q*q;return 32*((B<0?0:(B*=B)*B*R.dot3(g,m,w))+(E<0?0:(E*=E)*E*S.dot3(j,y,O))+(T<0?0:(T*=T)*T*z.dot3(x,k,I))+(A<0?0:(A*=A)*A*P.dot3(M,C,q)))},t.perlin2=function(t,e){var n=Math.floor(t),r=Math.floor(e);t-=n,e-=r;var i=o[(n&=255)+a[r&=255]].dot2(t,e),c=o[n+a[r+1]].dot2(t,e-1),s=o[n+1+a[r]].dot2(t-1,e),u=o[n+1+a[r+1]].dot2(t-1,e-1),f=d(t);return l(l(i,s,f),l(c,u,f),d(e))},t.perlin3=function(t,e,n){var r=Math.floor(t),i=Math.floor(e),c=Math.floor(n);t-=r,e-=i,n-=c;var s=o[(r&=255)+a[(i&=255)+a[c&=255]]].dot3(t,e,n),u=o[r+a[i+a[c+1]]].dot3(t,e,n-1),f=o[r+a[i+1+a[c]]].dot3(t,e-1,n),h=o[r+a[i+1+a[c+1]]].dot3(t,e-1,n-1),b=o[r+1+a[i+a[c]]].dot3(t-1,e,n),p=o[r+1+a[i+a[c+1]]].dot3(t-1,e,n-1),v=o[r+1+a[i+1+a[c]]].dot3(t-1,e-1,n),g=o[r+1+a[i+1+a[c+1]]].dot3(t-1,e-1,n-1),m=d(t),w=d(e),j=d(n);return l(l(l(s,b,m),l(u,p,m),j),l(l(f,v,m),l(h,g,m),j),w)},t})?r.call(e,n,e,t):r)||(t.exports=a)},Ml3z:function(t,e,n){"use strict";var r=n("wTIg"),a=(n("q1tI"),n("qR4i")),o=n("N7jl"),i=n("qKvR"),c=Object(r.a)("h1",{target:"e1593cox0"})("margin-top:0px;margin-bottom:0px;text-transform:uppercase;text-align:center;color:",a.b.white,";line-height:1.1ch;opacity:0;animation:fadein2 0.5s ease-out 0.2s forwards !important;@keyframes fadein2{0%{opacity:0;display:none;}1%{display:block;opacity:0;transform:translateY(5vh);}100%{opacity:100%;transform:translateY(0);}}",(function(t){return t.special?"\n      letter-spacing: -5.75vw;\n      margin-left: -9vw;\n      font-size: 41.25vw;\n  ":"\n      margin-right: 2vw;\n      letter-spacing: -2.3vw;\n      font-size: 15vw;\n      @media (max-width: "+Object(o.a)(a.a.sm)+"em) {\n        font-size: 33vw;\n        margin-left: -4.5vw;\n      }\n  "})," ",(function(t){return t.hide?"\n      opacity:100%;\n      animation: fadeout2 0.5s ease-out 0.2s forwards!important;\n      @keyframes fadeout2 {\n        0% {\n          opacity: 100%;\n        }\n        99% {\n          display: block;\n          opacity: 0;\n          transform:translateY(5vh)\n        }\n        100% {\n          opacity: 0;\n          display: none;\n        }\n      }\n  ":"\n\n  "}));e.a=function(t){var e=t.children,n=t.special,r=t.hide;return Object(i.d)(c,{special:n,hide:r},e)}},"NqE+":function(t,e,n){"use strict";var r=n("wTIg"),a=(n("q1tI"),n("qR4i")),o=n("qKvR"),i=Object(r.a)("div",{target:"e1aptqz40"})("display:block;flex:1;position:relative;padding-top:",a.c.containerPadding,"rem;padding-bottom:4rem;background-color:",a.b.black,";border-top:1px solid ",a.b.altWhite.trans,";");e.a=function(t){var e=t.children,n=t.className;return Object(o.d)(i,{id:"1",className:n},e)}},Nr18:function(t,e,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),o=n("ne8i");t.exports=function(t){for(var e=r(this),n=o(e.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),s=i>2?arguments[2]:void 0,d=void 0===s?n:a(s,n);d>c;)e[c++]=t;return e}},OA2C:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("wTIg"),a=Object(r.a)("div",{target:"exyx49t0"})("display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));grid-gap:0.5rem;margin-top:8rem;margin-bottom:12rem;grid-auto-rows:1fr;",(function(t){return t.cssClass||""}))},QeBL:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),a=n.n(r),o=n("qKvR"),i=n("NqE+"),c=n("TBFr"),s=n("+ego"),d=n("wTIg"),l=Object(d.a)("a",{target:"eh70qwu0"})({name:"9ntnfi",styles:"display:inline-block;text-transform:uppercase;color:#ff005a;text-decoration:none;border:2px solid;background:transparent;padding:10px 40px;font-size:14px;font-weight:700;-webkit-transition:0.2s all;transition:0.2s all;:hover{color:#8400ff;}"}),u=function(t){var e=t.children,n=t.to,r=t.newWindow;return Object(o.d)(l,{href:n,target:r?"href":""}," ",e," ")},f=n("9Zgd"),h=n("f3oF"),b=n("oi80"),p=n("Ml3z"),v=n("qR4i"),g=Object(d.a)("a",{target:"ejq93tv0"})("width:6vmin;height:6vmin;box-sizing:border-box;position:absolute;bottom:6vmin;left:47vw;transform:rotate(135deg);opacity:0%;cursor:pointer;&::before{content:'';width:100%;height:100%;border-width:0.8vmin 0.8vmin 0 0;border-style:solid;border-color:#fafafa;transition:0.2s ease;display:block;transform-origin:100% 0;}&:after{content:'';float:left;position:relative;top:-100%;width:100%;height:100%;border-width:0 0.8vmin 0 0;border-style:solid;border-color:#fafafa;transform-origin:100% 0;transition:0.2s ease;}&:hover::after{transform:rotate(45deg);border-color:",v.b.red,";height:120%;margin-top:0.6vmin;}&:hover::before{border-color:",v.b.red,";transform:scale(0.8);}&:hover{opacity:100%;animation:none;}@keyframes fade-in{0%{opacity:0%;}100%{opacity:80%;}}",(function(t){return[t.hovered?"animation:none;opacity:100%":" animation: fade-in 6s ease-in 1s 1 forwards;"]})),m=function(t){var e=t.trigger,n=r.useState(!1),a=n[0],i=n[1];return Object(o.d)(g,{hovered:a,onMouseEnter:function(){return i(!0)},onClick:function(){e(!0),setTimeout((function(){window.location.href="#1"}),300)}})},w=(n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("C9qv")),j=n.n(w);function y(){var t=window;return{width:t.innerWidth,height:t.innerHeight}}n("bHtr");var O=function(t){if(t.current){var e=t.current,n=e.getContext("2d");if(n){var r=function(t){var e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e}(n),a=getComputedStyle(e).getPropertyValue("width").slice(0,-2),o=getComputedStyle(e).getPropertyValue("height").slice(0,-2);return e.width=parseInt(a,10)*r,e.height=parseInt(o,10)*r,e.style.width=a+"px",e.style.height=o+"px",{ok:!0,ctx:n,canvas:e}}}return{ok:!1,ctx:void 0,canvas:void 0}};function x(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=t[Symbol.iterator]()).next.bind(n)}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var I=Object(d.a)("canvas",{target:"er4rr3t0"})({name:"1f0ju4x",styles:"position:absolute;z-index:-1;"}),M=a.a.memo((function(){var t=Object(r.useRef)(null),e="undefined"!=typeof window&&window?function(){var t=Object(r.useState)(y()),e=t[0],n=t[1];return Object(r.useEffect)((function(){function t(){n(y())}return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),e}():{height:0,width:0},n=e.height,a=e.width,i=Object(r.useState)(void 0),c=i[0],s=i[1],d=Object(r.useState)(void 0),l=d[0],u=d[1];return Object(r.useEffect)((function(){var e,n,r,a;e=O(t),n=e.ok,r=e.canvas,a=e.ctx,n&&(s((function(t){return r})),u((function(t){return a})))}),[n,a]),Object(r.useEffect)((function(){if(c&&l){var t=0,e=[];return function(){j.a.seed(Math.random());for(var n=1;n<=100;n+=1){var r={x:Math.random()*c.width,y:Math.random()*c.height,a:0};e.push(r),e.push({x:r.x,y:r.y,a:Math.PI}),e.push({x:r.x,y:r.y,a:2*Math.PI})}!function n(){for(var r,a=x(e);!(r=a()).done;){var o=r.value,i=j.a.perlin2(.02*o.x,.02*o.y);l.fillStyle="white",l.fillRect(o.x,o.y,1.5,1.5);var s=2*i*Math.PI+o.a;o.x+=10*Math.cos(s),o.y+=10*Math.sin(s),(o.x<0||o.x>c.width||o.y<0||o.y>c.height)&&(o.x=Math.random()*c.width,o.y=Math.random()*c.height)}t=requestAnimationFrame(n)}()}(),function(){cancelAnimationFrame(t)}}}),[c,l]),0!==n?Object(o.d)(I,{ref:t,height:Math.floor(.8*n),width:a}):Object(o.d)("span",null)})),C=n("zS2K"),q=Object(d.a)("div",{target:"e16wgt2a0"})({name:"1i9ktc8",styles:"background:black;padding:1em 2em;"}),R=function(t){var e=t.children;return Object(o.d)(q,null,e)},S=function(t){var e=t.hide,n=t.trigger;return Object(o.d)(f.d,null,Object(o.d)(b.a,null,Object(o.d)(M,null),Object(o.d)(R,null,Object(o.d)(f.a,null,Object(o.d)(p.a,{special:!0,hide:e},"Ross")),Object(o.d)(p.a,{hide:e},Object(o.d)(f.b,null,"Ross"),"MacD"),Object(o.d)(C.a,{hide:e},"Full-Stack developer"))),Object(o.d)(m,{trigger:n}))},z=[0];function P(t){var e=function(t){var e=void 0===t?{}:t,n=e.root,a=void 0===n?null:n,o=e.rootMargin,i=void 0===o?"0px":o,c=e.threshold,s=void 0===c?z:c,d=Object(r.useRef)(null),l=Object(r.useState)(),u=l[0],f=l[1];return Object(r.useEffect)((function(){return function(){var t=d.current;t&&t.disconnect()}}),[]),[Object(r.useCallback)((function(t){var e=(d.current||(d.current=new IntersectionObserver((function(t){var e=t[0];f(e)}),{root:a,rootMargin:i,threshold:s})),d.current);e.disconnect(),t&&e.observe(t)}),[a,i,s]),{entry:u}]}(t),n=e[0],a=e[1].entry;return[n,{isVisible:Boolean(a&&a.isIntersecting)}]}var B=function(t){var e=t.children,n=t.trigger,a=P(),i=a[0],c=a[1].isVisible;return r.useEffect((function(){n(c)}),[c]),Object(o.d)(f.e,{ref:i},e)},E={altBG:"\n    background-color: "+v.b.white+";\n  ",redBG:"\n  background-color: "+v.b.red+";\n\n",flexCenter:"\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  ",minContainer:"\n  margin-top: 4rem;\n  margin-bottom:6rem;\n  "},T=n("OA2C"),A=n("Wbzz"),N={name:"1dcc3as",styles:"display:inline-block;text-transform:uppercase;color:#8400ff;text-decoration:none;border:2px solid;background:transparent;padding:10px 40px;font-size:14px;font-weight:700;-webkit-transition:0.2s all;transition:0.2s all;:hover{color:#8400ff;}"},F=function(t){var e=t.children,n=t.to;return Object(o.d)(A.a,{to:n,css:N},e)};e.default=function(){var t=r.useState(!1),e=t[0],n=t[1];return Object(o.d)(s.a,null,Object(o.d)(f.c,null,Object(o.d)(S,{hide:e,trigger:n})),Object(o.d)(i.a,null,Object(o.d)(c.a,null,Object(o.d)(T.a,null,Object(o.d)(h.a,{span:3},Object(o.d)("h1",null,"Hi, I'm ",Object(o.d)(B,{trigger:n},"Ross MacDonald ")),Object(o.d)("p",null,"I develop websites, software and apps"),Object(o.d)("p",null,"Im an Irish full-stack developer who has experience with many technologies. Creating apps as both a leader of development and in a supporting capacity."),Object(o.d)("p",null,"Here are some projects I have worked on",Object(o.d)("span",{role:"img","aria-label":"laptop"},"💻")),Object(o.d)(u,{to:"https://github.com/RossmacD",newWindow:!0},"See More")),Object(o.d)(h.a,{span:3,cssClass:E.flexCenter}))),Object(o.d)("div",{css:Object(o.c)(E.redBG)},Object(o.d)(c.a,{cssClass:E.redBG},Object(o.d)(T.a,{cssClass:E.minContainer},Object(o.d)(h.a,{span:6},Object(o.d)("h1",null,"Work"))))),Object(o.d)(T.a,null,Object(o.d)(h.a,{span:3,cssClass:E.flexCenter}),Object(o.d)(h.a,{span:3},Object(o.d)("h1",null,"You do the Full-stack?"),Object(o.d)("p",null,"Yep, I have experience with front-end, backend and the networking side of things"),Object(o.d)("p",null,"I have experience in many languages like Typescript, Javascript, Node, Java, PHP and Rust. I know technologies like React.js, React Native, Vue.js, Socket.IO, Pusher, MongoDb and MySQL / Postgres. In fact I made this site using React.js and Gatsby!"),Object(o.d)("p",null,"I can also help with deployment, having used continous integration workflows and having some experience with docker and linux"))),Object(o.d)("div",{css:Object(o.c)(E.redBG)},Object(o.d)(c.a,{cssClass:E.redBG},Object(o.d)(T.a,{cssClass:E.minContainer},Object(o.d)(h.a,{span:6},Object(o.d)("h1",null,Object(o.d)(f.e,null,"Contact Me")),Object(o.d)("p",null,"Let's start working!"),Object(o.d)(F,{to:"contact"},"Contact Now")))))))}},TBFr:function(t,e,n){"use strict";var r=n("wTIg"),a=(n("q1tI"),n("N7jl")),o=n("qR4i"),i=n("qKvR"),c=Object(r.a)("div",{target:"e1xde2dj0"})("overflow:hidden;margin-left:auto;margin-right:auto;max-width:",Object(a.a)(o.e.lg),"em;width:auto;",(function(t){return t.cssClass||""}));e.a=function(t){var e=t.children,n=t.cssClass;return Object(i.d)(c,{cssClass:n},e)}},bHtr:function(t,e,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},f3oF:function(t,e,n){"use strict";var r=n("wTIg"),a=(n("q1tI"),n("qKvR")),o=Object(r.a)("div",{target:"e16xvjt00"})("grid-column:span ",(function(t){return t.span}),";",(function(t){return t.cssClass||""}));e.a=function(t){var e=t.children,n=t.cssClass,r=t.span;return Object(a.d)(o,{cssClass:n,span:r},e)}},oi80:function(t,e,n){"use strict";n("q1tI");var r=n("9Zgd"),a=n("qKvR");e.a=function(t){var e=t.children;return Object(a.d)(r.f,null,e)}},zS2K:function(t,e,n){"use strict";var r=n("wTIg"),a=n("q1tI"),o=n("N7jl"),i=n("qR4i"),c=n("qKvR"),s=Object(r.a)("h2",{target:"e58m7wn0"})("margin-top:-1vw;color:",i.b.red,";margin-bottom:0px;text-transform:uppercase;font-size:5vw;text-align:center;font-weight:700;@media (max-width:",Object(o.a)(i.a.sm),"em){margin-left:-1vw;font-size:14vw;margin-top:2vh;}",(function(t){return t.hide?"\n      opacity:100%;\n      animation: fadeout 0.5s ease-out forwards!important;\n      @keyframes fadeout {\n        0% {\n          opacity: 100%;\n        }\n        99% {\n          display: block;\n          opacity: 0;\n          transform:translateY(-5vh)\n        }\n        100% {\n          opacity: 0;\n          display: none;\n        }\n      }\n    ":"\n      opacity:0%;\n      animation: fadein3 0.5s ease-out 0.5s forwards!important;\n          @keyframes fadein3 {\n            0% {\n              opacity: 0;\n              display: none;\n            }\n            1% {\n              display: block;\n              opacity: 0;\n              transform:translateY(-5vh)\n            }\n            100% {\n              opacity: 100%;\n\n            }\n          }\n    "}));e.a=function(t){var e=t.children,n=t.hide;return a.useEffect((function(){}),[n]),Object(c.d)(s,{hide:n},e)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-5473c31aee898253d607.js.map