(function(e){function s(s){for(var a,o,r=s[0],l=s[1],c=s[2],d=0,u=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(s);while(u.length)u.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,s=0;s<n.length;s++){for(var t=n[s],a=!0,r=1;r<t.length;r++){var l=t[r];0!==i[l]&&(a=!1)}a&&(n.splice(s--,1),e=o(o.s=t[0]))}return e}var a={},i={app:0},n=[];function o(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,s,t){o.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,s){if(1&s&&(e=o(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)o.d(t,a,function(s){return e[s]}.bind(null,a));return t},o.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(s,"a",s),s},o.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var f=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"034f":function(e,s,t){"use strict";var a=t("85ec"),i=t.n(a);i.a},4678:function(e,s,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var s=n(e);return t(s)}function n(e){if(!t.o(a,e)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=n,e.exports=i,i.id="4678"},"56d7":function(e,s,t){"use strict";t.r(s);t("a79d");var a=t("2b0e"),i=(t("202f"),function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{ref:"viewport",staticClass:"unselectable container-fluid",class:{"has-mouse":e.hasMouse},attrs:{id:"app"},on:{touchstart:function(s){e.hasMouse=!1}}},[t("Flipbook",{ref:"flipbook",staticClass:"flipbook",attrs:{id:"flipbook",pages:e.pages,"start-page":e.targetPage,zooms:[1,2.5],"flip-duration":200,"n-polygons":7,gloss:.1,ambient:.8,perspective:5e3},on:{"flip-left-start":e.onFlipLeftStart,"flip-left-end":e.onFlipLeftEnd,"flip-right-start":e.onFlipRightStart,"flip-right-end":e.onFlipRightEnd}}),t("div",{staticClass:"action-bar"},[t("a-space",[t("a-button",{attrs:{shape:"circle",icon:"left"},on:{click:e.flipLeft}}),t("a-button",{attrs:{shape:"circle"},on:{click:e.showDrawer}},[t("a-icon",{attrs:{type:"menu"}})],1),t("a-button",{staticClass:"unselectable",attrs:{shape:"round"}},[e._v(e._s(e.curPage-2==-1?"封面":" "+(e.curPage-2).toString())+" / "+e._s(e.pageCount-2))]),t("a-button",{attrs:{shape:"circle",icon:"question"},on:{click:e.guideSwitch}}),t("a-button",{attrs:{shape:"circle",icon:"right"},on:{click:e.flipRight}})],1)],1),t("a-modal",{attrs:{title:"如何使用",centered:"",cancelText:""},on:{ok:e.guideSwitch},model:{value:e.guideVisible,callback:function(s){e.guideVisible=s},expression:"guideVisible"}},[t("p",[e._v("📘 在书本边缘滑动切换页面")]),t("p",[e._v("🔍 点击书本可放大与缩小，也可双指缩放~")]),t("p",[e._v(" 🔖 点击 "),t("a-icon",{attrs:{type:"menu"}}),e._v(" 打开目录 ")],1),t("p",[e._v("💙 祝您阅读愉快 :)")])]),t("a-drawer",{attrs:{title:"目录",placement:"left",closable:!1,visible:e.visible},on:{close:e.onClose}},[t("div",{staticStyle:{margin:"-20px"}},[t("a-menu",{attrs:{"default-selected-keys":["1"],"default-open-keys":["sub1"],mode:"inline",theme:"light","inline-collapsed":e.collapsed}},[t("a-menu-item",{key:"1",on:{click:function(s){return e.gotoPage(-1)}}},[e._v("封面")]),t("a-menu-item",{key:"2",on:{click:function(s){return e.gotoPage(3)}}},[e._v("目录")]),t("a-menu-item",{key:"3",on:{click:function(s){return e.gotoPage(5)}}},[e._v("师大印象")]),t("a-menu-item",{key:"4",on:{click:function(s){return e.gotoPage(13)}}},[e._v("师大攻略")])],1)],1)]),t("div",{staticClass:"credit unselectable"},[e._v("© 2020 socreates.cn / Special thanks to github@ts1")])],1)}),n=[],o=t("8330"),r={name:"App",components:{Flipbook:o["a"]},data(){return{pages:[],pagesHiRes:[],hasMouse:!0,pageNum:null,pageCount:0,curPage:1,targetPage:null,canFlipLeft:!0,canFlipRight:!0,coverPage:0,viewWidth:0,viewHeight:0,isMobile:!0,collapsed:!1,drawerVisibility:!0,visible:!1,current:"1",theme:"light",guideVisible:!1}},methods:{handleClick(e){console.log("click ",e),this.current=e.key},afterVisibleChange(e){console.log("visible",e)},showDrawer(){this.visible=!0},onClose(){this.visible=!1},toggleCollapsed(){this.collapsed=!this.collapsed},flipRight(){this.$refs.flipbook.flipRight()},flipLeft(){this.$refs.flipbook.flipLeft()},zoomIn(){this.$refs.flipbook.zoomIn()},zoomOut(){this.$refs.flipbook.zoomOut()},canZoomIn(){return this.$refs.flipbook.canZoomIn},canZoomOut(){return this.$refs.flipbook.canZoomOut},gotoPage(e){let s=this.isMobile;e+=2,this.targetPage=s||e%2==0?e:e-1,this.curPage=this.targetPage,0==this.curPage&&(this.curPage=1),this.visible=!1},guideSwitch(){this.guideVisible=!this.guideVisible,console.log("showGuide")},updateStatus(){this.canFlipRight=this.$refs.flipbook.canFlipRight,this.canFlipLeft=this.$refs.flipbook.canFlipLeft},onFlipLeftStart(e){return console.log("flip-left-start",e)},onFlipLeftEnd(e){return console.log("flip-left-end",e),this.curPage=e,window.location.hash="#"+e},onFlipRightStart(e){return console.log("flip-right-start",e)},onFlipRightEnd(e){return console.log("flip-right-end",e),this.curPage=e,window.location.hash="#"+e},onZoomStart(e){return console.log("zoom-start",e)},onZoomEnd(e){return console.log("zoom-end",e)},setPageFromHash(){const e=parseInt(window.location.hash.slice(1),10);isFinite(e)&&(this.targetPage=e,this.curPage=e)},onResize(){let e=this.$refs.viewport;if(!e)return;let s=e.clientWidth,t=e.clientHeight;this.isMobile=s<t,console.log("isMobile",this.isMobile)}},mounted(){return window.addEventListener("resize",()=>{this.onResize()}),this.onResize(),window.addEventListener("keydown",e=>{const{flipbook:s}=this.$refs;if(s)return 37===e.keyCode&&s.canFlipLeft&&s.flipLeft(),39===e.keyCode&&s.canFlipRight?s.flipRight():void 0}),setTimeout(()=>{let e=17;this.pages=[null,"images/cover.jpg","images/内页-电子稿.jpg"];for(let s=3;s<=e;s++)this.pages.push("images/内页-电子稿"+s+".jpg");this.pageCount=this.pages.length-1}),window.addEventListener("hashchange",this.setPageFromHash),this.setPageFromHash()},beforeDestroy(){window.addEventListener("resize",()=>{this.onResize,this.passive=!0})}},l=r,c=(t("034f"),t("2877")),f=Object(c["a"])(l,i,n,!1,null,null,null),d=f.exports,u=t("5efb"),b=t("1d87"),p=t("0c63"),h=t("55f1"),j=t("a600"),g=t("9571"),m=t("ed3b");a["a"].component(u["a"].name,u["a"]),a["a"].use(b["a"]),a["a"].use(p["a"]),a["a"].use(h["a"]),a["a"].use(j["a"]),a["a"].use(g["a"]),a["a"].use(m["a"]),new a["a"]({render:e=>e(d)}).$mount("#app")},"85ec":function(e,s,t){}});
//# sourceMappingURL=app.85dcbc29.js.map