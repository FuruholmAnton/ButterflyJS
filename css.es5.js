var render=function(e){"use strict";!function(){function e(e){this.value=e}function r(r){var t,n;function a(t,n){try{var i=r[t](n),c=i.value;c instanceof e?Promise.resolve(c.value).then(function(e){a("next",e)},function(e){a("throw",e)}):o(i.done?"return":"normal",i.value)}catch(e){o("throw",e)}}function o(e,r){switch(e){case"return":t.resolve({value:r,done:!0});break;case"throw":t.reject(r);break;default:t.resolve({value:r,done:!1})}(t=t.next)?a(t.key,t.arg):n=null}this._invoke=function(e,r){return new Promise(function(o,i){var c={key:e,arg:r,resolve:o,reject:i,next:null};n?n=n.next=c:(t=n=c,a(e,r))})},"function"!=typeof r.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(r.prototype[Symbol.asyncIterator]=function(){return this}),r.prototype.next=function(e){return this._invoke("next",e)},r.prototype.throw=function(e){return this._invoke("throw",e)},r.prototype.return=function(e){return this._invoke("return",e)}}();var r=function(){return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(a)throw o}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=regeneratorRuntime.mark(n);function n(e){var r,n,a,o,i,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=!0,n=!1,a=void 0,t.prev=3,o=Object.keys(e)[Symbol.iterator]();case 5:if(r=(i=o.next()).done){t.next=12;break}return c=i.value,t.next=9,[c,e[c]];case 9:r=!0,t.next=5;break;case 12:t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),n=!0,a=t.t0;case 18:t.prev=18,t.prev=19,!r&&o.return&&o.return();case 21:if(t.prev=21,!n){t.next=24;break}throw a;case 24:return t.finish(21);case 25:return t.finish(18);case 26:case"end":return t.stop()}},t,this,[[3,14,18,26],[19,,21,25]])}return e.entries=n,e.default=function e(t,a){if(t)if(Array.isArray(t)||t instanceof NodeList)t.forEach(function(r){e(r,a)});else if("string"==typeof t)e(document.querySelector(t),a);else{var o={x:0,y:0,z:0},i="",c="",u=!0,s=!1,f=void 0;try{for(var l,y=n(a)[Symbol.iterator]();!(u=(l=y.next()).done);u=!0){var v=l.value,h=r(v,2),p=h[0],b=h[1];switch(p){case"x":case"y":o[p]=b,c="translate3d("+("x"==p?b:o.x)+", "+("y"==p?b:o.y)+", "+("z"==p?b:o.z)+")";break;case"rotate":i+="rotate("+b+") ";break;case"scale":i+="scale("+b+") ";break;case"scaleX":i+="scaleX("+b+") ";break;case"scaleY":i+="scaleY("+b+") ";break;default:t.style[p]=b}}}catch(e){s=!0,f=e}finally{try{!u&&y.return&&y.return()}finally{if(s)throw f}}(i||c)&&(t.style.transform=c+i)}},e}({});