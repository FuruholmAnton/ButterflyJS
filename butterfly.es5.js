var render=function(){"use strict";return function e(a,r){if(a)if(Array.isArray(a)||a instanceof NodeList)a.forEach(function(a){e(a,r)});else if("string"==typeof a)e(document.querySelector(a),r);else{var s={x:0,y:0,z:0},t="",c="";for(var n in r)if(r.hasOwnProperty(n)){var i=r[n];switch(n){case"x":case"y":s[n]=i,c="translate3d("+("x"==n?i:s.x)+", "+("y"==n?i:s.y)+", "+("z"==n?i:s.z)+")";break;case"rotate":t+="rotate("+i+") ";break;case"scale":t+="scale("+i+") ";break;case"scaleX":t+="scaleX("+i+") ";break;case"scaleY":t+="scaleY("+i+") ";break;default:a.style[n]=i}}(t||c)&&(a.style.transform=c+t)}}}();