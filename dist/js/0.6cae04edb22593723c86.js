webpackJsonp([0],Array(267).concat([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(311),i=r(o),u=n(313),c=r(u),a=n(312),f=r(a),s=n(75),l=n(352),p=(r(l),n(346)),m=r(p),d=function(t){function e(n){(0,i.default)(this,e);var r=(0,c.default)(this,t.call(this,n));return r.state={},r}return(0,f.default)(e,t),e.prototype.render=function(){return s.React.createElement("div",{className:"cd-full-width"},s.React.createElement("div",{className:"container-fluid js-tm-page-content tm-page-pad","data-page-no":"1"},s.React.createElement("div",{className:"row"},s.React.createElement("div",{className:"tm-3-col-container"},m.default.map(function(t,e){return s.React.createElement("div",{key:e,className:"col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox"},s.React.createElement("div",{className:"text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner"},s.React.createElement("i",{className:"fa fa-4x fa-pagelines tm-home-fa"},t.title),s.React.createElement("h2",{className:"tm-text-title"},t.subtitle),s.React.createElement("p",{className:"tm-text"},s.React.createElement("a",{href:"",target:"_parent"}))))}),s.React.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox"},s.React.createElement("div",{className:"text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner"},s.React.createElement("i",{className:"fa fa-4x fa-bicycle tm-home-fa"}),s.React.createElement("h2",{className:"tm-text-title"},"Welcome!"),s.React.createElement("p",{className:"tm-text"}))),s.React.createElement("div",{className:"col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox"},s.React.createElement("div",{className:"text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner"},s.React.createElement("i",{className:"fa fa-4x fa-plane tm-home-fa"}),s.React.createElement("h2",{className:"tm-text-title"},"Stay relaxed"),s.React.createElement("p",{className:"tm-text"})))))))},e}(s.Page);e.default=d},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(323),o=n(283);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports=!n(279)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(273),o=n(281);t.exports=n(271)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(275),o=n(300),i=n(293),u=Object.defineProperty;e.f=n(271)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(291)("wks"),o=n(282),i=n(268).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,e,n){var r=n(277);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(268),o=n(276),i=n(298),u=n(272),c="prototype",a=function(t,e,n){var f,s,l,p=t&a.F,m=t&a.G,d=t&a.S,y=t&a.P,h=t&a.B,v=t&a.W,b=m?o:o[e]||(o[e]={}),x=b[c],g=m?r:d?r[e]:(r[e]||{})[c];m&&(n=e);for(f in n)s=!p&&g&&void 0!==g[f],s&&f in b||(l=s?g[f]:n[f],b[f]=m&&"function"!=typeof g[f]?n[f]:h&&s?i(l,r):v&&g[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):y&&"function"==typeof l?i(Function.call,l):l,y&&((b.virtual||(b.virtual={}))[f]=l,t&a.R&&x&&!x[f]&&u(x,f,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(305),o=n(284);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,n){var r=n(275),o=n(329),i=n(284),u=n(290)("IE_PROTO"),c=function(){},a="prototype",f=function(){var t,e=n(299)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(322).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),f=t.F;r--;)delete f[a][i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[a]=r(t),n=new c,c[a]=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(273).f,o=n(269),i=n(274)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(291)("keys"),o=n(282);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(268),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(277);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(268),o=n(276),i=n(286),u=n(295),c=n(273).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(274)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(310),i=r(o),u=n(309),c=r(u),a="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};e.default="function"==typeof c.default&&"symbol"===a(i.default)?function(t){return"undefined"==typeof t?"undefined":a(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":"undefined"==typeof t?"undefined":a(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(318);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(277),o=n(268).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(271)&&!n(279)(function(){return 7!=Object.defineProperty(n(299)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(286),o=n(278),i=n(306),u=n(272),c=n(269),a=n(285),f=n(325),s=n(289),l=n(331),p=n(274)("iterator"),m=!([].keys&&"next"in[].keys()),d="@@iterator",y="keys",h="values",v=function(){return this};t.exports=function(t,e,n,b,x,g,_){f(n,e,b);var w,O,S,E=function(t){if(!m&&t in M)return M[t];switch(t){case y:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},j=e+" Iterator",P=x==h,N=!1,M=t.prototype,R=M[p]||M[d]||x&&M[x],T=R||E(x),k=x?P?E("entries"):T:void 0,A="Array"==e?M.entries||R:R;if(A&&(S=l(A.call(new t)),S!==Object.prototype&&(s(S,j,!0),r||c(S,p)||u(S,p,v))),P&&R&&R.name!==h&&(N=!0,T=function(){return R.call(this)}),r&&!_||!m&&!N&&M[p]||u(M,p,T),a[e]=T,a[j]=v,x)if(w={values:P?T:E(h),keys:g?T:E(y),entries:k},_)for(O in w)O in M||i(M,O,w[O]);else o(o.P+o.F*(m||N),e,w);return w}},function(t,e,n){var r=n(288),o=n(281),i=n(270),u=n(293),c=n(269),a=n(300),f=Object.getOwnPropertyDescriptor;e.f=n(271)?f:function(t,e){if(t=i(t),e=u(e,!0),a)try{return f(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(305),o=n(284).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(269),o=n(270),i=n(320)(!1),u=n(290)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),a=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){t.exports=n(272)},function(t,e,n){t.exports={default:n(314),__esModule:!0}},function(t,e,n){t.exports={default:n(315),__esModule:!0}},function(t,e,n){t.exports={default:n(316),__esModule:!0}},function(t,e,n){t.exports={default:n(317),__esModule:!0}},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(308),i=r(o),u=n(307),c=r(u),a=n(296),f=r(a);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":(0,f.default)(e)));t.prototype=(0,c.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(296),i=r(o);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){n(338);var r=n(276).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){n(339),t.exports=n(276).Object.setPrototypeOf},function(t,e,n){n(342),n(340),n(343),n(344),t.exports=n(276).Symbol},function(t,e,n){n(341),n(345),t.exports=n(295).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(270),o=n(335),i=n(334);t.exports=function(t){return function(e,n,u){var c,a=r(e),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if(c=a[s++],c!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(280),o=n(304),i=n(288);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),a=i.f,f=0;c.length>f;)a.call(t,u=c[f++])&&e.push(u);return e}},function(t,e,n){t.exports=n(268).document&&document.documentElement},function(t,e,n){var r=n(297);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(297);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(287),o=n(281),i=n(289),u={};n(272)(u,n(274)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(280),o=n(270);t.exports=function(t,e){for(var n,i=o(t),u=r(i),c=u.length,a=0;c>a;)if(i[n=u[a++]]===e)return n}},function(t,e,n){var r=n(282)("meta"),o=n(277),i=n(269),u=n(273).f,c=0,a=Object.isExtensible||function(){return!0},f=!n(279)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!a(t))return"F";if(!e)return"E";s(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!a(t))return!0;if(!e)return!1;s(t)}return t[r].w},m=function(t){return f&&d.NEED&&a(t)&&!i(t,r)&&s(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:m}},function(t,e,n){var r=n(273),o=n(275),i=n(280);t.exports=n(271)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,a=0;c>a;)r.f(t,n=u[a++],e[n]);return t}},function(t,e,n){var r=n(270),o=n(303).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,e,n){var r=n(269),o=n(336),i=n(290)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(277),o=n(275),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(298)(Function.call,n(302).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(292),o=n(283);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),a=r(n),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(292),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(292),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(283);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(319),o=n(326),i=n(285),u=n(270);t.exports=n(301)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(278);r(r.S,"Object",{create:n(287)})},function(t,e,n){var r=n(278);r(r.S,"Object",{setPrototypeOf:n(332).set})},function(t,e){},function(t,e,n){"use strict";var r=n(333)(!0);n(301)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(268),o=n(269),i=n(271),u=n(278),c=n(306),a=n(328).KEY,f=n(279),s=n(291),l=n(289),p=n(282),m=n(274),d=n(295),y=n(294),h=n(327),v=n(321),b=n(324),x=n(275),g=n(270),_=n(293),w=n(281),O=n(287),S=n(330),E=n(302),j=n(273),P=n(280),N=E.f,M=j.f,R=S.f,T=r.Symbol,k=r.JSON,A=k&&k.stringify,C="prototype",F=m("_hidden"),I=m("toPrimitive"),W={}.propertyIsEnumerable,J=s("symbol-registry"),D=s("symbols"),L=s("op-symbols"),G=Object[C],K="function"==typeof T,z=r.QObject,B=!z||!z[C]||!z[C].findChild,Q=i&&f(function(){return 7!=O(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=N(G,e);r&&delete G[e],M(t,e,n),r&&t!==G&&M(G,e,r)}:M,Y=function(t){var e=D[t]=O(T[C]);return e._k=t,e},H=K&&"symbol"==typeof T.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof T},U=function(t,e,n){return t===G&&U(L,e,n),x(t),e=_(e,!0),x(n),o(D,e)?(n.enumerable?(o(t,F)&&t[F][e]&&(t[F][e]=!1),n=O(n,{enumerable:w(0,!1)})):(o(t,F)||M(t,F,w(1,{})),t[F][e]=!0),Q(t,e,n)):M(t,e,n)},q=function(t,e){x(t);for(var n,r=v(e=g(e)),o=0,i=r.length;i>o;)U(t,n=r[o++],e[n]);return t},V=function(t,e){return void 0===e?O(t):q(O(t),e)},X=function(t){var e=W.call(this,t=_(t,!0));return!(this===G&&o(D,t)&&!o(L,t))&&(!(e||!o(this,t)||!o(D,t)||o(this,F)&&this[F][t])||e)},Z=function(t,e){if(t=g(t),e=_(e,!0),t!==G||!o(D,e)||o(L,e)){var n=N(t,e);return!n||!o(D,e)||o(t,F)&&t[F][e]||(n.enumerable=!0),n}},$=function(t){for(var e,n=R(g(t)),r=[],i=0;n.length>i;)o(D,e=n[i++])||e==F||e==a||r.push(e);return r},tt=function(t){for(var e,n=t===G,r=R(n?L:g(t)),i=[],u=0;r.length>u;)!o(D,e=r[u++])||n&&!o(G,e)||i.push(D[e]);return i};K||(T=function(){if(this instanceof T)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(L,n),o(this,F)&&o(this[F],t)&&(this[F][t]=!1),Q(this,t,w(1,n))};return i&&B&&Q(G,t,{configurable:!0,set:e}),Y(t)},c(T[C],"toString",function(){return this._k}),E.f=Z,j.f=U,n(303).f=S.f=$,n(288).f=X,n(304).f=tt,i&&!n(286)&&c(G,"propertyIsEnumerable",X,!0),d.f=function(t){return Y(m(t))}),u(u.G+u.W+u.F*!K,{Symbol:T});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)m(et[nt++]);for(var et=P(m.store),nt=0;et.length>nt;)y(et[nt++]);u(u.S+u.F*!K,"Symbol",{for:function(t){return o(J,t+="")?J[t]:J[t]=T(t)},keyFor:function(t){if(H(t))return h(J,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!K,"Object",{create:V,defineProperty:U,defineProperties:q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt}),k&&u(u.S+u.F*(!K||f(function(){var t=T();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!H(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&b(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!H(e))return e}),r[1]=e,A.apply(k,r)}}}),T[C][I]||n(272)(T[C],I,T[C].valueOf),l(T,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(294)("asyncIterator")},function(t,e,n){n(294)("observable")},function(t,e,n){n(337);for(var r=n(268),o=n(272),i=n(285),u=n(274)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var f=c[a],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=[{createTime:"2017/06/28",author:"linwei0201",title:"git配置及命令介绍",subtitle:"列出git常用命令及mac bash中便捷配置",filename:"git",path:"git.md",summary:'一、设置Shell中Git的颜色和当前所在分支: 1. cd ~: 2. vi .bashrc: 3. 设置文件内容如下，并保存: 4. 执行 source ./.bashrc: 5. 如果是mac，再执行如下命令,每次开机才会自动生效: 二、设置Git常用别名: "1./etc/gitconfig 文件：包含了适用于系统所有用户和所有库的值。如果你传递参数选项’--system’ 给 git config，它将明确的读和写这个文件。 2.~/.gitconfig 文件 ：具体到你的用户。你可以...',component:function(){return n.e(6).then(n.bind(null,347))}},{createTime:"2017/06/28",author:"linwei0201",title:"mac快捷键",subtitle:"mac各种操作快捷键介绍",filename:"mac",path:"mac.md",summary:'"⌘（command）、⌥（option）、⇧（shift）、⇪（caps lock）、⌃（control）、↩（return）、⌅（enter）" Command+M:最小化窗口 Command+T: 在浏览器中打开新的选项卡 Command+W: 关闭窗口 Command+Q: 退出程序 Command+Option+I 快捷键打开开发人员工具 Command+Option+J 直接进入 JavaScript 控制台 command+R： 刷新页面 Command+~ 用于同一个应用程序的多...',component:function(){return n.e(5).then(n.bind(null,348))}},{createTime:"2017/06/28",author:"linwei0201",title:"sublime introduction",subtitle:"sublime introduction, installing and using",filename:"sublime",path:"sublime.md",summary:"Submitted by Mike Hopper, WDI Atlanta. The following lesson should take about 75 minutes and includes a lab for\nthe students to practice some of the powerful editing features of Sublime. The main purpose of this lesson is to get students comfortable ...",component:function(){return n.e(4).then(n.bind(null,349))}}]},,,,,,function(t,e){}]));