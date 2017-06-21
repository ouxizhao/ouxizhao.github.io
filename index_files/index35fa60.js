define("appmsg/index.js",["biz_common/utils/string/html.js","biz_wap/jsapi/a8key.js","biz_wap/utils/device.js","biz_common/dom/class.js","appmsg/log.js","biz_wap/utils/ajax.js","biz_common/dom/attr.js","appmsg/max_age.js","biz_wap/utils/mmversion.js","appmsg/test.js","biz_common/dom/event.js","biz_wap/jsapi/core.js","page/appmsg/page_mp_article_improve_combo.css","page/appmsg/not_in_mm.css","biz_common/utils/url/parse.js","appmsg/cdn_img_lib.js","appmsg/share.js","biz_common/log/jserr.js","biz_wap/ui/lazyload_img.js","appmsg/async.js","appmsg/copyright_report.js","appmsg/outer_link.js","appmsg/review_image.js","appmsg/iframe.js","appmsg/qqmusic.js","appmsg/voice.js","appmsg/weapp.js","appmsg/wxtopic.js","appmsg/cdn_speed_report.js","appmsg/page_pos.js","appmsg/report_and_source.js","appmsg/report.js","appmsg/fereport.js","biz_wap/safe/mutation_observer_report.js","sougou/index.js"],function(e){
"use strict";
function t(){
function t(e,t){
var o={
lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
},i=new Image;
i.onload=function(){
var o=i.width>0&&i.height>0;
t(e,o);
},i.onerror=function(){
t(e,!1);
},i.src="data:image/webp;base64,"+o[e];
}
function o(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e.timing){
var t=e.timing;
a("[Appmsg] dns:"+(t.domainLookupEnd-t.domainLookupStart)+"^^^ ssl:"+(0==t.secureConnectionStart?0:t.connectEnd-t.secureConnectionStart)+"^^^ tcp:"+(t.connectEnd-t.connectStart)+"^^^ request:"+(t.responseStart-t.requestStart)+"^^^ getPackageTime:"+(t.responseEnd-t.responseStart)+"^^^ domCententLoaded:"+(t.domContentLoadedEventStart-t.domLoading)+"^^^ domComplete:"+(t.domComplete-t.domLoading)+"^^^ firstViewTime:"+(real_show_page_time-t.navigationStart)+"^^^ interactiveTime:"+(page_endtime-t.navigationStart))+"^^^ ua:"+window.navigator.userAgent,
setTimeout(function(){
t.loadEventEnd&&a("[Appmsg] onload:"+(t.loadEventEnd-t.loadEventStart));
},100);
}
"function"!=typeof String.prototype.trim&&(String.prototype.trim=function(){
return this.replace(/^\s+|\s+$/g,"");
}),""==document.getElementById("js_content").innerHTML.trim()&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=24729_94_1");
var o=Math.random();
.001>o&&document.getElementById("js_read_area3")&&document.getElementById("js_read_area3").innerText&&document.getElementById("js_read_area3").innerText.indexOf("Pageview")>-1&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=24729_95_1"),
window.__wxjs_is_wkwebview&&window.__addIdKeyReport("28307",67);
}
var s=document.getElementsByTagName("body");
if(!s||!s[0])return!1;
s=s[0],function(){
var e=(new Date).getHours(),t=function(e,t){
t=t||"",window.isSg?(t=["uin:sougou","resp:"+t].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random()+"&from=sougou"):(t=["uin:"+top.window.user_uin,"resp:"+t].join("|"),
(new Image).src="/mp/jsreport?key="+e+"&content="+t+"&r="+Math.random());
},o=function(e,t,o){
var i=e+"_"+t;
o=o||1,window.logs.idkeys[i]||(window.logs.idkeys[i]={
val:0
}),window.logs.idkeys[i].val+=o;
},i=e>=11&&17>=e&&Math.random()<1,n=function(e,o){
i&&t(e,o);
};
window.__report=t,window.__commonVideoReport=n,window.__addIdKeyReport=o;
}();
var _=/^http(s)?:\/\/mp\.weixin\.qq\.com\//g;
try{
if(top!=window&&(!top||top&&top.location.href&&_.test(top.location.href))&&!window.isSg)throw new Error("in iframe");
}catch(h){
var A="",y=new Image;
y.src=("http://mp.weixin.qq.com/mp/jsreport?key=4&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key4]"+A+"&r="+Math.random()).substr(0,1024);
}
if(window.isInWeixinApp()&&/#rd$/.test(location.href)&&!window.isWeixinCached){
var v=-1!=location.href.indexOf("?")?"&":"?";
location.replace(location.href.replace(/#rd$/,v+"rd2werd=1#wechat_redirect"));
}
var b=e("biz_common/utils/url/parse.js");
e("appmsg/cdn_img_lib.js"),window.page_endtime=+new Date;
{
var x=!c.isWp&&-1==navigator.userAgent.indexOf("MicroMessenger");
-1!=navigator.userAgent.indexOf("WindowsWechat");
}
if(e("appmsg/share.js"),window.isSg||"mp.weixin.qq.com"==location.host){
var I=e("biz_common/log/jserr.js");
I({
key:0,
reporturl:"http://mp.weixin.qq.com/mp/jsreport?1=1",
replaceStr:/http(s)?:(.*?)js\//g
});
}
window.logs.webplog={
lossy:0,
lossless:0,
alpha:0,
animation:0,
total:0
};
var j=-1!=navigator.userAgent.indexOf("TBS/"),R=function(e,o){
t(e,function(e,t){
if(window.logs.webplog[e]=t?1:0,window.logs.webplog.total++,4==window.logs.webplog.total){
var i=window.logs.webplog,n=Math.random();
j&&1>=n&&(i.lossy=i.lossless=i.alpha=1,window.logs.webplog=i);
var a=i.lossy&i.lossless&i.alpha;
o(!!a);
}
});
},E=function(e){
c.isIOS&&c.gtVersion("6.6.0",!0)?(console.log("当前版本可以启用img代理"),g.invoke("imageProxyInit",{},function(t){
console.log(t),t.err_msg.indexOf(":ok")>-1&&(f=t.serverUrl),e();
})):e();
},z=function(e){
R("lossy",e),R("lossless",e),R("alpha",e),R("animation",e);
};
window.webp=!1,E(function(){
z(function(t){
function o(e){
e.width<40||e.height<40||-1==e.className.indexOf("img_loading")&&(e.className+=" img_loading");
}
function i(e){
if(!(e.width<40||e.height<40)){
var t=e.src;
if(e.className=e.className.replace("img_loading",""),-1==e.className.indexOf("img_loadederror")){
e.className+=" img_loadederror",e.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",
window.__addIdKeyReport("28307",51);
var i=function(){
window.__addIdKeyReport("28307",66),n(e),o(e);
var i=e.__retryload;
return i=0,t=t.https2http(),e.__retryload=i,e.src=b.addParam(t,"retryload",i,!0),
!1;
};
m.on(e,"click",i);
}
}
}
function n(e){
e.className=e.className.replace("img_loading",""),e.className=e.className.replace("img_loadederror","");
}
function r(e,t,o,i){
if(1*t.getAttribute("data-order")<5)return e;
var n=1e3*window.svr_time||+new Date;
n=new Date(n);
var a=n.getHours(),r=(60*a+n.getMinutes(),e),s=document.createElement("span");
s.className="gif_img_wrp",s.innerHTML='<span class="gif_img_tips" style="display:none;"><i class="gif_img_play_arrow"></i>动图</span><span class="gif_img_tips loading" style="display:none;"><i class="weui_loading gif_img_loading"></i>加载中</span>';
var d="click",p=function(){
if(s){
s.children.item(0).style.display="none",s.children.item(1).style.display="";
var e=t.onload;
t.onload=function(){
s&&(s.children.item(1).style.display="none",m.off(s,d,p),s=null),t.className+=" img_gif_onload",
e&&e.apply(t,arguments);
};
var o=t.onerror;
t.onerror=function(){
s&&(s.children.item(0).style.display="",s.children.item(1).style.display="none",
m.off(s,d,p),s=null),o&&o.apply(t,arguments);
},t.src=r,t.loadGif=!0,window.__addIdKeyReport("28307",15);
}
};
return t.autoTap=function(){
t.src=r,t.loadGif=!0,t.autoTap=null,m.off(s,d,p),window.__addIdKeyReport("28307",26);
},t.span=s,(window.user_uin&&100>(w/100|0)%100&&"MzI5NjExODQ4OA=="!==window.biz||location.href.indexOf("gif=1")>-1)&&(e=i.nogif(),
t.gray=!0,t.parentNode.insertBefore(s,t),s.appendChild(t),m.on(s,d,p),window.__addIdKeyReport("28307",16)),
e;
}
function s(e){
var t,o=getComputedStyle(e),i=new Image,n=o.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi,"$2"),a=o.backgroundSize,r=parseFloat(o.width.replace("px","")),s=parseFloat(o.height.replace("px","")),d=[r,s],p=[];
if(i.src=n,t=i.width>i.height?i.width/i.height:i.height/i.width,a=a.split(" "),p[0]=a[0],
p[1]=a.length>1?a[1]:"auto","cover"===a[0])d[0]>d[1]&&d[0]/d[1]>=t?(p[0]=d[0],p[1]="auto"):(p[0]="auto",
p[1]=d[1]);else if("contain"===a[0])d[0]<d[1]?(p[0]=d[0],p[1]="auto"):d[0]/d[1]>=t?(p[0]="auto",
p[1]=d[1]):(p[1]="auto",p[0]=d[0]);else for(var c=a.length;c--;)a[c].indexOf("px")>-1?p[c]=a[c].replace("px",""):a[c].indexOf("%")>-1&&(p[c]=d[c]*(a[c].replace("%","")/100));
return"auto"===p[0]&&"auto"===p[1]?(p[0]=i.width,p[1]=i.height):(t="auto"===p[0]?i.height/p[1]:i.width/p[0],
p[0]="auto"===p[0]?i.width/t:p[0],p[1]="auto"===p[1]?i.height/t:p[1]),{
width:p[0],
height:p[1]
};
}
window.webp=t,t&&window.localStorage&&window.localStorage.setItem&&window.localStorage.setItem("webp","1"),
window.logs.img={
download:{},
read:{},
load:{}
};
var p=document.getElementById("js_cover");
if(p){
var c=p.getAttribute("data-src");
if(c){
if(c.isCDN()){
var l=new Date;
for(l.setFullYear(2014,9,1);-1!=c.indexOf("?tp=webp");)c=c.replace("?tp=webp","");
for(;-1!=c.indexOf("&tp=webp");)c=c.replace("&tp=webp","");
1e3*ct>=l.getTime()&&""!=img_format&&"gif"!=img_format&&(c=c.replace(/\/0$/,"/640"),
c=c.replace(/\/0\?/,"/640?"),p.dataset&&(p.dataset.s="300,640")),t&&(c=b.addParam(c,"tp","webp",!0)),
c=b.addParam(c,"wxfrom","5",!0),is_https_res||u?c=c.http2https():("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(c=c.https2http());
}
setTimeout(function(){
p.onload=function(){
d(p,"height","auto","important"),d(p,"visibility","visible","important");
},p.setAttribute("src",c);
},0),window.logs.img.read[c]=!0,window.logs.img.load[c]=!0,p.removeAttribute("data-src");
}
}
var g=e("biz_wap/ui/lazyload_img.js"),_=1;
window.logs.outer_pic=0;
for(var h=document.getElementsByTagName("img"),A=0,y=h.length;y>A;++A){
var v=h[A].getAttribute("data-src");
v&&v.isGif()&&h[A].className.indexOf("__bg_gif")<0&&(h[A].className+=" __bg_gif"),
o(h[A]);
}
for(var x=document.getElementsByClassName("__bg_gif"),A=0,y=x.length;y>A;++A)x[A].setAttribute("data-order",A);
var I=!1,j=function(){
if(!I){
I=!0;
for(var e=document.getElementsByClassName("__bg_gif"),t=function(e){
var t=document.createElement("span"),o=document.createElement("div");
o.style.position="relative",o.style.height=0,o.className="gif_bg_tips_wrp",t.className="gif_img_tips_group",
t.innerHTML='<span class="gif_img_tips"><i class="gif_img_play_arrow"></i>动图</span><span class="gif_img_tips loading" style="display:none;"><i class="weui_loading gif_img_loading"></i>加载中</span>',
o.appendChild(t);
var i=getComputedStyle(e),n=i.backgroundPosition,a=i.backgroundPositionX||n.split(" ")[0],r=i.backgroundPositionY||n.split(" ")[1]||backgroundPositionX,d=s(e),p=parseFloat(d.width),c=parseFloat(d.height);
if(120>p||120>c)return"autoTap";
var l,g,w=e.clientWidth,_=e.clientHeight,u=i.backgroundOrigin,f=i.backgroundImage.slice(4,-1).replace(/"/g,""),h=parseFloat(i.paddingLeft),A=parseFloat(i.borderLeftWidth),y=parseFloat(i.paddingRight),v=parseFloat(i.borderRightWidth),b=parseFloat(i.paddingTop),x=parseFloat(i.borderTopWidth),I=parseFloat(i.paddingBottom),j=parseFloat(i.borderBottomWidth),R=parseFloat(i.marginTop),E=parseFloat(i.marginLeft);
"padding-box"===u?(l=A+E,g=x+R):"border-box"===u?(w+=A+v,_+=x+j,l=E,g=R):"content-box"===u&&(w-=y+h,
_-=b+I,l=A+E+h,g=x+R+b);
var z;
if(a.indexOf("%")>=0){
var q=.01*parseFloat(a);
z=(w-p)*q;
}else a.indexOf("px")>=0&&(z=parseFloat(a));
var B;
if(r.indexOf("%")>=0){
var q=.01*parseFloat(r);
B=(_-c)*q;
}else r.indexOf("px")>=0&&(B=parseFloat(r));
var k=B+g+c,O=z+l;
O=Math.max(O,E),k=Math.min(k,_+5+g),O+=10,k-=35,t.style.top=k+"px",t.style.left=O+"px";
var S="click",K=function(){
if(t){
t.children.item(0).style.display="none",t.children.item(1).style.display="";
var o=new Image,i=f;
f.indexOf("mmbiz_gif")>=0?i=i.replace("/s640?","/0?"):(i=i.replace("/s640?","/0?"),
i+="&wx_fmt=gif"),o.src=i,o.onload=function(){
t&&(t.children.item(1).style.display="none",m.off(t,S,K),t=null),e.style.backgroundImage='url("'+i+'")',
e.loadGif=!0;
},o.onerror=function(){
t&&(t.children.item(0).style.display="",t.children.item(1).style.display="none",
m.off(t,S,K),t=null);
},window.__addIdKeyReport("28307",15);
}
};
return m.on(t,S,K),o;
},o=5,i=function(e){
var t=getComputedStyle(e),o=t.backgroundImage.slice(4,-1).replace(/"/g,""),i=o;
o.indexOf("/mmbiz_gif/")>=0?i=i.replace("/s640?","/0?"):(i=i.replace("/s640?","/0?"),
i+="&wx_fmt=gif"),e.style.backgroundImage='url("'+i+'")',e.loadGif=!0;
},n=0,a=e.length;a>n;++n){
var r=e[n].getAttribute("data-src");
if(!(r&&r.isGif()||e[n].loadGif))if(o>n)i(e[n]);else{
var d=t(e[n]);
"autoTap"===d?i(e[n]):e[n].parentNode.insertBefore(d,e[n]);
}
}
}
};
m.on(window,"load",j),setTimeout(function(){
j();
},1e4),function(){
var e="onorientationchange"in window?"orientationchange":"resize";
m.on(window,e,function(){
if(I){
for(var e=document.getElementsByClassName("gif_bg_tips_wrp");e.length>0;)e[0].parentNode.removeChild(e[0]);
I=!1,j();
}
});
}(),new g({
attrKey:"data-src",
imgOccupied:!0,
lazyloadHeightWhenWifi:function(){
var e,t=1,o=1;
e=window.svr_time?new Date(1e3*window.svr_time):new Date;
var i=e.getHours();
return i>=20&&23>i&&(t=.5,o=0),{
bottom:t,
top:o
};
},
inImgRead:function(e){
e&&(window.logs.img.read[e]=!0);
},
changeSrc:function(e,t,o){
if(!t)return"";
var i=t;
if(i=i.replace(/(\?tp=webp)|(\?tp=wxpic)|(&tp=webp)|(&tp=wxpic)/g,""),t.isCDN()){
(e.dataset&&e.dataset.s||-1!=t.indexOf("wx_fmt=")&&-1==t.indexOf("wx_fmt=gif"))&&(i=i.replace(/\/0$/,"/640"),
i=i.replace(/\/0\?/,"/640?"));
var n,s=top.window.navigator.userAgent,d=/TBS\/([\d\.]+)/i,p=s.match(d);
p&&p[1]&&(n=parseInt(p[1]));
var c=0,l=top.window.user_uin||0,m=0!==l&&Math.floor(l/100)%1e3<c;
m&&43220==n&&i.isGif()?(i=b.addParam(i,"tp","wxpic",!0),window.__addIdKeyReport("28307",91)):window.webp&&(i=b.addParam(i,"tp","webp",!0),
window.__addIdKeyReport("28307",84)),i=b.addParam(i,"wxfrom","5",!0),is_https_res||u?(i=i.http2https(),
window.__addIdKeyReport("28307",77)):("http:"==location.protocol||-1!=navigator.userAgent.indexOf("MicroMessenger"))&&(i=i.https2http(),
window.__addIdKeyReport("28307",70));
}else try{
var d=new RegExp("^http(s)?://((mmbiz.qpic.cn/.*)|(m.qpic.cn/.*)|(mmsns.qpic.cn/.*)|(shp.qpic.cn/.*)|(wx.qlogo.cn/.*)|(mmbiz.qlogo.cn/.*)|((a|b)[0-9]*.photo.store.qq.com/.*)|(mp.weixin.qq.com/.*)|(res.wx.qq.com/.*))");
d.test(t)||(window.__addIdKeyReport("28307",9),window.logs.outer_pic++);
}catch(g){}
var w=/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g;
i=i.replace(w,"http://m.qpic.cn"),i=b.addParam(i,"wx_lazy","1",!0);
var _=i;
return f&&i.isGif()&&(window.__addIdKeyReport("28307",106),i=b.addParam(i,"tp","wxpic",!0),
i=f+"hevc?url="+encodeURIComponent(i)+"&type=gif",console.log("hevc changeSrc : "+i)),
t.isGif()&&(i=r(i,e,o,_)),window.logs.img.load[i]=!0,a("[Appmsg] image_load_event_change_src. originsrc:"+t+"  ^^^ newsrc : "+i),
e.start_load_time=+new Date,i;
},
onerror:function(e,t){
var o=t?t.__retryload||0:0;
if(1==o&&i(t),e&&!(o>_)){
if(!e.isCDN()){
if(!f)return;
if(-1==e.indexOf(f))return;
}
var n=0==e.indexOf("https://")?7:0;
if(window.__addIdKeyReport("28307",72+n),window.__addIdKeyReport("28307",75+1*o+n),
e.isWxpic()?(window.__addIdKeyReport("28307",93),window.__addIdKeyReport("28307",96+1*o)):e.isWebp()&&(window.__addIdKeyReport("28307",86),
window.__addIdKeyReport("28307",89+1*o)),f&&e.indexOf(f)>-1&&window.__addIdKeyReport("28307",108),
_>o){
if(o++,t.__retryload=o,1==o&&e.indexOf("http://")>-1?(e=e.http2https(),window.__addIdKeyReport("28307",60),
window.__addIdKeyReport("28307",77)):1==o&&e.indexOf("https://")>-1&&(e=e.https2http(),
window.__addIdKeyReport("28307",61),window.__addIdKeyReport("28307",70)),f&&e.indexOf(f)>-1){
console.log("加载hevc 失败： "+e);
var r=e.split("hevc?url=")[1];
r=r.split("&type")[0],r=decodeURIComponent(r),r=r.replace("tp=wxpic",""),e=r.https2http(),
console.log("重试src: "+e);
}
t.start_load_time=+new Date,t.src=b.addParam(e,"retryload",o,!0);
}
window.__has_imgfailed||(window.__has_imgfailed=!0,window.__addIdKeyReport("28307",65)),
a("[Appmsg] image_load_event_on_error. src:"+e),t.setAttribute("data-fail",1);
var s=10;
/tp\=webp/.test(e)&&(s=11);
var d=new Image;
d.src="http://mp.weixin.qq.com/mp/jsreport?key="+s+"&content="+(encodeURIComponent(e)+"["+uin+"]")+"&r="+Math.random();
}
},
onload:function(e,t){
n(t),t.gray&&!t.loadGif&&((t.width||t.naturalWidth)<120||(t.height||t.naturalHeight)<120?t.autoTap&&t.autoTap():t.span&&t.span.children&&t.span.children.item(0)&&(t.span.children.item(0).style.display=""));
var o=t?t.__retryload||0:0;
if(!(o>_)){
a("[Appmsg] image_load_event_onload_image. src:"+e+"  ^^^  retryloadtimes: "+o),
t.setAttribute("data-fail",0);
var i=0==e.indexOf("https://")?7:0;
window.__addIdKeyReport("28307",71+i),window.__addIdKeyReport("28307",73+1*o+i),
e.isWxpic()?(window.__addIdKeyReport("28307",92),window.__addIdKeyReport("28307",94+1*o)):e.isWebp()&&(window.__addIdKeyReport("28307",85),
window.__addIdKeyReport("28307",87+1*o)),f&&e.indexOf(f)>-1&&(console.log("加载hevc成功："+e),
window.__addIdKeyReport("28307",107)),window.__has_imgsucceed||(window.__has_imgsucceed=!0,
window.__addIdKeyReport("28307",64)),1==o&&e.indexOf("http://")>-1&&window.__addIdKeyReport("28307",50),
1==o&&e.indexOf("https://")>-1&&window.__addIdKeyReport("28307",52);
var r=Math.random(),s=+new Date-t.start_load_time;
s&&0==e.indexOf("https://")&&.5>r?(window.__addIdKeyReport("27822",121,s),window.__addIdKeyReport("27822",122)):s&&5e-4>r&&(window.__addIdKeyReport("27822",124,s),
window.__addIdKeyReport("27822",125));
}
},
detect:function(e){
if(e&&e.time&&e.loadList){
var t=e.time,o=e.loadList;
window.logs.img.download[t]=o;
}
},
container:document.getElementById("page-content")
});
});
}),e("appmsg/async.js"),!window.isSg;
var q=e("appmsg/copyright_report.js");
!function(){
var e=document.getElementById("post-user"),t=document.getElementById("copyright_info"),o=[],i=document.getElementById("post-user-headimg");
if(e){
var n="57";
"26"==window.source&&(n="95"),"28"==window.source&&(n="96"),"29"==window.source&&(n="39"),
"15"==window.source&&(n="121"),o.push({
dom:e,
username:user_name_new||user_name,
profileReportInfo:window.profileReportInfo||"",
scene:n
}),i&&o.push({
dom:i,
username:user_name_new||user_name,
profileReportInfo:window.profileReportInfo||"",
scene:n
});
}
t&&source_encode_biz&&o.push({
dom:t,
source_encode_biz:source_encode_biz,
scene:"110"
});
var s=document.getElementById("js_share_headimg");
s&&o.push({
dom:s,
username:source_username,
scene:0
});
var d=document.getElementById("js_share_author");
d&&o.push({
dom:d,
username:source_username,
scene:0
});
for(var p=0,l=o.length;l>p;p++)!function(e){
m.on(e.dom,"click",function(){
if("copyright_info"==e.dom.id&&source_encode_biz){
q.card_click_report({
scene:"0"
});
var t="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene="+e.scene+"#wechat_redirect";
-1!=navigator.userAgent.indexOf("WindowsWechat")||-1!=navigator.userAgent.indexOf("Mac OS")?location.href=t:g.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
});
}else{
if(a("[Appmsg] profile_click_before_loadprofile: username:"+e.username+", scene:"+e.scene),
r({
url:"/mp/appmsgreport?action=name_click",
data:{
url:location.href,
title:window.msg_title||"",
msgid:window.mid||"",
itemidx:window.idx||"",
__biz:window.biz||""
},
type:"POST",
dataType:"json",
async:!0,
success:function(){}
}),profileReportInfo){
var o=String(profileReportInfo).split("_");
3==o.length&&r({
url:"/mp/ad_biz_info?action=report&__biz="+window.biz+"&report_type=2&aid="+o[1]+"&tid="+o[2],
type:"GET",
dataType:"json",
async:!0,
success:function(){}
});
}
g.invoke("profile",{
username:e.username,
profileReportInfo:e.profileReportInfo||"",
scene:e.scene
},function(t){
window.__addIdKeyReport("28307","1"),a("[Appmsg] profile_click_after_loadprofile: username:"+e.username+", scene:"+e.scene+", profileReportInfo:"+e.profileReportInfo+", res.err_msg:"+t.err_msg);
});
}
return!1;
}),c.isWp&&e.dom.setAttribute("href","weixin://profile/"+e.username);
}(o[p]);
}(),function(){
location.href.match(/fontScale=\d+/)&&c.isIOS&&g.on("menu:setfont",function(e){
e.fontScale<=0&&(e.fontScale=100),document.getElementsByTagName("html").item(0).style.webkitTextSizeAdjust=e.fontScale+"%",
document.getElementsByTagName("html").item(0).style.lineHeight=160/e.fontScale;
});
}();
var B=e("appmsg/outer_link.js");
if(new B({
container:document.getElementById("js_content"),
changeHref:function(e,t){
if(e&&0==e.indexOf("http://mp.weixin.qq.com/s")){
e=e.replace(/#rd\s*$/,""),e=e.replace(/#wechat_redirect\s*$/,""),e=e.replace(/[\?&]scene=21/,"");
var o="&";
-1==e.indexOf("?")&&(o="?"),e+=o+"scene=21#wechat_redirect";
}else{
if(18==ban_scene)return"/mp/ban?action=check&__biz="+biz+"&mid="+mid+"&idx="+idx+"&scene="+ban_scene+"#wechat_redirect";
if(0!=e.indexOf("http://mp.weixinbridge.com/mp/wapredirect"))return"http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e)+"&action=appmsg_redirect&uin="+uin+"&biz="+biz+"&mid="+mid+"&idx="+idx+"&type="+t+"&scene=0";
}
return e;
}
}),!x){
var k=e("appmsg/review_image.js"),O=document.getElementById("js_cover"),S=[];
O&&S.push(O),new k({
container:document.getElementById("js_content"),
is_https_res:is_https_res,
imgs:S
});
}
!function(){
try{
var e=document.getElementById("js_content");
if(!e||!e.querySelectorAll)return;
for(var t=e.querySelectorAll("*"),o="list-paddingleft-2,selectTdClass,noBorderTable,ue-table-interlace-color-single,ue-table-interlace-color-double,__bg_gif".split(","),i=function(e){
if(e&&e.className){
for(var t=e.className.split(/\s+/),i=[],n=0,a=t.length;a>n;++n){
var r=t[n];
r&&-1!=o.indexOf(r)&&i.push(r);
}
e.className=i.join(" ");
}
},n=0,a=t.length;a>n;++n){
var r=t[n];
r.tagName&&"iframe"!=r.tagName.toLowerCase()&&i(r);
}
}catch(s){}
}(),window.fromWeixinCached||e("appmsg/iframe.js"),e("appmsg/qqmusic.js"),e("appmsg/voice.js"),
e("appmsg/weapp.js"),e("appmsg/wxtopic.js"),e("appmsg/cdn_speed_report.js"),e("appmsg/page_pos.js"),
setTimeout(function(){
window.article_improve_combo_css;
},0),setTimeout(function(){
m.tap(document.getElementById("copyright_logo"),function(){
location.href="http://kf.qq.com/touch/sappfaq/150211YfyMVj150326iquI3e.html";
}),p(),l(),e("appmsg/report_and_source.js"),function(){
if(x){
n.addClass(s,"not_in_mm");
var e=document.getElementById("js_pc_qr_code_img");
if(e){
var t=10000004,o=document.referrer;
if(0==o.indexOf("http://weixin.sogou.com")?t=10000001:0==o.indexOf("https://wx.qq.com")&&(t=10000003),
window.isSg)e.setAttribute("src",sg_qr_code.htmlDecode());else{
e.setAttribute("src","/mp/qrcode?scene="+t+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+t+"&r="+Math.random();
}
document.getElementById("js_pc_qr_code").style.display="block";
}
var a=document.getElementById("js_profile_qrcode"),r=document.getElementById("js_profile_arrow_wrp"),d=document.getElementById("post-user");
if(a&&d&&r){
var p=function(){
var e=10000005,t=document.referrer;
0==t.indexOf("http://weixin.sogou.com")?e=10000006:0==t.indexOf("https://wx.qq.com")&&(e=10000007);
var o=document.getElementById("js_profile_qrcode_img");
if(o)if(window.isSg)o.setAttribute("src",sg_qr_code.htmlDecode());else{
o.setAttribute("src","/mp/qrcode?scene="+e+"&size=102&__biz="+biz+"&mid="+mid+"&idx="+idx+"&sn="+sn+"&send_time="+send_time);
var i=new Image;
i.src="/mp/report?action=pcclick&__biz="+biz+"&uin="+uin+"&scene="+e+"&r="+Math.random();
}
return a.style.display="block",r.style.left=d.offsetLeft-a.offsetLeft+d.offsetWidth/2-8+"px",
!1;
};
m.on(d,"click",p),m.on(a,"click",p),m.on(document,"click",function(e){
var t=e.target||e.srcElement;
t!=d&&t!=a&&(a.style.display="none");
});
}
}else{
var c=document.getElementById("js_report_article3");
!!c&&(c.style.display="");
}
}(),function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=document.getElementById("img-content");
if(e&&t&&t.getBoundingClientRect){
var o=t.getBoundingClientRect().height;
window.scrollTo(0,o);
}
}(),e("appmsg/report.js");
for(var t=document.getElementsByTagName("map"),o=0,i=t.length;i>o;++o)t[o].parentNode.removeChild(t[o]);
if(q.card_pv_report(),Math.random()<.01)try{
var a="https://js.aq.qq.com/js/aq_common.js",r=document.createElement("script");
r.src=a;
var d=document.getElementsByTagName("head")[0];
d.appendChild(r);
}catch(c){}
var g=document.getElementById("js_close_temp");
m.on(g,"click",function(){
g.parentNode.parentNode.removeChild(g.parentNode),n.removeClass(document.getElementById("js_article"),"preview_appmsg");
});
},1e3),function(){
if(i.os.ios&&"onorientationchange"in window){
var e=[],t="onorientationchange"in window?"orientationchange":"resize",o=function(){
return 90===Math.abs(window.orientation)?1:2;
};
e.push({
ori:o(),
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
var n=(new Date).getHours();
m.on(window,t,function(){
var t=e.length-2,i=o();
if(t>=0){
var a=e[t],r=a.ori;
r!==i||e[e.length-1].istouchmove||(n>=11&&17>=n&&window.__report(63),window.scrollTo(0,a.scroll));
}
e.push({
ori:i,
scroll:window.pageYOffset||document.documentElement.scrollTop,
istouchmove:!1
});
}),m.on(window,"scroll",function(){
var t=e.length-1;
e[t].ori==o()&&(e[t].scroll=window.pageYOffset||document.documentElement.scrollTop,
e[t].istouchmove=!0);
});
}
}(),a("[Appmsg] href:"+location.href+"^^^ ua:"+window.navigator.userAgent),window.addEventListener?window.addEventListener("load",o,!1):window.attachEvent&&window.attachEvent("onload",o),
e("appmsg/fereport.js"),function(){
window.addEventListener&&document.getElementsByTagName("body")[0].addEventListener("copy",function(){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_18_1",
c.isIOS&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_19_1"),
c.isAndroid&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_20_1");
},!1);
}(),function(){
window.__observer&&window.__observer_data&&e("biz_wap/safe/mutation_observer_report.js");
}(),function(){
var e=[.875,1,1.125,1.25,1.375],t=window.location.href.match(/winzoom=(\d+(?:\.\d+)?)/);
if(t){
var o=parseFloat(t[1]);
if("undefined"!=typeof e.indexOf&&e.indexOf(o)>=0){
document.getElementById("page-content").style.zoom=o;
var i=document.getElementsByClassName("rich_media_title"),n=document.getElementsByClassName("rich_media_meta_list");
i&&i.length>1&&(i[0].style.zoom=1/o),n&&n.length>1&&(n[0].style.zoom=1/o);
}
}
}(),"undefined"!=typeof isSg&&e("sougou/index.js"),setTimeout(function(){
for(var e=function(){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_49_1&lc=1&log0=[28307_49_appmsg_fe_filter]"+encodeURIComponent(location.href);
},t=(window.appmsg_fe_filter||"").split(","),o=function(t,o){
try{
if(!t)return;
if(t.querySelectorAll){
var i=t.querySelectorAll("*["+o+"]");
if(i&&i.length>0){
e();
for(var n=0;n<i.length;++n)i[n]&&i[n].removeAttribute&&i[n].removeAttribute(o);
}
return;
}
var a=t.childNodes;
if(t.hasAttribute&&t.hasAttribute(o)&&e(),t.removeAttribute&&t.removeAttribute(o),
a&&a.length)for(var n=0;n<a.length;++n)filterContenteditable(a[n]);
}catch(r){}
},i=document.getElementById("js_content"),n=0;n<t.length;++n)t[n]&&o(i,t[n]);
},0),setTimeout(function(){
var e=999,t=636,o="http://mmbiz.qpic.cn/mmbiz_png/7lG1x2vpicdic0p5bBthpD9lsJcINicsSzd6uKQQJyoj5oTl8lFIs9K0fIibgxCzms0enDLTRxTHLpDPCLpSvIExiag/0",i=(new Date).getHours();
if(!(11>i||i>16||Math.random()<.99)){
var n=new Image;
n.onload=function(){
var o=n.naturalWidth||n.width,i=n.naturalHeight||n.height;
(o!=e||i!=t)&&window.__addIdKeyReport("28307","wifi"===window.networkType?120:123),
window.__addIdKeyReport("28307","wifi"===window.networkType?121:124);
},n.src=o;
}
},3e3);
}
e("biz_common/utils/string/html.js");
var o=e("biz_wap/jsapi/a8key.js"),i=e("biz_wap/utils/device.js"),n=e("biz_common/dom/class.js"),a=e("appmsg/log.js"),r=e("biz_wap/utils/ajax.js"),s=e("biz_common/dom/attr.js"),d=s.setProperty,p=e("appmsg/max_age.js"),c=e("biz_wap/utils/mmversion.js"),l=e("appmsg/test.js"),m=e("biz_common/dom/event.js"),g=e("biz_wap/jsapi/core.js"),c=e("biz_wap/utils/mmversion.js");
e("page/appmsg/page_mp_article_improve_combo.css"),e("page/appmsg/not_in_mm.css");
var w=top.window.user_uin||0,_=Math.floor(w/100)%1e3,u=0!==w&&1001>_,f="";
o.config({
onOutOfWeixinApp:function(){
console.log("onOutOfWeixinApp"),a("[Appmsg] onOutOfWeixinApp");
},
onNoCacheFuncWeixin:function(){
console.log("isWeixinCached == false"),a("[Appmsg] isWeixinCached == false");
},
onAlreadyHasA8Key:function(){
console.log("URL已有A8Key"),a("[Appmsg] URL alery has A8Key");
},
onJSAPIGetA8KeyStart:function(){
console.log("onJSAPIGetA8KeyStart"),a("[Appmsg] onJSAPIGetA8KeyStart");
},
onJSAPIGetA8KeyEnd:function(){
console.log("onJSAPIGetA8KeyEnd"),a("[Appmsg] onJSAPIGetA8KeyEnd");
},
onJSAPIGetA8KeyTimeout:function(){
console.log("onJSAPIGetA8KeyTimeout"),a("[Appmsg] onJSAPIGetA8KeyTimeout");
}
}),o.onReady(function(){
window.logs.pagetime.jsapi_ready_time=+new Date,window.logs.idkeys={},console.log("进入index.js init"),
a("[Appmsg] start run index.js init"),t();
});
});