(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){},2:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(3),c=n.n(l),o=(n(2),n(18),n(4)),i=n(5),s=n(7),u=n(6),m=n(8),d={online:{backgroundColor:"green",color:"black"},offline:{backgroundColor:"yellow",color:"grey"}},h=function(e){return r.a.createElement("div",{className:" tc dib ma3 pa3 br4 grow bg-light-green "},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"/?set=set3"),style:{height:210,width:275}}),r.a.createElement("h3",{style:{color:"black",fontSize:"1.2rem"}},e.name),r.a.createElement("div",{className:"f4 b animate__animated animate__bounce"},r.a.createElement("p",{style:e.online?d.online:d.offline},e.online?"Online":"Offline"),r.a.createElement("p2",{style:{color:"black"}},e.email)))},f=function(e){var t=e.Students;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(h,{key:n,name:t[n].name,id:t[n].id,online:t[n].online,email:t[n].email})}))},b=function(){return r.a.createElement("div",{className:"ba br2 bw0 b--dashed b--dark-green pa2 ma2"},r.a.createElement("h1",{style:{fontSize:"3.5rem",fontWeight:"bold"}}," ROBOFRIENDS "))},g=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",{className:"pa2 ma2"},r.a.createElement("input",{className:"tc br3 pa2 ba b--green bg-lightest-blue",name:"search",placeholder:"Search Members",onChange:t}))},E=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"2px solid white",height:"750px"}},e.children)},p=(n(19),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={studentList:[],searchfield:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({studentList:t})})}},{key:"render",value:function(){var e=this.state,t=e.studentList,n=e.searchfield,a=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement(b,null),r.a.createElement("div",{className:"pa2 ma2"},r.a.createElement(g,{searchChange:this.onSearchChange})),r.a.createElement("div",{className:"pa2 ma2"}),r.a.createElement(E,null,r.a.createElement(f,{Students:a}))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component)),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",null,r.a.createElement(p,null)))),v()},9:function(e,t,n){e.exports=n(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.789e3010.chunk.js.map