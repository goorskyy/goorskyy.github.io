!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({"+waJ":function(){},"2Y+P":function(e,t,n){"use strict";(function(e){function r(t){return e("a",{class:"link",href:t.href},t.title)}n.d(t,"a",(function(){return r}));n("9V1R")}).call(this,n("hosL").h)},"9V1R":function(){},"AM+F":function(e,t,n){"use strict";(function(e){function r(t){const n=[];for(let r=0;r<5;r++){n.push(e("span",{class:`score ${r<t.score?"score--active":""}`}))}return n}n.d(t,"a",(function(){return r}));n("DFEF")}).call(this,n("hosL").h)},CCTK:function(e,t,n){"use strict";(function(e){function r(t){return e("p",{class:"section__title"},t.title)}n.d(t,"a",(function(){return r}));n("hf3f")}).call(this,n("hosL").h)},DFEF:function(){},DqCW:function(e,t,n){"use strict";(function(e){function r(t){return e("div",{class:"timeline__container"},e("div",{class:"flex__space-between"},e("span",{class:"timeline__title"},t.title),e("span",{class:"timeline__location"},t.location)),e("p",{class:"timeline__period"},t.startYear,"-",t.endYear),e("p",{class:"timeline__description"},t.description))}n.d(t,"a",(function(){return r}));n("vG3n")}).call(this,n("hosL").h)},LdiY:function(e,t,n){"use strict";(function(e){function r(t){return e("div",{class:"page-title__container"},e("h2",{class:"page-title__text"},t.title))}n.d(t,"a",(function(){return r}));n("+waJ")}).call(this,n("hosL").h)},QfWi:function(e,t,n){"use strict";n.r(t),function(e,r){function o(){return e(r,null,e("div",{class:"resume resume__container"},e(l.a,{title:"Michał Górski"}),e("div",{class:"resume__left-container"},e(i.a,{title:"Details"}),e("p",{class:"label"},"Phone"),e("p",{class:"text"},"+48609203699"),e("p",{class:"label"},"Email"),e("p",{class:"text"},"michal.gorski.it@gmail.com"),e(i.a,{title:"Links"}),e(u.a,{href:"https://github.com/goorskyy",title:"GitHub"}),e(u.a,{href:"https://www.linkedin.com/in/mgorskyy/",title:"Linkedin"}),e(i.a,{title:"Skills"}),e("p",{class:"label"},"Java"),e(c.a,{score:"3"}),e(i.a,{title:"Languages"})),e("div",{class:"resume__right-container"},e(i.a,{title:"Employment history"}),e(_.a,{title:"Solwit",startYear:"2016",endYear:"2018",location:"Gdańsk"}),e(i.a,{title:"Education"}),e(_.a,{title:"Masters`s, University of Gdansk",startYear:"2013",endYear:"2018",location:"Gdańsk"}))))}n.d(t,"default",(function(){return o}));var l=n("LdiY"),i=(n("h3ov"),n("CCTK")),_=n("DqCW"),u=n("2Y+P"),c=n("AM+F")}.call(this,n("hosL").h,n("hosL").Fragment)},h3ov:function(){},hf3f:function(){},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var r,o,l,_={};for(l in t)"key"==l?r=t[l]:"ref"==l?o=t[l]:_[l]=t[l];if(arguments.length>2&&(_.children=arguments.length>3?M.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===_[l]&&(_[l]=e.defaultProps[l]);return i(e,_,r,o,null)}function i(e,t,n,r,o){var l={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++U:o};return null!=W.vnode&&W.vnode(l),l}function _(){return{current:null}}function u(e){return e.children}function c(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function a(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return a(e)}}function f(e){(!e.__d&&(e.__d=!0)&&O.push(e)&&!p.__r++||R!==W.debounceRendering)&&((R=W.debounceRendering)||N)(p)}function p(){for(var e;p.__r=O.length;)e=O.sort((function(e,t){return e.__v.__b-t.__v.__b})),O=[],e.some((function(e){var t,n,o,l,i,_;e.__d&&(i=(l=(t=e).__v).__e,(_=t.__P)&&(n=[],(o=r({},l)).__v=l.__v+1,C(_,l,o,t.__n,void 0!==_.ownerSVGElement,null!=l.__h?[i]:null,n,null==i?s(l):i,l.__h),x(n,l),l.__e!=i&&a(l)))}))}function d(e,t,n,r,o,l,_,c,a,f){var p,d,v,m,g,k,b,x=r&&r.__k||G,P=x.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(m=n.__k[p]=null==(m=t[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?i(null,m,null,null,m):Array.isArray(m)?i(u,{children:m},null,null,null):m.__b>0?i(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=x[p])||v&&m.key==v.key&&m.type===v.type)x[p]=void 0;else for(d=0;d<P;d++){if((v=x[d])&&m.key==v.key&&m.type===v.type){x[d]=void 0;break}v=null}C(e,m,v=v||j,o,l,_,c,a,f),g=m.__e,(d=m.ref)&&v.ref!=d&&(b||(b=[]),v.ref&&b.push(v.ref,null,m),b.push(d,m.__c||g,m)),null!=g?(null==k&&(k=g),"function"==typeof m.type&&null!=m.__k&&m.__k===v.__k?m.__d=a=h(m,a,e):a=y(e,m,v,x,g,a),f||"option"!==n.type?"function"==typeof n.type&&(n.__d=a):e.value=""):a&&v.__e==a&&a.parentNode!=e&&(a=s(v))}for(n.__e=k,p=P;p--;)null!=x[p]&&("function"==typeof n.type&&null!=x[p].__e&&x[p].__e==n.__d&&(n.__d=s(r,p+1)),L(x[p],x[p]));if(b)for(p=0;p<b.length;p++)S(b[p],b[++p],b[++p])}function h(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?h(o,t,n):y(n,o,o,e.__k,o.__e,t));return t}function v(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){v(e,t)})):t.push(e)),t}function y(e,t,n,r,o,l){var i,_,u;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),i=null;else{for(_=l,u=0;(_=_.nextSibling)&&u<r.length;u+=2)if(_==o)break e;e.insertBefore(o,l),i=l}return void 0!==i?i:o.nextSibling}function m(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||H.test(t)?n:n+"px"}function g(e,t,n,r,o){var l;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||m(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||m(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=n,n?r||e.addEventListener(t,l?b:k,l):e.removeEventListener(t,l?b:k,l);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function k(e){this.l[e.type+!1](W.event?W.event(e):e)}function b(e){this.l[e.type+!0](W.event?W.event(e):e)}function C(e,t,n,o,l,i,_,s,a){var f,p,h,v,y,m,g,k,b,C,x,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(a=n.__h,s=t.__e=n.__e,t.__h=null,i=[s]),(f=W.__b)&&f(t);try{e:if("function"==typeof S){if(k=t.props,b=(f=S.contextType)&&o[f.__c],C=f?b?b.props.value:f.__:o,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in S&&S.prototype.render?t.__c=p=new S(k,C):(t.__c=p=new c(k,C),p.constructor=S,p.render=w),b&&b.sub(p),p.props=k,p.state||(p.state={}),p.context=C,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=S.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,S.getDerivedStateFromProps(k,p.__s))),v=p.props,y=p.state,h)null==S.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==S.getDerivedStateFromProps&&k!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,C)||t.__v===n.__v){p.props=k,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&_.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=C,p.props=k,p.state=p.__s,(f=W.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),x=null!=f&&f.type===u&&null==f.key?f.props.children:f,d(e,Array.isArray(x)?x:[x],t,n,o,l,i,_,s,a),p.base=t.__e,t.__h=null,p.__h.length&&_.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=P(n.__e,t,n,o,l,i,_,a);(f=W.diffed)&&f(t)}catch(e){t.__v=null,(a||null!=i)&&(t.__e=s,t.__h=!!a,i[i.indexOf(s)]=null),W.__e(e,t,n)}}function x(e,t){W.__c&&W.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){W.__e(e,t.__v)}}))}function P(e,t,n,r,l,i,_,u){var c,a,f,p=n.props,h=t.props,v=t.type,y=0;if("svg"===v&&(l=!0),null!=i)for(;y<i.length;y++)if((c=i[y])&&(c===e||(v?c.localName==v:3==c.nodeType))){e=c,i[y]=null;break}if(null==e){if(null===v)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,h.is&&h),i=null,u=!1}if(null===v)p===h||u&&e.data===h||(e.data=h);else{if(i=i&&M.call(e.childNodes),a=(p=n.props||j).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!u){if(null!=i)for(p={},y=0;y<e.attributes.length;y++)p[e.attributes[y].name]=e.attributes[y].value;(f||a)&&(f&&(a&&f.__html==a.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,r,o){var l;for(l in n)"children"===l||"key"===l||l in t||g(e,l,null,n[l],r);for(l in t)o&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||g(e,l,t[l],n[l],r)}(e,h,p,l,u),f)t.__k=[];else if(y=t.props.children,d(e,Array.isArray(y)?y:[y],t,n,r,l&&"foreignObject"!==v,i,_,i?i[0]:n.__k&&s(n,0),u),null!=i)for(y=i.length;y--;)null!=i[y]&&o(i[y]);u||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===v&&!y)&&g(e,"value",y,p.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&g(e,"checked",y,p.checked,!1))}return e}function S(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){W.__e(e,n)}}function L(e,t,n){var r,l;if(W.unmount&&W.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||S(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){W.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&L(r[l],t,"function"!=typeof e.type);n||null==e.__e||o(e.__e),e.__e=e.__d=void 0}function w(e,t,n){return this.constructor(e,n)}function E(e,t,n){var r,o,i;W.__&&W.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,i=[],C(t,e=(!r&&n||t).__k=l(u,null,[e]),o||j,j,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?M.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r),x(i,e)}function D(e,t){E(e,t,D)}function T(e,t,n){var o,l,_,u=r({},e.props);for(_ in t)"key"==_?o=t[_]:"ref"==_?l=t[_]:u[_]=t[_];return arguments.length>2&&(u.children=arguments.length>3?M.call(arguments,2):n),i(e.type,u,o||e.key,l||e.ref,null)}function A(e,t){var n={__c:t="__cC"+Y++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(f)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return E})),n.d(t,"hydrate",(function(){return D})),n.d(t,"createElement",(function(){return l})),n.d(t,"h",(function(){return l})),n.d(t,"Fragment",(function(){return u})),n.d(t,"createRef",(function(){return _})),n.d(t,"isValidElement",(function(){return F})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return T})),n.d(t,"createContext",(function(){return A})),n.d(t,"toChildArray",(function(){return v})),n.d(t,"options",(function(){return W}));var M,W,U,F,O,N,R,Y,j={},G=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;M=G.slice,W={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},U=0,F=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(r({},n),this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=u,O=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,Y=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:l,hydrate:i}=r,_=e=>e&&e.default?e.default:e;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof _(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=_(n("QfWi")),r={};const i=document.querySelector('[type="__PREACT_CLI_DATA__"]');i&&(r=JSON.parse(decodeURI(i.innerHTML)).preRenderData||r);r.url&&(u=r.url);var u;e=l(o(t,{CLI_DATA:{preRenderData:r}}),document.body,e)};0,t()}},vG3n:function(){}});
//# sourceMappingURL=bundle.3cf66.esm.js.map