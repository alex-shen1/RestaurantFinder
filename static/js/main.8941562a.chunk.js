(this.webpackJsonprestaurant_app=this.webpackJsonprestaurant_app||[]).push([[0],{27:function(e,t,n){e.exports=n(55)},32:function(e,t,n){},33:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),c=n.n(r),l=(n(32),n(6)),s=n(7),i=n(9),u=n(8),p=(n(33),n(10)),h=n(26),m=(n(14),"AIzaSyBQRbOl8Z5HnrY12zURP84C6Tdwsoy-HUI");console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/RestaurantFinder",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GOOGLE_API_KEY:"AIzaSyCtsU4hkzYAIbx3woGLJ-zekJUWxh9T3Oc"}));var d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).getData=function(){console.log("doing stuff");var e="https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=".concat(m,"&radius=100000&location=38.0293,-78.4767&type=restaurant");fetch(e,{method:"GET"}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),n(14).get("https://maps.googleapis.com/maps/api/place/nearbysearch/json",{key:m,radius:1e5,location:"38.0293,78.4767"}).then((function(e){console.log("response received"),console.log(e)})).catch((function(e){console.log(e)})).then((function(){console.log("button pressed")}))},o.state={},o}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.a,null,o.a.createElement(p.a.Group,{controlID:"SearchBar"},o.a.createElement(p.a.Label,null,"Restaurant Search Bar"),o.a.createElement(p.a.Control,{type:"textarea",placeholder:"Search for a restaurant"}))),o.a.createElement(h.a,{onClick:this.getData},"Search"))}}]),a}(a.Component),f=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"List")}}]),n}(a.Component),O=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,"Map")}}]),n}(a.Component),b=(n(54),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setData=function(e){a.setState({data:e})},a.test=function(){console.log("test")},a.state={data:{}},a}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,{setData:this.setData}),o.a.createElement(f,null),o.a.createElement(O,null),o.a.createElement("button",{onClick:this.test},"TEST"))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.8941562a.chunk.js.map