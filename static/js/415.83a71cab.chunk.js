"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{126:function(r,e,t){t(791);var n=t(689),a=t(87),c=t(184);e.Z=function(r){var e=r.movies,t=(0,n.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:e.map((function(r){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(r.id),state:{from:t},children:(0,c.jsx)("h3",{children:r.title||r.name})})},r.id)}))})})}},415:function(r,e,t){t.r(e);var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(126),o=t(791),i=t(963),p=t(184);e.default=function(){var r=(0,o.useState)([]),e=(0,a.Z)(r,2),t=e[0],c=e[1];return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Df)();case 3:e=r.sent,c(e.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log("error",r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),console.log("movies",t),(0,p.jsx)("div",{children:(0,p.jsx)(s.Z,{movies:t})})}},963:function(r,e,t){t.d(e,{Df:function(){return s},IQ:function(){return p},Jh:function(){return f},Op:function(){return o},fh:function(){return i}});var n=t(861),a=t(757),c=t.n(a),u=t(340);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"a0679b4ab8f61bde963499da4762960e",language:"en-US",include_adult:!1};var s=function(){var r=(0,n.Z)(c().mark((function r(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("trending/all/day");case 3:return e=r.sent,t=e.data,r.abrupt("return",t);case 8:throw r.prev=8,r.t0=r.catch(0),new Error(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("search/movie?query=".concat(e));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),new Error(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),new Error(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/credits"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),new Error(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("movie/".concat(e,"/reviews"));case 3:return t=r.sent,n=t.data,r.abrupt("return",n);case 8:throw r.prev=8,r.t0=r.catch(0),new Error(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.83a71cab.chunk.js.map