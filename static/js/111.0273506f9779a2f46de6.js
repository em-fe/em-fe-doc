webpackJsonp([111],{77:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={js:function(e){return e.trim().replace(/\s{5}/g,"\n")},bash:function(e){return e.trim().replace(/\s{5}/g,"\n")},html:function(e){var n=e.trim().replace(/\s([@?a-zA-Z-]*)=/g,function(e,n,t){return console.log(e,n,t,"aaa"),' <span class="code-attr">'+n+"</span>"}),t=n.replace(/(&lt;\/?)([a-zA-Z-]*)\s?/g,function(e,n,t){return n+'<span class="code-tag">'+t+"</span>"+(e.indexOf("/")>-1?"":" ")});return n,t}}}});