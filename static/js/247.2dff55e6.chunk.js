"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247,631],{631:function(r,t,e){e.r(t),e.d(t,{Cast:function(){return f}});var n=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),o=e(689),s=e(247),p=e(704),v=e(184),f=function(){var r=(0,o.UO)().movieId,t=(0,i.useState)([]),e=(0,a.Z)(t,2),c=e[0],f=e[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.xc)(r);case 3:e=t.sent,f(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching movie credits:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Movie Cast"}),(0,v.jsx)("ul",{children:c.map((function(r){return(0,v.jsxs)("li",{children:[(0,v.jsx)("img",{src:r.profile_path?"https://image.tmdb.org/t/p/w200/".concat(r.profile_path):p,alt:r.name,width:"100"}),(0,v.jsx)("p",{children:r.name}),(0,v.jsxs)("p",{children:["Character: ",r.character]})]},r.id)}))}),(0,v.jsx)(o.j3,{})]})};t.default=f},247:function(r,t,e){e.d(t,{Bt:function(){return f},Y5:function(){return p},hM:function(){return s},wr:function(){return v},xc:function(){return A}});var n=e(861),a=e(757),c=e.n(a),u=e(340),i="27cf9ca08224d5da159ec688a33b0bea",o="https://api.themoviedb.org/3",s=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(o,"/search/movie"),{params:{api_key:i,query:t}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(o,"/movie/").concat(t),{params:{api_key:i}});case 3:return e=r.sent,r.abrupt("return",e.data);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.abrupt("return",null);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(o,"/trending/all/day"),{params:{api_key:"27cf9ca08224d5da159ec688a33b0bea"}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:return r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.abrupt("return",[]);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews"),{params:{api_key:i}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),A=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(o,"/movie/").concat(t,"/credits"),{params:{api_key:i}});case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},704:function(r){r.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=247.2dff55e6.chunk.js.map