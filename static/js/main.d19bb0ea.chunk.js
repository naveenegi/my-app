(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),l=(n(13),n(1)),o=n(2),s=n(4),u=n(3),m=(n(6),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={services:null},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services").then((function(t){t.json().then((function(t){e.setState({services:t.data})}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Display"},r.a.createElement("h1",null,"Fetch API data for service(Control)"),this.state.services?this.state.services.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("p",null,e.links.self))})):null)}}]),n}(r.a.Component)),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={providers:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10").then((function(t){t.json().then((function(t){e.setState({providers:t.data})}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Provider"},r.a.createElement("h1",null,"Fetch API data for Provider(Results)"),this.state.providers?this.state.providers.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("p",null,r.a.createElement("img",{src:e.attributes["profile-image"]}))),r.a.createElement("td",null,r.a.createElement("p",null,e.attributes.name),r.a.createElement("p",null,e.attributes.subspecialties)))))})):null)}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null),r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.d19bb0ea.chunk.js.map