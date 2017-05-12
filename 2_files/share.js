function addToKaixin(c_url,c_title){
	var blogTitle=c_title.replace(/'/g,'\'');
	window.open('http://www.kaixin001.com/repaste/share.php?rurl='+encodeURIComponent(c_url)+'&rtitle='+encodeURIComponent(blogTitle)+'&rcontent='+encodeURIComponent(c_url)+'');
}

function addToiTieba(c_url,c_title,c_domainname){
	var _videoId = c_url.substring(c_url.indexOf("/20")+1,c_url.indexOf(".shtml"));
	_videoId = _videoId.substring(0,_videoId.indexOf("/"))+_videoId.substring(_videoId.indexOf("/")+1,15);
	var filepath= "/flvxml/2009/"+_videoId.substring(4,6)+"/"+_videoId.substring(6,8)+"/";
	var video_content="http://player.cntv.cn/standard/cntvOutSidePlayer.swf?v=0.170.8.9.3&videoId="+_videoId+"&filePath="+filepath+"&url="+c_url+"&configPath="+c_domainname+"/player/config.xml&isAutoPlay=false&qmServerPath=http://220.181.168.129/stat.html&qmFrequency=10&outsideChannelId=860010-1204060100&relativeListUrl=&logoImageURL=&logoURL="+c_domainname;
	var blogTitle=c_title.replace(/'/g,'\'');
	window.open('http://tieba.baidu.com/i/sys/share?link='+encodeURIComponent(c_url)+'&type=video&title='+encodeURIComponent(blogTitle)+'&content='+encodeURIComponent(video_content)+'');
}

function addToQQ(c_url){
    window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+c_url);
}

function addToSina(c_url,c_title,c_domainname){
	var _videoId = c_url.substring(c_url.indexOf("/20")+1,c_url.indexOf(".shtml"));
	_videoId = _videoId.substring(0,_videoId.indexOf("/"))+_videoId.substring(_videoId.indexOf("/")+1,15);
	var filepath= "/flvxml/2009/"+_videoId.substring(4,6)+"/"+_videoId.substring(6,8)+"/";
	var video_content="http://player.cntv.cn/standard/cntvOutSidePlayer.swf?v=0.170.8.9.3&videoId="+_videoId+"&filePath="+filepath+"&url="+c_url+"&configPath="+c_domainname+"/player/config.xml&isAutoPlay=false&qmServerPath=http://220.181.168.129/stat.html&qmFrequency=10&outsideChannelId=860010-1204060100&relativeListUrl=&logoImageURL=&logoURL="+c_domainname;
	var blogTitle=c_title.replace(/'/g,'\'');
	addToSina1(screen,document,encodeURIComponent,'','','',blogTitle,c_url,'gb2312');
}

function addToSina1(s,d,e,r,l,p,t,z,c){
	var f='http://v.t.sina.com.cn/share/share.php?appkey=2078561600',u=z||d.location,p=['&url=',e(u),'&title=',e(t||d.title),'&source=',e(r),'&sourceUrl=',e(l),'&content=',c||'gb2312','&pic=',e(p||'')].join('');
	function a(){
		if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=440,height=430,left=',(s.width-440)/2,',top=',(s.height-430)/2].join('')))
			u.href=[f,p].join('');
		};
	if(/Firefox/.test(navigator.userAgent))
		setTimeout(a,0);else a();
}

function addToRenRen(url,title){
	window.open("http://share.renren.com/share/buttonshare.do?link="+url+"&title="+title);
}

function addToDouban(){
window.location.href="javascript:void(function(){var d=document,e=encodeURIComponent,s1=window.getSelection,s2=d.getSelection,s3=d.selection,s=s1?s1():s2?s2():s3?s3.createRange().text:'',r='http://www.douban.com/recommend/?url='+e(d.location.href)+'&title='+e(d.title)+'&sel='+e(s)+'&v=1',x=function(){if(!window.open(r,'douban','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href=r+'&r=1'};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})()";
}

function addTo51(){
var url_51='http://diary.51.com/mod/diary_video_interface.php?url='+encodeURIComponent(document.location);
window.open(url_51);
}


function postToWb(){
	var _url = encodeURIComponent(location.href);
	var _pic = encodeURI('');
	var _t = '';
	var metainfo = document.getElementsByTagName("meta");
	for(var metai = 0;metai < metainfo.length;metai++){
		if((new RegExp('description','gi')).test(metainfo[metai].getAttribute("name"))){
			_t = metainfo[metai].attributes["content"].value;
		}

	}
	//_t = document.title+_t;
	_t = document.title;
	if(_t.length > 120){
		_t= _t.substr(0,117)+'...';
	}
	_t = encodeURI(_t);
	var _u = 'http://share.v.t.qq.com/index.php?c=share&a=index&url='+_url+'&appkey=801099517&pic='+_pic+'&assname=&title='+_t;
	window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
}

function addToCNTV(title,url){
	var weiboUrl = encodeURIComponent(url);
	var weiboSubject = encodeURIComponent(title);
	var wurl = 'http://t.cntv.cn/index.php?m=share&url='+weiboUrl+'&title='+weiboSubject;
	window.open(wurl);
}


