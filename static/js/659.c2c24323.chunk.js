"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[659,771],{771:function(e,n,t){t.r(n);var r=t(861),i=t(439),c=t(757),o=t.n(c),s=t(791),u=t(689),a=t(184);n.default=function(){var e=(0,u.UO)().movieId,n=(0,s.useState)([]),t=(0,i.Z)(n,2),c=t[0],f=t[1],h=(0,s.useState)(!0),v=(0,i.Z)(h,2),d=v[0],l=v[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=27cf9ca08224d5da159ec688a33b0bea"));case 3:return t=n.sent,n.next=6,t.json();case 6:r=n.sent,f(r.results),l(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error("Error fetching reviews:",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,a.jsx)("div",{children:d?(0,a.jsx)("p",{children:"Loading reviews..."}):c&&c.length>0?(0,a.jsx)("ul",{children:c.map((function(e){return(0,a.jsxs)("li",{children:[(0,a.jsx)("h4",{children:e.author}),(0,a.jsx)("p",{children:e.content})]},e.id)}))}):(0,a.jsx)("p",{children:"No reviews found for this movie."})})}},861:function(e,n,t){function r(e,n,t,r,i,c,o){try{var s=e[c](o),u=s.value}catch(a){return void t(a)}s.done?n(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,c){var o=e.apply(n,t);function s(e){r(o,i,c,s,u,"next",e)}function u(e){r(o,i,c,s,u,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=659.c2c24323.chunk.js.map