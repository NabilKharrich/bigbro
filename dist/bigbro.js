!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.bigbro=t():e.bigbro=t()}(self,(()=>{return e={338:function(e,t,n){var s,o,i;o=[t,n(985)],void 0===(i="function"==typeof(s=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.inspect=e.emitAsync=e.emit=e.once=e.off=e.on=void 0;const n=(e,n,s,o)=>{const i=t.splitEvents(s?n:e);if(s)for(let t=0;t<i.length;t++){const n=i[t];e.addEventListener(n,s,o)}else for(let e=0;e<i.length;e++){const s=i[e];if(t.listenerExists(s,n))return;t.createEvent(s),n&&t.eventsStack[s].push(n)}};e.on=n;const s=(e,n,s)=>{const o=t.splitEvents(s?n:e);if(s)for(let t=0;t<o.length;t++){const n=o[t];e.removeEventListener(n,s)}else for(let e=0;e<o.length;e++){const s=o[e];if(!t.listenerExists(s,n))return;t.eventsStack[s].splice(t.eventsStack[s].indexOf(n),1)}};e.off=s;e.once=(e,t)=>{n(e,(async function n(){s(e,n),await t()}))};e.emit=(e,...n)=>{if(t.eventsStack[e])for(let s=0;s<t.eventsStack[e].length;s++)t.eventsStack[e[s]](...n)};e.emitAsync=(e,...n)=>{if(t.eventsStack[e])return Promise.all(t.eventsStack[e].map((e=>Promise.resolve(e(...n)))))};e.inspect=e=>t.clone(e)})?s.apply(t,o):s)||(e.exports=i)},985:function(e,t){var n,s;void 0===(s="function"==typeof(n=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.splitEvents=e.listenerExists=e.createEvent=e.clone=e.eventsStack=void 0;const t={};e.eventsStack=t;e.clone=()=>({...t});e.createEvent=e=>t[e]=t[e]||[];e.listenerExists=(e,n)=>!!t[e]?.includes(n);e.splitEvents=e=>e.split(" ")})?n.apply(t,[t]):n)||(e.exports=s)}},t={},function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,n),i.exports}(338);var e,t}));