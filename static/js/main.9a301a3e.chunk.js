(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,t,a){e.exports=a(41)},22:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(22),a(2)),u=function(e){var t=e.users,a=e.updateUsers,c=Object(n.useState)(""),l=Object(o.a)(c,2),u=l[0],s=l[1];return Object(n.useEffect)((function(){var e=""===u?t:t.filter((function(e){return e.name.first.toLowerCase().indexOf(u.toLowerCase())>=0}));a(e)}),[u,t]),r.a.createElement("input",{value:u,onChange:function(e){return s(e.target.value)}})},s=a(16),i=function(e){var t=e.users,a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],u=c[1];return Object(n.useEffect)((function(){return u(t)}),[t]),r.a.createElement("div",null,r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"title"),r.a.createElement("th",{scope:"col",onClick:function(){var e=Object(s.a)(t).sort((function(e,t){var a=e.name.first,n=t.name.first;return a<n?-1:a>n?1:0}));u(e)}},"First"),r.a.createElement("th",{scope:"col"},"Last"),r.a.createElement("th",{scope:"col"},"gender"),r.a.createElement("th",{scope:"col"},"email"),r.a.createElement("th",{scope:"col"},"city"),r.a.createElement("th",{scope:"col"},"state"),r.a.createElement("th",{scope:"col"},"country"),r.a.createElement("th",{scope:"col"},"postcode"))),r.a.createElement("tbody",null,l.map((function(e){var t=e.location,a=t.city,n=t.state,c=t.country,l=t.postcode,o=e.picture.thumbnail,u=e.gender,s=e.email,i=e.name,m=i.first,E=i.last,d=i.title;return r.a.createElement("tr",{key:s},r.a.createElement("td",null,d),r.a.createElement("th",null,m),r.a.createElement("td",null,E),r.a.createElement("td",null,u),r.a.createElement("td",null,s),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,l),r.a.createElement("td",null,r.a.createElement("img",{src:o})),r.a.createElement("td",null))})))))},m=a(15),E=a.n(m);a(40);var d=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),m=s[0],d=s[1];return Object(n.useEffect)((function(){E.a.get("https://randomuser.me/api/?results=5000").then((function(e){var t=e.data.results;return c(t)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Enter your search below"),r.a.createElement(u,{users:a,updateUsers:d}),r.a.createElement(i,{users:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.9a301a3e.chunk.js.map