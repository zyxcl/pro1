(function(e){function t(t){for(var n,c,i=t[0],o=t[1],u=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,i=1;i<s.length;i++){var o=s[i];0!==a[o]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},a={app:0},r=[];function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"05e1":function(e,t,s){"use strict";s("e17f")},"06a2":function(e,t,s){"use strict";s("a2d2")},2395:function(e,t,s){},2645:function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"4dad":function(e,t,s){"use strict";s("2645")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],c=(s("7c55"),s("2877")),i={},o=Object(c["a"])(i,a,r,!1,null,null,null),u=o.exports,l=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",[e._v("推荐歌单")]),s("div",{staticClass:"row"},e._l(e.personalized,(function(t){return s("dl",{key:t.id,on:{click:function(s){return e.golist(t.id)}}},[s("dt",[s("img",{attrs:{src:t.picUrl,alt:""}})]),s("dd",[e._v(e._s(t.name))])])})),0)])},f=[],p=s("1da1"),m=(s("96cf"),s("bc3a")),j=s.n(m),b={data:function(){return{banners:[],personalized:[]}},methods:{getBanners:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("https://zyxcl-music-api.vercel.app/banner",{params:{type:2}});case 2:s=t.sent,e.banners=s.data.banners;case 4:case"end":return t.stop()}}),t)})))()},getPersonalized:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("https://zyxcl-music-api.vercel.app/personalized",{limit:6});case 2:s=t.sent,e.personalized=s.data.result;case 4:case"end":return t.stop()}}),t)})))()},golist:function(e){this.$router.push({path:"/songlist",query:{id:e}})}},created:function(){this.getBanners(),this.getPersonalized()}},h=b,v=(s("05e1"),Object(c["a"])(h,d,f,!1,null,"765db93f",null)),g=v.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"song-page"},[s("div",{staticClass:"bg"},[s("img",{attrs:{src:e.songInfo.al.picUrl,alt:""}})]),s("div",{staticClass:"songInfo"},[s("h2",[e._v(e._s(e.songInfo.name))]),s("p",[e._v("歌手： "),e._l(e.songInfo.ar,(function(t){return s("span",{key:t.id},[e._v(e._s(t.name))])}))],2),s("p",[e._v("专辑："+e._s(e.songInfo.al.name))])]),s("div",{staticClass:"center",on:{click:function(t){e.showLyric=!e.showLyric}}},[e.showLyric?s("div",{staticClass:"lyric"},e._l(e.lyric,(function(t){return s("p",{key:t},[e._v(e._s(t))])})),0):s("div",{staticClass:"img"},[s("img",{attrs:{src:e.songInfo.al.picUrl,alt:""}})])]),s("div",{staticClass:"btns"},[s("p",[e._v("喜欢")]),s("p",[e._v("下载")]),s("p",{on:{click:function(t){e.showComments=!0}}},[e._v("评论")])]),s("div",{staticClass:"progress"},[s("span",[e._v(e._s(e.currentTime))]),s("p",{staticClass:"line"}),s("span",[e._v(e._s(e.duration))])]),s("div",{staticClass:"controls"},[s("div",{staticClass:"prev"},[e._v("上一首")]),s("div",{staticClass:"play",on:{click:e.changePlay}},[e._v(e._s(e.paused?"播放":"暂停"))]),s("div",{staticClass:"next"},[e._v("下一首")])]),s("audio",{ref:"audio",staticClass:"audio",attrs:{controls:"",src:e.curSong}}),e.showComments?s("div",{staticClass:"comments"},[s("span",{staticClass:"close",on:{click:function(t){e.showComments=!1}}},[e._v("x")]),s("h3",[e._v("评论")]),s("ul",e._l(e.comment,(function(t){return s("li",{key:t.commentId},[s("div",[s("h4",[e._v(e._s(t.user.nickname))]),s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.user.avatarUrl,alt:""}})])]),s("p",[e._v("评论时间："+e._s(t.timeStr))]),s("p",[e._v("点赞数量："+e._s(t.likedCount))]),s("p",[e._v(e._s(t.content))])])})),0)]):e._e()])},_=[],k=(s("b0c0"),s("ac1f"),s("1276"),s("c1df")),w=s.n(k),x={name:"Player",data:function(){return{songInfo:{al:{}},lyric:[],comment:[],curPlayIndex:0,songUrl:[],showComments:!1,showLyric:!1,currentTime:0,duration:0,paused:!0}},computed:{curSong:function(){return this.songUrl[this.curPlayIndex]?this.songUrl[this.curPlayIndex].url:""}},methods:{changePlay:function(){this.paused?this.$refs.audio.play():this.$refs.audio.pause()},getInfo:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("https://zyxcl-music-api.vercel.app/song/detail?timestamp="+Date.now(),{ids:e.$route.query.id});case 2:s=t.sent,console.log("歌曲详情",s.data),e.songInfo={name:s.data.songs[0].name,ar:s.data.songs[0].ar,al:s.data.songs[0].al};case 5:case"end":return t.stop()}}),t)})))()},getLyric:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("https://zyxcl-music-api.vercel.app/lyric?timestamp="+Date.now(),{id:e.$route.query.id});case 2:s=t.sent,console.log("获取歌词",s.data),e.lyric=s.data.lrc.lyric.split("\n");case 5:case"end":return t.stop()}}),t)})))()},getSongUrl:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("https://zyxcl-music-api.vercel.app/song/url?timestamp="+Date.now(),{id:e.$route.query.id});case 2:s=t.sent,console.log("音乐地址",s.data),e.songUrl=s.data.data;case 5:case"end":return t.stop()}}),t)})))()},getComment:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("https://zyxcl-music-api.vercel.app/comment/music?timestamp="+Date.now(),{id:e.$route.query.id});case 2:s=t.sent,console.log("评论",s.data),e.comment=s.data.hotComments;case 5:case"end":return t.stop()}}),t)})))()}},created:function(){this.getInfo(),this.getLyric(),this.getSongUrl(),this.getComment()},mounted:function(){var e=this;this.$refs.audio.addEventListener("canplaythrough",(function(){e.currentTime=w()(1e3*e.$refs.audio.currentTime).format("mm:ss"),e.duration=w()(1e3*e.$refs.audio.duration).format("mm:ss"),e.$refs.audio.addEventListener("timeupdate",(function(){e.currentTime=w()(1e3*e.$refs.audio.currentTime).format("mm:ss"),e.paused=e.$refs.audio.paused,console.log("正在播放",e.$refs.audio.currentTime,e.$refs.audio.duration,e.$refs.audio.paused)}))}))},activated:function(){console.log("player 组件被缓存，展示了")},deactivated:function(){console.log("player 组件被缓存，隐藏了")},destroyed:function(){console.log("player 销毁了")}},z=x,C=(s("06a2"),Object(c["a"])(z,y,_,!1,null,"221fbfc4",null)),O=C.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v(e._s(e.playlist.name))]),s("p",[e._v("介绍："+e._s(e.playlist.description))]),s("img",{attrs:{src:e.playlist.coverImgUrl,alt:""}}),s("ul",e._l(e.tracks,(function(t){return s("li",{key:t.id,on:{click:function(s){return e.goPlay(t.id)}}},[s("b",[e._v(e._s(t.name))]),e._v(" -- "),e._l(t.ar,(function(t){return s("span",{key:t.id},[e._v(e._s(t.name)+"，")])}))],2)})),0)])},P=[],I={data:function(){return{playlist:{},tracks:[]}},methods:{goPlay:function(e){this.$router.push({path:"/player",query:{id:e}})}},created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("https://zyxcl-music-api.vercel.app/playlist/detail?timestamp="+Date.now(),{id:e.$route.query.id});case 2:s=t.sent,console.log(s.data),e.playlist=s.data.playlist,e.tracks=s.data.playlist.tracks;case 6:case"end":return t.stop()}}),t)})))()},destroyed:function(){console.log("歌单组件销毁了")}},R=I,U=(s("4dad"),Object(c["a"])(R,$,P,!1,null,"951647b2",null)),S=U.exports;n["a"].use(l["a"]);var T=[{path:"/",name:"Home",component:g},{path:"/player",name:"Player",component:O},{path:"/songlist",name:"SongList",component:S}],L=new l["a"]({mode:"history",base:"/",routes:T}),q=L,E=s("2f62");n["a"].use(E["a"]);var D=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:q,store:D,render:function(e){return e(u)}}).$mount("#app")},"7c55":function(e,t,s){"use strict";s("2395")},a2d2:function(e,t,s){},e17f:function(e,t,s){}});
//# sourceMappingURL=app.888e5ca0.js.map