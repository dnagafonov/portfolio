!function(e){function t(t){for(var n,i,o=t[0],s=t[1],l=t[2],m=0,p=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);p.length;)p.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={0:0},c=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;c.push([135,1]),a()}({135:function(e,t,a){a(136),e.exports=a(360)},336:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){},339:function(e,t,a){},340:function(e,t,a){},341:function(e,t,a){},342:function(e,t,a){},343:function(e,t,a){},344:function(e,t,a){},345:function(e,t,a){},346:function(e,t,a){},347:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){},350:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){},356:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){},359:function(e,t,a){},360:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(64),i=a.n(c),o=a(134),s=a(2),l=a.n(s),u=(a(336),function(e){var t=e.name,a={className:"header__element",to:e.to,smooth:!0,duration:500};return r.a.createElement(o.Link,a,t)});u.proptypes={name:l.a.string.isRequired,to:l.a.string.isRequired};var m=u;a(337);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var f=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"wrapper"},[{name:"Home",to:"me"},{name:"About me",to:"about-me"},{name:"Skills",to:"skills"},{name:"Portfolio",to:"portfolio"},{name:"Contacts",to:"contacts"}].map((function(e){return r.a.createElement(m,p({},e,{key:e.to}))}))))},d=(a(338),a(339),function(){return r.a.createElement("div",{className:"divider divider_gray"},r.a.createElement("div",{className:"wrapper"}))}),v=(a(340),function(e){return r.a.createElement("section",{className:"layout-3"},e.children)});v.proptypes={children:l.a.node.isRequired};var h=v,y=(a(341),function(){return r.a.createElement("article",{className:"select-language"},"ENG|RU")}),g=(a(342),a(343),function(){return r.a.createElement("article",{className:"me__photo"},r.a.createElement("div",{className:"wrapper"}))}),E=function(){return r.a.createElement("article",{className:"me"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(h,null,r.a.createElement("h1",{className:"me__name"},"Denis Agafonov"),r.a.createElement("div",{className:"me__info"},r.a.createElement("p",null,"Junior Front-end developer"),r.a.createElement("p",null,"18 years old, Minsk")),r.a.createElement(y,null)),r.a.createElement(g,null)))},b=(a(344),function(e){var t=e.msg;return r.a.createElement("p",{className:"about-me__note"},t)}),N=(a(345),function(e){var t=e.notes;return r.a.createElement("section",{className:"about-me__notes"},t.map((function(e){return r.a.createElement(b,{key:e,msg:e})})))});N.proptypes={notes:l.a.arrayOf(l.a.string).isRequired};var _=N,R=(a(346),function(){return r.a.createElement("article",{className:"about-me"},r.a.createElement("div",{className:"wrapper about-me__wrapper"},r.a.createElement("h2",{className:"h2"},"About me"),r.a.createElement(_,{notes:["Hello, I'm Denis – JavaScript developer from Minsk. I'm interested in developing and everything connected with it.","Ready to implement excellent projects with wonderful people."]})))}),k=(a(347),a(348),a.p+"7da74f26c9b64452c75366207efcec70.svg"),w=a.p+"0e4fb1c819ac4c060c92343147d4ccf7.svg",q=a.p+"96aa3e0f7b119f6ed564d1bd0b6c4d76.svg",j=a.p+"753c074260c28fd2c006e8a0bb5bdfe2.svg",O=(a(349),function(e){var t=e.name,a=e.path;return r.a.createElement("img",{className:"technology__photo",src:a,alt:t,width:"80",height:"80",align:"middle"})});O.proptypes={path:l.a.string.isRequired};var S=O,x=(a(350),function(e){var t=e.name;return r.a.createElement("div",{className:"technology__name"},t)});x.proptypes={name:l.a.string.isRequired};var A=x,P=a.p+"488a96ddd51392ef8aa7963f7b24c912.svg";function M(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return I(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a(351);var J=function(e){var t,a=e.stars;return r.a.createElement("section",{className:"rate"},(t=a,Array(5).fill(0).reduce((function(e){return{count:e.count-=1,arr:e.count>0?[].concat(M(e.arr),[1]):[].concat(M(e.arr),[0])}}),{count:t+1,arr:[]}).arr).map((function(e,t){return e?r.a.createElement("img",{className:"star__active",key:t,src:P}):r.a.createElement("img",{className:"star",key:t,src:P})})))};J.proptypes={stars:l.a.number.isRequired};var T=J,C=(a(352),function(e){var t=e.name,a=e.stars,n=e.path;return r.a.createElement("article",{className:"technology"},r.a.createElement(S,{name:t,path:n}),r.a.createElement(A,{name:t}),r.a.createElement(T,{stars:a}))});C.proptypes={name:l.a.string.isRequired,path:l.a.string.isRequired,stars:l.a.number.isRequired};var D=C,F=(a(353),function(e){var t=e.notes;return r.a.createElement("section",{className:"skills__notes"},t.map((function(e){return r.a.createElement(D,{key:e.name,name:e.name,path:e.path,stars:e.stars})})))});F.proptypes={notes:l.a.arrayOf(l.a.exact({name:l.a.string.isRequired,path:l.a.string.isRequired,stars:l.a.number.isRequired})).isRequired};var H=F,U=function(){var e=[{name:"React",path:k,stars:4},{name:"Redux",path:w,stars:4},{name:"NodeJS",path:q,stars:3},{name:"Figma",path:j,stars:3}];return r.a.createElement("article",{className:"skills"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",{className:"h2"},"Skills"),r.a.createElement(H,{notes:e})))},B=a.p+"b13a2a3cf6d2a78fadd9b5ecf031182c.png",G=(a(354),function(e){var t=e.name,a=e.path;return r.a.createElement("img",{className:"project__photo",src:a,alt:t,width:"100%"})});G.proptypes={name:l.a.string.isRequired,path:l.a.string.isRequired};var L=G,$=(a(355),function(e){var t=e.text,a=e.link;return r.a.createElement("a",{className:"link",href:a,target:"_blank"},t)});$.proptypes={name:l.a.string.isRequired,text:l.a.string.isRequired};var z=$,K=(a(356),function(e){var t=e.name,a=e.link,n=e.path;return r.a.createElement("article",{className:"project"},r.a.createElement(L,{name:t,path:n}),r.a.createElement(z,{text:t,link:a}))});K.proptypes={name:l.a.string.isRequired,path:l.a.string.isRequired,link:l.a.string.isRequired};var Q=K,V=(a(357),function(e){var t=e.projects;return r.a.createElement("section",{className:"portfolio__projects"},t.map((function(e){return r.a.createElement(Q,{key:e.name,name:e.name,path:e.path,link:e.link})})))});V.proptypes={notes:l.a.arrayOf(l.a.exact({name:l.a.string.isRequired,path:l.a.string.isRequired,link:l.a.string.isRequired})).isRequired};var W=V,X=function(){var e=[{name:"Online autoservice store",path:B,link:"https://github.com/dnagafonov/coursework-kpiyap"}];return r.a.createElement("article",{className:"portfolio"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",{className:"h2"},"Portfolio"),r.a.createElement(W,{projects:e})))},Y=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f,null),r.a.createElement(d,null),r.a.createElement(E,null),r.a.createElement(R,null),r.a.createElement(U,null),r.a.createElement(X,null))};a(358),a(359);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))}});