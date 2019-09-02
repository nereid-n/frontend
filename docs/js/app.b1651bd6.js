(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],n[r]&&p.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0076":function(t,e,a){},"0c6a":function(t,e,a){},1:function(t,e){},"14b1":function(t,e,a){"use strict";var s=a("c6e9"),n=a.n(s);n.a},"15d9":function(t,e,a){},"1bd0":function(t,e,a){},2052:function(t,e,a){},"30db":function(t,e,a){"use strict";var s=a("6afd"),n=a.n(s);n.a},4667:function(t,e,a){},"52c8":function(t,e,a){"use strict";var s=a("7750"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("ac6a"),a("5df3"),a("7f7f"),a("c5f6");var s=a("768b"),n=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],o=(a("5c0b"),a("2877")),c={},l=Object(o["a"])(c,i,r,!1,null,null,null),u=l.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Header"),a("main",{staticClass:"main"},[a("Banner"),a("AboutMe"),a("Relationships"),a("Requirements"),a("Users"),a("SignUp")],1),a("Footer")],1)},h=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header-wrap",class:{"header-shadow":t.scrollBottom}},[a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("router-link",{staticClass:"header__logo",attrs:{to:{name:"home"}}},[a("img",{attrs:{width:"134",src:t.publicPath+"img/logo.svg",onError:"this.src=`${publicPath}/img/no-img.jpg`",alt:""}})]),a("nav",{staticClass:"header__menu menu"},t._l(t.menu,function(e){return a("a",{staticClass:"menu__item",attrs:{href:e.href}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),0),a("div",{staticClass:"header__profile"},[a("div",{staticClass:"header__profile-text"},[a("span",{staticClass:"header__profile-name"},[t._v(t._s(t.user.name))]),a("span",{staticClass:"header__profile-email"},[t._v(t._s(t.user.email))])]),a("div",{staticClass:"header__avatar avatar"},[a("img",{attrs:{src:t.user.photo,alt:""}})])]),t._m(0),a("button",{staticClass:"header__menu-btn",on:{click:function(e){t.mobileMenuOpen=!0}}},[a("i",{staticClass:"icon-line-menu"})])],1)]),a("div",{staticClass:"header-mobile-wrap",class:{"header-mobile--active":t.mobileMenuOpen}},[a("div",{staticClass:"header-mobile"},[a("div",{staticClass:"header-mobile__profile"},[a("div",{staticClass:"header-mobile__avatar avatar"},[a("img",{attrs:{src:t.user.photo,onError:"this.src='/img/no-img.jpg'",alt:""}})]),a("div",{staticClass:"header-mobile__profile-text"},[a("span",{staticClass:"header-mobile__profile-name"},[t._v(t._s(t.user.name))]),a("span",{staticClass:"header-mobile__profile-email"},[t._v(t._s(t.user.email))])])]),a("nav",{staticClass:"header-mobile__menu menu"},[t._l(t.menu,function(e){return a("a",{staticClass:"menu__item",attrs:{href:e.href}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),a("a",{staticClass:"menu__item",attrs:{href:"#"}},[t._v("\n          Sign out\n        ")])],2)])]),a("div",{staticClass:"overlay",class:{"overlay--active":t.mobileMenuOpen},on:{click:function(e){t.mobileMenuOpen=!1}}})])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"header__sign-out",attrs:{href:"#"}},[a("i",{staticClass:"icon-sign-out"})])}],v={data:function(){return{menu:[{title:"About me",href:"#aboutMe"},{title:"Relationships",href:"#relationships"},{title:"Requirements",href:"#requirements"},{title:"Users",href:"#users"},{title:"Sign Up",href:"#signUp"}]}}},_={name:"Header",data:function(){return{user:{},mobileMenuOpen:!1,scrollBottom:!1}},methods:{getUser:function(){var t=this;this.$store.dispatch("users/USER",{id:1}).then(function(e){t.user=e.body.user})},scroll:function(){this.scrollBottom=window.pageYOffset>100}},created:function(){this.getUser(),this.scroll(),window.addEventListener("scroll",this.scroll)},mixins:[v]},g=_,b=(a("dead"),Object(o["a"])(g,f,m,!1,null,null,null)),C=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"banner-wrap"},[a("div",{staticClass:"container"},[a("div",{staticClass:"banner"},[a("h1",{ref:"title",staticClass:"h1"},[t._v("Test assignment for Frontend Developer position")]),a("div",{ref:"text"},[t._m(0)]),a("a",{staticClass:"banner__btn btn btn--primary",attrs:{href:"#signUp"}},[t._v("Sign Up")])])])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"paragraph1"},[a("span",[t._v("We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. ")]),a("span",[t._v("Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck!")])])}],k={name:"Banner",mounted:function(){this.dots(this.$refs.text,1e3),this.dots(this.$refs.title,80)}},x=k,S=(a("52c8"),Object(o["a"])(x,w,y,!1,null,null,null)),U=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"aboutMe-wrap",attrs:{id:"aboutMe"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"aboutMe"},[a("h2",{staticClass:"h2"},[t._v("Let's get ac quainted")]),a("div",{staticClass:"aboutMe__content"},[a("img",{staticClass:"aboutMe__img",attrs:{src:t.publicPath+"img/man-mobile.svg",width:"289",alt:""}}),a("div",{staticClass:"aboutMe__text"},[a("h3",{staticClass:"h3"},[t._v("I am cool frontend developer")]),t._l(t.text,function(e){return a("p",{staticClass:"paragraph2"},[t._v(t._s(e))])}),a("a",{staticClass:"link--orange",attrs:{href:"#signUp"}},[t._v("Sign Up")])],2)])])])])},$=[],M={name:"AboutMe",data:function(){return{text:["When real users have a slow experience on mobile, they're much less likely to find what they are looking for or purchase from you in the future. For many sites this equates to a huge missed opportunity, especially when more than half of visits are abandoned if a mobile page takes over 3 seconds to load.","Last week, Google Search and Ads teams announced two new speed initiatives to help improve user-experience on the web."]}}},j=M,E=(a("77ef"),Object(o["a"])(j,O,$,!1,null,null,null)),R=E.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"requirements-wrap",attrs:{id:"requirements"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"requirements"},[a("h2",{ref:"title",staticClass:"h2"},[t._v("General requirements for the test task")]),a("div",{ref:"text",staticClass:"requirements__content"},[a("div",{staticClass:"requirements__text"},t._l(t.text,function(e){return a("p",{staticClass:"paragraph2"},[t._v(t._s(e))])}),0),a("div",{staticClass:"requirements__img"},[a("img",{attrs:{src:t.publicPath+"img/man-laptop-v1.svg",alt:""}})])])])])])},I=[],P={name:"Requirements",data:function(){return{text:["Users want to find answers to their questions quickly and data shows that people really care about how quickly their pages load. The Search team announced speed would be a ranking signal for desktop searches in 2010 and as of this month (July 2018), page speed will be a ranking factor for mobile searches too.","If you're a developer working on a site, now is a good time to evaluate your performance using our speed tools. Think about how performance affects the user experience of your pages and consider measuring a variety of real-world user-centric performance metrics.","Are you shipping too much JavaScript? Too many images? Images and JavaScript are the most significant contributors to the page weight that affect page load time based on data from HTTP Archive and the Chrome User Experience Report - our public dataset for key UX metrics as experienced by Chrome users under real-world conditions."]}},mounted:function(){this.dots(this.$refs.text,1500),this.dots(this.$refs.title,80)}},q=P,G=(a("e724"),Object(o["a"])(q,T,I,!1,null,null,null)),L=G.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"relationships-wrap",attrs:{id:"relationships"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"relationships"},[a("h2",{staticClass:"h2"},[t._v("About my relationships with web-development")]),a("div",{staticClass:"relationships__items"},t._l(t.items,function(e){return a("div",{staticClass:"relationships__item"},[a("img",{attrs:{src:t.publicPath+"img/"+e.img,alt:""}}),a("div",[a("h3",{staticClass:"h3"},[t._v(t._s(e.title))]),a("p",{staticClass:"paragraph2 c-gray"},[t._v(t._s(e.desc))])])])}),0)])])])},z=[],A={name:"Relationships",data:function(){return{items:[{img:"html.svg",title:"I'm in love with HTML",desc:"Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications."},{img:"css.svg",title:"CSS is my best friend",desc:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML."},{img:"javascript.svg",title:"JavaScript is my passion",desc:"JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm."}]}}},B=A,F=(a("586f"),Object(o["a"])(B,N,z,!1,null,null,null)),W=F.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"users-wrap",attrs:{id:"users"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"users"},[a("h2",{staticClass:"h2"},[t._v("Our cheerful users")]),a("h5",{staticClass:"h5"},[t._v("Attention! Sorting users by registration date")]),t.firstLoad?a("div",{staticClass:"users__items"},t._l(t.users,function(e,s){return a("div",{staticClass:"users__item"},[a("div",{staticClass:"users__avatar avatar"},[a("img",{attrs:{src:e.photo,onError:"this.src=`${publicPath}/img/no-img.jpg`",alt:""}})]),a("div",{staticClass:"users__item-text"},[a("h4",{staticClass:"h4"},[t._v(t._s(e.name))]),a("div",{staticClass:"users__item-info"},t._l(t.info,function(n,i){return a("div",{class:{"tooltip-parent":t.tooltips[s*t.info.length+i]}},[a("span",{ref:"span",refInFor:!0,staticClass:"users__item-span"},[t._v(t._s(e[n]))]),t.tooltips[s*t.info.length+i]?a("div",{staticClass:"tooltip"},[t._v(t._s(e[n]))]):t._e()])}),0)])])}),0):t._e(),t.firstLoad&&t.load?t._e():a("Loader"),a("div",{staticClass:"users__btn"},[t.page!==t.totalPages?a("button",{staticClass:"btn btn--secondary",on:{click:t.getUsers}},[t._v("\n          Show more\n        ")]):t._e()])],1)])])},H=[],J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"circularG"}},[a("div",{staticClass:"circularG",attrs:{id:"circularG_1"}}),a("div",{staticClass:"circularG",attrs:{id:"circularG_2"}}),a("div",{staticClass:"circularG",attrs:{id:"circularG_3"}}),a("div",{staticClass:"circularG",attrs:{id:"circularG_4"}}),a("div",{staticClass:"circularG",attrs:{id:"circularG_5"}}),a("div",{staticClass:"circularG",attrs:{id:"circularG_6"}}),a("div",{staticClass:"circularG",attrs:{id:"circularG_7"}}),a("div",{staticClass:"circularG",attrs:{id:"circularG_8"}})])}],K={name:"Loader"},Y=K,Q=(a("a071"),Object(o["a"])(Y,J,V,!1,null,null,null)),X=Q.exports,Z=a("2f62"),tt=(a("96cf"),a("3b8d")),et={namespaced:!0,state:{newUser:!1},mutations:{NEW_USER:function(t,e){return t.newUser=e}},actions:{TOKEN:function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].http.get("".concat("https://frontend-test-assignment-api.abz.agency/api/v1/","token")).then(function(t){return t},function(t){return t}).catch(function(t){return console.error("catch, ".concat(t))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}(),USER:function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].http.get("".concat("https://frontend-test-assignment-api.abz.agency/api/v1/","users/").concat(a.id)).then(function(t){return t},function(t){return t}).catch(function(t){return console.error("catch, ".concat(t))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}(),USERS:function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].http.get("".concat("https://frontend-test-assignment-api.abz.agency/api/v1/","users"),{params:a}).then(function(t){return t},function(t){return t}).catch(function(t){return console.error("catch, ".concat(t))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}(),ADD_USER:function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].http.post("".concat("https://frontend-test-assignment-api.abz.agency/api/v1/","users"),a.data,{headers:a.headers}).then(function(t){return t},function(t){return t}).catch(function(t){return console.error("catch, ".concat(t))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}()}},at={namespaced:!0,actions:{POSITIONS:function(){var t=Object(tt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].http.get("".concat("https://frontend-test-assignment-api.abz.agency/api/v1/","positions")).then(function(t){return t},function(t){return t}).catch(function(t){return console.error("catch, ".concat(t))});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()}};n["a"].use(Z["a"]);var st=new Z["a"].Store({modules:{users:et,positions:at},strict:!1}),nt={name:"Users",components:{Loader:X},data:function(){return{users:[],page:1,firstLoad:!1,load:!0,windowSize:0,countUsers:0,totalPages:0,info:["position","email","phone"],tooltips:[]}},methods:{getUsers:function(){var t=this;this.load=!1;var e={page:this.page,count:this.countUsers};this.$store.dispatch("users/USERS",e).then(function(e){t.users=t.users.concat(e.body.users),t.totalPages=e.body.total_pages,t.page++,t.firstLoad=!0,t.load=!0})},getBodyWidth:function(){this.windowSize=document.body.clientWidth,this.windowSize<768?this.countUsers=3:this.countUsers=6}},watch:{users:function(){var t=this;this.$nextTick(function(){for(var e=t.tooltips.length;e<t.$refs.span.length;e++)t.tooltips.push(t.$refs.span[e].scrollWidth>t.$refs.span[e].offsetWidth)})}},created:function(){var t=this;this.getBodyWidth(),window.onresize=this.getBodyWidth,this.getUsers(),st.watch(function(t){return t.users.newUser},function(){t.$store.state.users.newUser&&(t.page=1,t.firstLoad=!1,t.users=[],t.getUsers(),t.$store.commit("users/NEW_USER",!1))})}},it=nt,rt=(a("7ed3"),Object(o["a"])(it,D,H,!1,null,null,null)),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"signUp-wrap",attrs:{id:"signUp"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"signUp"},[a("h2",{staticClass:"h2"},[t._v("Register to get a work")]),a("h5",{staticClass:"h5"},[t._v("\n        Attention! After successful registration and alert, update the list of users in the block from the top\n      ")]),a("form",[a("div",{staticClass:"signUp__inputs"},t._l(t.inputs,function(e){return a("div",{class:e.className},[a(e.component,{directives:[{name:"validate",rawName:"v-validate",value:e.rules,expression:"input.rules"}],key:e.data.name,tag:"component",attrs:{data:e.data,name:e.data.name,error:t.errors.first(e.data.name),defaultValue:t.value[e.data.name]},on:{input:t.onInput},model:{value:t.value[e.data.name],callback:function(a){t.$set(t.value,e.data.name,a)},expression:"value[input.data.name]"}})],1)}),0),a("div",{staticClass:"signUp__btn"},[a("button",{staticClass:"btn btn--primary",class:{disable:!t.valide},on:{click:function(e){return e.preventDefault(),t.send(e)}}},[t._v("\n            Sign Up\n          ")])])])])]),a("Modal",{staticClass:"signUp__modal",attrs:{show:t.showModal},on:{close:function(e){t.showModal=!1}}},[a("h4",{staticClass:"h4"},[t._v(t._s(t.modalTitle))]),a("p",{staticClass:"paragraph2",domProps:{innerHTML:t._s(t.modalMessage)}}),a("button",{staticClass:"signUp__modal-btn link--orange",on:{click:function(e){t.showModal=!1}}},[t._v("OK")])])],1)},lt=[],ut=(a("a481"),a("ac4d"),a("8a81"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-wrap",class:t.wrapClass},[a("div",{staticClass:"input__placeholder"},[t._v(t._s(t.data.label))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",attrs:{placeholder:t.focus?t.data.placeholder:""},domProps:{value:t.value},on:{focus:function(e){t.focus=!0},blur:t.onBlur,input:[function(e){e.target.composing||(t.value=e.target.value)},t.onInput]}}),t.error&&t.touched?a("div",{staticClass:"input__error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):a("div",{staticClass:"input__hint"},[t._v("\n    "+t._s(t.data.hint)+"\n  ")])])}),dt=[],pt={data:function(){return{value:"",focus:!1,touched:!1}},props:{data:{type:Object,required:!0},error:{type:String},defaultValue:{required:!0}},methods:{onBlur:function(){this.focus=!1,this.touched=!0,this.$emit("blur")},onInput:function(){this.$emit("input",this.value)}},watch:{defaultValue:function(){void 0===this.defaultValue&&(this.value="",this.touched=!1)}},computed:{wrapClass:function(){return{"input--active":this.focus,"input--filled":""!==this.value,"input--error":this.error&&this.touched}}}},ht={name:"InputText",mixins:[pt]},ft=ht,mt=(a("6553"),Object(o["a"])(ft,ut,dt,!1,null,null,null)),vt=mt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"select-wrap",class:t.wrapClass},[a("div",{staticClass:"select",class:{"select--active":t.open}},[a("div",{staticClass:"select__input",on:{click:t.openSelect}},[t.value?[t._v("\n        "+t._s(t.value.name)+"\n      ")]:a("span",{staticClass:"selected"},[t._v("\n        "+t._s(t.data.label)+"\n      ")]),a("i",{staticClass:"select__caret icon-caret-down"})],2),t.open?a("div",{staticClass:"select__menu"},t._l(t.data.options,function(e){return a("div",{staticClass:"select__item",on:{click:function(a){return t.input(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")])}),0):t._e()]),t.error&&t.touched?a("div",{staticClass:"input__error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):a("div",{staticClass:"input__hint"},[t._v("\n    "+t._s(t.data.hint)+"\n  ")])])},gt=[],bt={name:"InputSelect",data:function(){return{open:!1,countClick:0}},methods:{openSelect:function(){this.open||(this.open=!0)},closeSelect:function(){this.open&&(this.countClick>0?(this.open=!1,this.countClick=0):this.countClick++)},input:function(t){this.touched=!0,this.value=t,this.$emit("input",t.value)}},mounted:function(){document.onclick=this.closeSelect},mixins:[pt]},Ct=bt,wt=(a("a140"),Object(o["a"])(Ct,_t,gt,!1,null,null,null)),yt=wt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-wrap",class:t.wrapClass},[a("div",{staticClass:"upload-wrap"},[a("div",{staticClass:"upload__input input"},[t.value?[t._v("\n        "+t._s(t.value[0].name)+"\n      ")]:a("span",{staticClass:"c-light-gray"},[t._v(t._s(t.data.label))])],2),t._m(0),a("input",{staticClass:"upload",attrs:{type:"file"},on:{change:t.change}})]),t.error&&t.touched?a("div",{staticClass:"input__error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):a("div",{staticClass:"input__hint"},[t._v("\n    "+t._s(t.data.hint)+"\n  ")])])},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn--secondary upload__btn"},[a("span",[t._v("Upload")]),a("i",{staticClass:"icon-upload"})])}],St={name:"InputFile",methods:{change:function(t){this.touched=!0,this.value=t.target.files,this.$emit("input",this.value)}},mixins:[pt]},Ut=St,Ot=(a("14b1"),Object(o["a"])(Ut,kt,xt,!1,null,null,null)),$t=Ot.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"overlay",class:{"overlay--active":t.show},on:{click:function(e){return t.$emit("close")}}}),a("div",{staticClass:"modal",class:{"modal--active":t.show}},[t._t("default")],2)])},jt=[],Et={name:"Modal",props:{show:{type:Boolean,default:!1}}},Rt=Et,Tt=(a("30db"),Object(o["a"])(Rt,Mt,jt,!1,null,null,null)),It=Tt.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-wrap",class:t.wrapClass},[a("div",{staticClass:"input__placeholder"},[t._v(t._s(t.data.label))]),a("imask-input",{staticClass:"input",attrs:{placeholder:t.focus?t.data.placeholder:"",mask:t.focus?t.data.mask:""},on:{focus:function(e){t.focus=!0},blur:t.onBlur,input:t.onInput},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t.error&&t.touched?a("div",{staticClass:"input__error"},[t._v("\n    "+t._s(t.error)+"\n  ")]):a("div",{staticClass:"input__hint"},[t._v("\n    "+t._s(t.data.hint)+"\n  ")])],1)},qt=[],Gt=a("3c77"),Lt={name:"InputMask",components:{"imask-input":Gt["IMaskComponent"]},mixins:[pt]},Nt=Lt,zt=Object(o["a"])(Nt,Pt,qt,!1,null,null,null),At=zt.exports,Bt={name:"SignUp",components:{InputMask:At,Modal:It,InputFile:$t,InputSelect:yt,InputText:vt},data:function(){return{inputs:[{component:"InputText",className:"signUp-col-4",rules:{required:!0,min:2,max:60},data:{name:"name",label:"Name"}},{component:"InputText",className:"signUp-col-4",rules:{required:!0,min:2,max:100,email:!0},data:{name:"email",label:"Email"}},{component:"InputMask",className:"signUp-col-4",rules:{required:!0,min:17},data:{name:"phone",label:"Phone",mask:"+{38}(\\000)000 00 00"}},{component:"InputSelect",className:"signUp-col-6",rules:{required:!0},data:{name:"position_id",label:"Select your position",options:[]}},{component:"InputFile",className:"signUp-col-6",rules:{required:!0,mimes:"image/jpeg",size:5e3,minDimensions:[70,70]},data:{name:"photo",label:"Upload your photo",hint:"File format jpg up to 5 MB, the minimum size of 70x70px"}}],value:{},valide:!1,showModal:!1,modalTitle:"Congratulations",modalMessage:"You have successfully passed <br> the registration"}},methods:{getPositions:function(){var t=this;this.$store.dispatch("positions/POSITIONS").then(function(e){var a=!0,s=!1,n=void 0;try{for(var i,r=t.inputs[Symbol.iterator]();!(a=(i=r.next()).done);a=!0){var o=i.value;if("position_id"===o.data.name){var c=!0,l=!1,u=void 0;try{for(var d,p=e.body.positions[Symbol.iterator]();!(c=(d=p.next()).done);c=!0){var h=d.value;o.data.options.push({name:h.name,value:h.id})}}catch(f){l=!0,u=f}finally{try{c||null==p.return||p.return()}finally{if(l)throw u}}break}}}catch(f){s=!0,n=f}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}})},send:function(){var t=this,e=new FormData;for(var a in this.value.photo=this.value.photo[0],this.value.phone=this.value.phone.replace(/[()\s]/g,""),this.value)e.append(a,this.value[a]);this.$store.dispatch("users/TOKEN").then(function(a){var s=a.body.token,n={Token:s};t.$store.dispatch("users/ADD_USER",{data:e,headers:n}).then(function(e){t.showModal=!0,e.ok?(t.modalTitle="Congratulations",t.modalMessage="You have successfully passed <br> the registration",t.$store.commit("users/NEW_USER",!0),t.value={}):(t.modalTitle="Oops",t.modalMessage=e.body.message)})})},onInput:function(){var t=this;this.$validator.validateAll().then(function(e){t.valide=e})}},created:function(){this.getPositions()}},Ft=Bt,Wt=(a("a722"),Object(o["a"])(Ft,ct,lt,!1,null,null,null)),Dt=Wt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer-wrap"},[a("div",{staticClass:"container"},[a("div",{staticClass:"footer"},[a("div",{staticClass:"footer__top"},[a("router-link",{staticClass:"footer__logo",attrs:{to:{name:"home"},href:"/"}},[a("svg",{attrs:{width:"134",height:"25"}},[a("use",{attrs:{"xlink:href":t.publicPath+"img/logo.svg#logo"}})])]),a("nav",{staticClass:"footer__menu menu"},t._l(t.menu,function(e){return a("a",{staticClass:"menu__item",attrs:{href:e.href}},[t._v("\n            "+t._s(e.title)+"\n          ")])}),0)],1),a("div",{staticClass:"footer__main"},[a("div",{staticClass:"footer__contacts"},t._l(t.contacts,function(e){return a("a",{staticClass:"footer__contact link--white",attrs:{href:e.href}},[a("span",{staticClass:"footer__contact-icon"},[a("i",{class:e.icon})]),a("span",[t._v(t._s(e.title))])])}),0),a("div",{staticClass:"footer__links"},t._l(t.links,function(e){return a("div",{staticClass:"footer__links-column"},t._l(e,function(e){return a("div",{staticClass:"footer__link"},[a("a",{staticClass:"link--white",attrs:{href:"#"}},[t._v(t._s(e.title))])])}),0)}),0)]),a("div",{staticClass:"footer__bottom"},[a("span",{staticClass:"footer__copyright"},[t._v("© abz.agency specially for the test task")]),a("div",{staticClass:"footer__social"},t._l(t.social,function(t){return a("a",{staticClass:"footer__social-item link--white",attrs:{href:"#"}},[a("i",{class:t.icon})])}),0)])])])])},Jt=[],Vt={name:"Footer",data:function(){return{contacts:[{title:"work.of.future@gmail.com",icon:"icon-mail fz24",href:"mailto:work.of.future@gmail.com"},{title:"+38 (050) 789 24 98",icon:"icon-phone fz21",href:"tel:+380507892498"},{title:"+38 (095) 556 08 45",icon:"icon-cellphone fz25",href:"tel:+380955560845"}],links:[[{title:"News"},{title:"Blog"},{title:"Partners"},{title:"Shop"}],[{title:"Overview"},{title:"Design"},{title:"Code"},{title:"Collaborate"}],[{title:"Tutorials"},{title:"Resources"},{title:"Guides"},{title:"Examples"}],[{title:"FAQ"},{title:"Terms"},{title:"Conditions"},{title:"Help"}]],social:[{icon:"icon-facebook"},{icon:"icon-linkedin"},{icon:"icon-instagram"},{icon:"icon-twitter"},{icon:"icon-pinterest"}]}},mixins:[v]},Kt=Vt,Yt=(a("6948"),Object(o["a"])(Kt,Ht,Jt,!1,null,null,null)),Qt=Yt.exports,Xt={name:"home",components:{Footer:Qt,SignUp:Dt,Users:ot,Relationships:W,Requirements:L,AboutMe:R,Banner:U,Header:C}},Zt=Xt,te=Object(o["a"])(Zt,p,h,!1,null,null,null),ee=te.exports;n["a"].use(d["a"]);var ae=new d["a"]({mode:"history",base:"/frontend/",routes:[{path:"/",name:"home",component:ee}]}),se=a("28dd"),ne=a("7bb1"),ie={methods:{dots:function(t,e){var a=t.innerText;a.length>e&&(t.innerText=a.slice(0,e)+"...")}}};n["a"].config.productionTip=!1,n["a"].use(se["a"]),n["a"].use(ne["b"],{events:"change|blur|input"}),n["a"].mixin(ie),n["a"].mixin({data:function(){return{publicPath:"/frontend/"}}});var re={getMessage:function(t,e,a){var n=Object(s["a"])(e,2),i=n[0],r=n[1];return a&&a.message||"The ".concat(t," field must be UP TO ").concat(i," pixels by ").concat(r," pixels.")},validate:function(t,e){for(var a=Object(s["a"])(e,2),n=a[0],i=a[1],r=function(t,e,a){var s=window.URL||window.webkitURL;return new Promise(function(n){var i=new Image;i.onerror=function(){return n({valid:!1})},i.onload=function(){return n({valid:i.width>=Number(e)&&i.height>=Number(a)})},i.src=s.createObjectURL(t)})},o=[],c=0;c<t.length;c++){if(!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(t[c].name))return!1;o.push(t[c])}return Promise.all(o.map(function(t){return r(t,n,i)}))}};ne["a"].extend("minDimensions",re),new n["a"]({router:ae,store:st,render:function(t){return t(u)}}).$mount("#app")},"586f":function(t,e,a){"use strict";var s=a("2052"),n=a.n(s);n.a},"5c0b":function(t,e,a){"use strict";var s=a("8fba"),n=a.n(s);n.a},6553:function(t,e,a){"use strict";var s=a("9ace"),n=a.n(s);n.a},6948:function(t,e,a){"use strict";var s=a("0076"),n=a.n(s);n.a},"6afd":function(t,e,a){},7750:function(t,e,a){},"77ef":function(t,e,a){"use strict";var s=a("915a"),n=a.n(s);n.a},"7ed3":function(t,e,a){"use strict";var s=a("0c6a"),n=a.n(s);n.a},"8fba":function(t,e,a){},"915a":function(t,e,a){},"9ace":function(t,e,a){},a071:function(t,e,a){"use strict";var s=a("a421"),n=a.n(s);n.a},a140:function(t,e,a){"use strict";var s=a("1bd0"),n=a.n(s);n.a},a421:function(t,e,a){},a722:function(t,e,a){"use strict";var s=a("4667"),n=a.n(s);n.a},c6e9:function(t,e,a){},ccb8:function(t,e,a){},dead:function(t,e,a){"use strict";var s=a("15d9"),n=a.n(s);n.a},e724:function(t,e,a){"use strict";var s=a("ccb8"),n=a.n(s);n.a}});
//# sourceMappingURL=app.b1651bd6.js.map