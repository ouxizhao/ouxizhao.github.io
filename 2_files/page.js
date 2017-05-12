/*
UTF-8, no BOM
3.0模板用脚本
15:27 2008-12-19
*/
var Base={
	setCookie:function(sName, sValue){
		var date=new Date();
		date.setTime(date.getTime()+31536000000);
		document.cookie = sName + "=" + escape(sValue) + "; expires=" + date.toGMTString();
	},
    delCookie:function(sName){
        if(Base.getCookie(name)){
            document.cookie=sName+"="+((domain)?"; domain="+dm:"")+"; expires=Thu, 01-Jan-70 00:00:01 GMT";
        }
    },
	getCookie:function(sName){
		var aCookie = document.cookie.split("; ");
		for (var i=0; i < aCookie.length; i++)
		{
			var aCrumb = aCookie[i].split("=");
			if (sName == aCrumb[0]) 
				return unescape(aCrumb[1]);
		}
		return "";
	},
    trimL:function(txt){
		return txt.replace(/^\s*/,"");
	},
    trimR:function(txt){
		return txt.replace(/\s*$/,"");
	},
    trim:function(txt){
		return this.trimL(this.trimR(txt));
	},
	/*check explorer type
	*/
	isIE6:function(){
		return navigator.userAgent.indexOf('MSIE')>0&&navigator.userAgent.indexOf('6')>0;
	},
	isIE:function(){
		return navigator.userAgent.indexOf('MSIE')>0;
	},
	isOpera:function(){
		return navigator.userAgent.indexOf('Opera')>-1;
	},
	isMoz:function(){
		return navigator.userAgent.indexOf('Mozilla/5.')>-1;
	}
};


/*
dom
*/
var Dom={
/*
node
*/
//$ -> getBy
    $id:function(nodeId){
    	if(typeof nodeId=='string'){
    		return document.getElementById(nodeId);
    	}else if(typeof nodeId=='object'){
    		return nodeId;
    	}else{
			return false;
		}
    },
	$idInNode:function(nodeId, pNode){// have not finish
		if(!pNode){
			return Dom.$id(nodeId);
		}else{
			return false;
		}
    },
    $tagInNode:function(tagName, pNode){
		if(!pNode){
			pNode=document;
		}
		reNodes=pNode.getElementsByTagName(tagName);
		if(reNodes&&reNodes.length){
			return reNodes;
		}else{
			return false;
		}
    },
//reXxxx -> use to return value
    $tagInNodeChild:function(tagName, pNode){
		if(!pNode){
			pNode=document;
		}
		var nodes=pNode.childNodes;
		if(!(nodes&&nodes.length)){return false;}
		var reNodes=[];
		for(var i=0; i<nodes.length; i++){
			var node=nodes[i];
			if(node.nodeName.toLowerCase()==tagName){
				reNodes[reNodes.length]=node;
			}
		}
		if(reNodes.length){
			return reNodes;
		}else{
			return false;
		}
    },
    $withClassInNodeChild:function(className, pNode){
		if(!pNode){
			pNode=document;
		}
		var nodes=pNode.childNodes;
		if(!(nodes&&nodes.length)){return false;}
		var reNodes=[];
		for(var i=0; i<nodes.length; i++){
			var node=nodes[i];
			if(node.className.toLowerCase()==className){
				reNodes[reNodes.length]=node;
			}
		}
		if(reNodes.length){
			return reNodes;
		}else{
			return false;
		}
    },
    /*$hasClassInNodeChild:function(className, pNode){},*/
    $tagWithClassInNode:function(tagName, className, pNode){
		var nodes=Dom.$tagInNode(tagName, pNode);
		var reNodes=[];
		for(var i=0; i<nodes.length; i++){
			var node=nodes[i];
			if(Dom.isClass(className, node)){
				reNodes[reNodes.length]=node;
			}
		}
		return reNodes;
	},
    $tagHasClassInNode:function(tagName, className, pNode){
		var nodes=Dom.$tagInNode(tagName, pNode);
		if(!nodes){return false;}
		var reNodes=[];
		for(var i=0; i<nodes.length; i++){
			var node=nodes[i];
			if(Dom.hasClass(className, node)){
				reNodes[reNodes.length]=node;
			}
		}
		if(reNodes.length){
			return reNodes;
		}else{
			return false;
		}
	},
    $tagHasClassInNodeChild:function(tagName, className, pNode){
		var nodes=Dom.$tagInNodeChild(tagName, pNode);
		if(!nodes){return false;}
		var reNodes=[];
		for(var i=0; i<nodes.length; i++){
			var node=nodes[i];
			if(Dom.hasClass(className, node)){
				reNodes[reNodes.length]=node;
			}
		}
		if(reNodes.length){
			return reNodes;
		}else{
			return false;
		}
	},
/*
class
*/
	isClass:function(className, node){
		if((!node)||(!className)){return null;}
		var reFlag=false;
		if(node.className==className){
			reFlag=true;
		}
		return reFlag;
	},
	hasClass:function(className, node){
		if((!className)||(!node)||(!node.className)){return false;}
		return (new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(node.className));
	},
	addClass:function(className, node){
		if((!className)||(!node)){return false;}
		if(Dom.hasClass(className, node)){return true;}
		var newClassName=node.className?node.className+' '+className:className;
		node.className=newClassName;
		return true;
	},
	removeClass:function(className, node){
		if(!(Dom.hasClass(className, node))){return;}
		var nodeClassName=node.className;
		if(nodeClassName==className){
			nodeClassName="";
		}else{
			nodeClassName=Base.trim(nodeClassName.replace(new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)', 'g'), ""));
		}
		node.className=nodeClassName;
	},
	replaceClass:function(className, newClassName, node){
		if(className===newClassName){return;}
		if(!(Dom.hasClass(className, node))){
			Dom.addClass(newClassName, node);
			return;
		}
		node.className=Base.trim(node.className.replace((new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)', 'g')), ' '+newClassName +' '));
		if(Dom.hasClass(className, node)){
			Dom.replaceClass(className, newClassName, node);
		}
	},
	setClass:function(className, node){
		node.className=className;
	},
	clearClass:function(node){
		node.className="";
	},
	
	isAncestor: function(haystack, needle){
		haystack = Dom.$id(haystack);
		if (!haystack || !needle) { return false; }
		
		if (haystack.contains && (navigator.userAgent.toLowerCase().indexOf('safari') == -1)) { // safari "contains" is broken
			return haystack.contains(needle);
		}else if ( haystack.compareDocumentPosition ) {
			return !!(haystack.compareDocumentPosition(needle) & 16);
		}else { // loop up and test each parent
			var parent = needle.parentNode;
			
			while (parent) {
				if (parent == haystack) {
					return true;
				}else if (!parent.tagName || parent.tagName.toUpperCase() == 'HTML') {
					return false;
				}
				parent = parent.parentNode;
			}
			return false;
		}     
	}

};

var kEvent=(function(){

return {
	addEvent: function(element, name, observer, useCapture) {
		try{
			element=Dom.$id(element);
			if(element.addEventListener){
				element.addEventListener(name, observer, useCapture);
			}else if(element.attachEvent){
				element.attachEvent('on' + name, observer);
			}
		}catch(e){}
	},
	
	delEvent: function(el, sType, fn) {
		if (window.removeEventListener) {
			el.removeEventListener(sType, fn, false);
		} else if (window.detachEvent) {
			el.detachEvent("on" + sType, fn);
		}
	},

	getTarget: function(ev) {
		var t = ev.target || ev.srcElement;
		return this.resolveTextNode(t);
	},
	
	resolveTextNode: function(node) {
		/* if (node && node.nodeName && 
				 "#TEXT" == node.nodeName.toUpperCase()) {*/
		if (node && 3 == node.nodeType) {
			return node.parentNode;
		} else {
			return node;
		}
	},
	
	getRelatedTarget: function(ev) {
		var t = ev.relatedTarget;
		if (!t) {
			if (ev.type == "mouseout") {
				t = ev.toElement;
			} else if (ev.type == "mouseover") {
				t = ev.fromElement;
			}
		}
		return this.resolveTextNode(t);
	},
	
	stopEvent: function(ev) {
		this.stopPropagation(ev);
		this.preventDefault(ev);
	},
	
	stopPropagation: function(ev) {
		if (ev.stopPropagation) {
			ev.stopPropagation();
		} else {
			ev.cancelBubble = true;
		}
	},
	
	preventDefault: function(ev) {
		if (ev.preventDefault) {
			ev.preventDefault();
		} else {
			ev.returnValue = false;
		}
	}
}


})();


var kStyle={
	blankImgSrc: "http://www.cctv.com/library/image/dot/dot_blank.gif",
	fixPngBg: function(element){
		if(typeof element=='string'){element=Dom.$id(element);}
		if((!(element.currentStyle))||((navigator.appName.toLowerCase().indexOf('internet explorer'))==-1)){return;}
		var xSrc=kStyle.getRealStyle(element).backgroundImage;
		if(xSrc.indexOf('.png')==-1){
			return;
		}
		element.style.backgroundImage="none";
		element.style.filter ="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod='scale', src='"+xSrc.substring(5, xSrc.length-2)+"')";
		/*var links=element.getElementByTagName("a");
		for(var i=0;i<links.length;i++){
			links[i].style.position="relative";
		}*/
	},
	fixPngImg: function(element){
		if(typeof element=='string'){element=Dom.$id(element);}
		if(!(jQuery.browser.msie && jQuery.browser.version<'7.0')){return;}
		var xSrc=element.src;
		if(xSrc.indexOf('.png')==-1){
			return;
		}
		element.src=this.blankImgSrc;
		element.style.filter ="progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod='scale', src='"+xSrc+"')";
	},
	getRealStyle: function(element){
		var reStyle;
		element=Dom.$id(element);
		if(!element){
			return false;
		}
		if (element.currentStyle){
			reStyle = element.currentStyle;
		}else if (window.getComputedStyle){
			reStyle = window.getComputedStyle(element, null);
		}else{
			reStyle = null;
		}
		return reStyle;
	},
	setAtt: (function(){
				if (Base.isIE()) {
					return (function(el, property, val) {
						switch (property) {
							case 'opacity':
								if (typeof el.style.filter == 'string' ) {
									el.style.filter = 'alpha(opacity=' + val * 100 + ')';
									if (!el.currentStyle || !el.currentStyle.hasLayout) {
										el.style.zoom = 1;
									}
								}
								break;
							default:
								el.style[property] = val;
						}
					});
				} else {
					return (function(el, property, val) {
						el.style[property] = val;
					});
				}
			})(),
	getAtt: (function(){
		var patterns = {
			HYPHEN: /(-[a-z])/i
		};
		var toCamel = function(property) {
			if ( !patterns.HYPHEN.test(property) ) {
				return property; // no hyphens
			}
			
			if (propertyCache[property]) { // already converted
				return propertyCache[property];
			}
			
			while( patterns.HYPHEN.exec(property) ) {
				property = property.replace(RegExp.$1,
						RegExp.$1.substr(1).toUpperCase());
			}
			
			propertyCache[property] = property;
			return property;
		};

		if (document.defaultView && document.defaultView.getComputedStyle) {
        	return (function(el, property) {
				var value = null;
				
				var computed = document.defaultView.getComputedStyle(el, '');
				if (computed) { // test computed before touching for safari
					value = computed[toCamel(property)];
				}
				
				return el.style[property] || value;
        	});
		} else if (document.documentElement.currentStyle && Base.isIE()) {// IE method
			return (function(el, property) {
				switch( toCamel(property) ) {
					case 'opacity' :// IE opacity uses filter
						var val = 100;
						try { // will error if no DXImageTransform
							val = el.filters['DXImageTransform.Microsoft.Alpha'].opacity;
						} catch(e) {
							try { // make sure its in the document
								val = el.filters('alpha').opacity;
							} catch(e) {}
						}
						return val / 100;
						break;
					default:
						// test currentStyle before touching
						var value = el.currentStyle ? el.currentStyle[property] : null;
					return ( el.style[property] || value );
				}
        	});
		} else { // default to inline only
			return (function(el, property) {return el.style[property];});
		}
	})()
};

var kAnimator={
	FPS:30,
	create:function(){
		
	},
	getPV:function(v1, v2, percent, Method){//取进度值
		var reV=(v2-v1)*Math.sin(Math.PI*percent/2)+v1;
		return reV;
	}
};
var Animation_FPS=Animation_FPS||30;

Math.getDegree=function(radian){
	return radian*180/(Math.PI);
};
Math.getRadian=function(degree){
	return degree*(Math.PI)/180;
};

Date.prototype.getWeekBegin=function(b){
	(b === undefined) && (b = 1);
	var diff=this.getDay()-b;
	if(diff < 0){diff+=7;}
	return (new Date(this.getTime()-diff*86400000));
};
Date.prototype.getYMD=function(){
	var reV01=this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate();
	return reV01;
};
Date.prototype.setYMD=function(sYMD){
	try{
		var d=sYMD.split("-");
		this.setFullYear(d[0], d[1]-1, d[2]);
		return this;
	}catch(e){return false;}
};
Date.fromYMD=function(sYMD){
	try{
		var d=sYMD.split("-");
		return (new Date(d[0], d[1]-1, d[2]));
	}catch(e){return}
};

/**
 * addVideo('/Library/media/data/football.wmv', 320, 240, true, {type:"wmv"});
*/

if(typeof addVideo !== 'function'){
	function addVideo(src, w, h, isAutoPlay, isPlayCount ,opt){
		var objId='media_' + new Date().getTime();
		var strMoz='<embed ';
		strMoz+='type="application/x-mplayer2" ';
		strMoz+='pluginspage="http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/" ';
		strMoz+='name="mediaObjectId" ';
		strMoz+='filename="mediaSrcForReplace" ';
		strMoz+='autostart="mediaIsAutoStartForReplace" ';
		strMoz+='enablecontextmenu="1" ';
		strMoz+='clicktoplay="1" ';
		strMoz+='enablepositioncontrols="0" ';
		strMoz+='showcontrols="1" ';
		strMoz+='showdisplay="0" ';
		strMoz+='showstatusbar="1" ';
		strMoz+='showtracker="1" ';
		strMoz+='width="mediaWidthForReplace" ';
		strMoz+='height="mediaHeightForReplace"> ';
		//strMoz+='playcount="mediaIsPlayCountForReplace" ';
		strMoz+='</embed>';
		//使用查找替换的方法，进行初始化
		var strIE='<object classid="CLSID:22D6f312-B0F6-11D0-94AB-0080C74C7E95" codebase="http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701" ';
		strIE+='id="mediaObjectId" ';
		strIE+='type="application/x-oleobject" ';
		strIE+='width="mediaWidthForReplace" ';
		strIE+='height="mediaHeightForReplace">';
		strIE+='<param name="AnimationAtStart" value="true">';
		strIE+='<param name="AutoRewind" value="-1">';
		strIE+='<param name="AutoStart" value="mediaIsAutoStartForReplace">';
		strIE+='<param name="AutoSize" value="0">';
		strIE+='<param name="Balance" value="0">';
		strIE+='<param name="ClickToPlay" value="true">';
		strIE+='<param name="EnableContextMenu" value="true">';
		strIE+='<param name="EnablePositionControls" value="true">';
		strIE+='<param name="FileName" value="mediaSrcForReplace">';
		strIE+='<param name="PlayCount" value="mediaIsPlayCountForReplace">';
		strIE+='<param name="ShowControls" value="true">';
		strIE+='<param name="ShowStatusBar" value="1">';
		strIE+='<param name="ShowTracker" value="true">';
		strIE+='</object>';
		try{
			var strToInsert=(Base.isIE())?strIE:strMoz;
			var mediaRef;
			if(src && (typeof src=='string')){
				strToInsert=strToInsert.replace(/mediaSrcForReplace/, src);
			}else{
				strToInsert=strToInsert.replace(/mediaSrcForReplace/, "");
			}
			if(w && (typeof parseInt(w)=='number')){
				strToInsert=strToInsert.replace(/mediaWidthForReplace/, w);
			}else{
				strToInsert=strToInsert.replace(/mediaWidthForReplace/, '320');
			}
			if(h && (typeof parseInt(h)=='number')){
				strToInsert=strToInsert.replace(/mediaHeightForReplace/, h);
			}else{
				strToInsert=strToInsert.replace(/mediaHeightForReplace/, '240');
			}
			if(isAutoPlay){
				strToInsert=strToInsert.replace(/mediaIsAutoStartForReplace/, '1');
			}else{
				strToInsert=strToInsert.replace(/mediaIsAutoStartForReplace/, '0');
			}
			if(isPlayCount){
				strToInsert=strToInsert.replace(/mediaIsPlayCountForReplace/, isPlayCount);
			}else{
				strToInsert=strToInsert.replace(/mediaIsPlayCountForReplace/, '0');
			}
			if(opt && opt.id && (typeof opt.id=='string')){
				objId=opt.id;
			}
			strToInsert=strToInsert.replace(/mediaObjectId/, objId);
			document.write(strToInsert);
			mediaRef= window[opt.id] || document[opt.id];
			return mediaRef;
		}catch(ex){return;}
	}
}

var winLoadFuns= winLoadFuns || [];

var addWinLoadFuns= function(fn){//fn -> function 一个函数
	if(typeof fn == 'function'){
		winLoadFuns.push(fn);
	}
};

kEvent.addEvent(
	window,
	"load",
	function(){
		if(winLoadFuns&&winLoadFuns.length){
			var i, fn;
			for(i=0; (fn=winLoadFuns[i]); i++){
				if(typeof fn=='function'){
					fn();
				}
			}
		}
	}
);

var Debug=Debug||{};
Debug.parseObj=function(obj, needFormat){
	var reS=[];
	if(typeof obj == "object"){
		reS.push("{");
		if(needFormat){
			reS.push("<br />\r");
		}
		for(var i in obj){
			if(needFormat){
				reS.push("<span class=\"p\" style=\"color:#c00;\">"+i+"</span>:<span class=\"p\" style=\"color:#00c;\">"+obj[i]+"</span>");
			}else{
				reS.push(i+":"+obj[i]);
			}
			if(needFormat){
				reS.push(",<br />\r");
			}else{
				reS.push(",");
			}
		}
		if(reS.length>1){
			if(needFormat){
				reS[reS.length-1]="<br />\r}";
			}else{
				reS[reS.length-1]="}";
			}
		}else{
			reS.push("}");
		}
	}
	return reS.join("");
};


/*
更新: 10:03 2007-2-27
*/
var Module = Module||{};

var module=function(moduleId,obt){
  this.elmId = moduleId;
  this.tabsId = this.elmId+'_tabs';
  this.contentIdPreText = this.elmId+'_content_';
  if(obt){
	  this.mTab = new Module.Tabs(this.tabsId, this.contentIdPreText,obt);}
  else{
	 this.mTab = new Module.Tabs(this.tabsId, this.contentIdPreText); 
	 }
  
};
/*
标签页的页面结构说明：
* 将id(例如: 'm_sample_01') 添加到div.md 中
* 在div.md_hd 中添加ul.mh_tabs，并添加id+'_tabs' (例如: 'm_sample_01_tabs')
* 在div.md_bd 中添加和标签一样多的div，并给它们添加id，id 命名是 div.md 中的id+'_content_x'(例如: 'm_sample_01_content_1' ~ ) 其中x 是这些div 的序号，从1 开始。除了第一个，其他几个都添加style="display: none;" 属性
添加脚本：
* (new module('m_sample_01')).initTabs();
*/
module.prototype.initTabs=function(){
    this.mTab.init();
  };
module.prototype.initTabsHover=function(){
    this.mTab.initHover();
  };

Module.Tabs=function(nodeId, contentIdPreText,obt){
	var tabs_id = nodeId;
  var tabs= jQuery("#" + nodeId + " li"),
    tabCurI= null;
  var tabCons= [];
  var tabBtns = [],
    tabBtn,
    tabEvent = "click";
	/*2010-4-28 roll*/
var currentPage,timer,duration;
if(obt){
	currentPage=0;
	timer=null;
	duration=obt.duration?obt.duration:3000;
}
  function changeContent(targetIndex){
    tabCons[tabCurI].css('display', 'none');
    tabCons[targetIndex].css('display', '');
    tabCurI = targetIndex;
  }
//2009-5-12 jack 方便外部访问
  this.changetab  = function (targetIndex){
	  
    try{
      if(targetIndex === tabCurI){return null;}
     
	  	if(this["changefun"]!=undefined){
	  		changefun(targetIndex,tabCurI,tabs_id);
	  	}
	
	  tabs[tabCurI].removeClass('cur');
      tabs[targetIndex].addClass('cur');
      changeContent(targetIndex);
	 
    }catch(ex){
		console.log("err");
	}
  }
  
  function chgTab(targetIndex){
	  
    try{
      if(targetIndex === tabCurI){return null;}
	 if(this["changefun"]!=undefined){
	  	changefun(targetIndex,tabCurI,tabs_id);
	  }
      tabs[tabCurI].removeClass('cur');
      tabs[targetIndex].addClass('cur');
      changeContent(targetIndex);
	  if(this["changeafterfun"]!=undefined){
	  	changeafterfun(targetIndex,tabCurI,tabs_id);
	  }
    }catch(ex){}
  }
  /*翻页数*/
  function funNext(curr_){
	  var index=curr_;
	  index+=1;
	  if(index>tabs.length-1) index=0;
	  return index;
}
function funRoll(){
	chgTab(currentPage);
	currentPage=funNext(currentPage);
}

  function initTabs(){
    tabs.each(function(i, _tab){
        _tab = tabs[i] = jQuery(_tab);
        tabBtn = tabBtns[i] = _tab.find('a:first');
    	(tabCurI==null) && _tab.hasClass('cur') && (tabCurI=i);
		
        tabBtn[tabEvent](function(ev){
            if(tabEvent=="click" && _tab.hasClass('cur')){return true;}
            chgTab(i);
			currentPage=i;
            return false;
          });
    });
	(tabCurI==null) && (tabCurI=0);
    tabs.each(function(i, _tab){
    	tabCons[i] = jQuery("#" + contentIdPreText + (i + 1));
		
		if(i !== tabCurI){
			tabCons[i].css('display', 'none');
		}else{
			tabCons[i].css('display', '');
		}
  	});
	/*翻页效果*/
if(obt){
	if(obt.roll){
		chgTab(currentPage);
		timer=setInterval(funRoll,duration);
	}
}
	
  }
  
  this.init=function(){
    initTabs();
  };
  this.initHover=function(){
    tabEvent = "mouseover";
    initTabs();
  };

};

/**
集合: kPage
更新: 10:24 2007-2-27
功能: 页面操作相关
函数列表: 
  fixColsHeight(col, opt) 对齐页面模块
  initFixColsHeight(opt) 调用[对齐页面模块]来对其所有模块
  
*/

var kPage={
  fixColsHeight: function(_row, opt){
    var maxH=0;
    var heights=[];
    var cols = jQuery(_row).children("div").filter(function(i){return (jQuery(this).attr("class").indexOf("col_") !== -1)});
    
    if(cols.length <= 1){return true;}
    
    cols.each(function(i, _col){
      var h = _col.offsetHeight;
      heights[i] = h;
      (h > maxH) && (maxH = h);
    });
    
    cols.each(function(i, _col){
      var hDiff = maxH - heights[i];
      if(hDiff > 0){
        var mb = jQuery("> div.md:last > div.md_bd", _col);
        if(mb.length > 0){
          mb.append(jQuery('<div class="vspace" style="height:' + hDiff + 'px;"></div>'))
        }
      }
    });
    
  },
  initFixColsHeight: function(opt){
    var pageBody = jQuery("#page_body");
    if(pageBody.length > 0){
      var pageRows = pageBody.children("div.column_wrapper");
      pageRows.each(function(i, _row){
        try{
          kPage.fixColsHeight(_row, opt);
        }catch(ex){}
      });
    }
  }
};

/*add by jay @ 2007-06-20 10:35*/
function initDropDown(elmId, tagName){
  if(!document.all || !elmId || !tagName){return null}
  jQuery('#' + elmId + ' ' + tagName).hover(function(){jQuery(this).addClass('hover')}, function(){jQuery(this).removeClass('hover')});
}

var ajaxLoadingImg = new Image();
ajaxLoadingImg.src="/library/image/ajax-loader.gif";

/** 
 * 缓存 ajax 对 url 的请求，考虑是否加一个过期验证
 * 适合 html 片段、json 数据、xml 文件（需要再实现），
 * 不太适合 script 标签，而一般 script 标签也不是通过 ajax 来请求 :)
 */
var ajaxDataCache = {};

function ajaxTab(tabId, tabConId, opt){
  jQuery(function(){new AjaxTab(tabId, tabConId, opt)});
}
function AjaxTab(tabId, tabConId, opt){

  var tabs= jQuery("#" + tabId + " li"),
    tabCurI= 0,
    tabCon= jQuery("#" + tabConId),
    btns = tabs.find("> a:first"),
    tabUrls = [],
    tabEvent = "click";
  
  function changeContent(url){
    if(url in ajaxDataCache){
      tabCon.html(ajaxDataCache[url]);
    }else{
      jQuery.get(url, function(data){ajaxDataCache[url]= data;tabCon.html(data)})
    }
  }

  function chgTab(targetIndex){
    try{
      if(targetIndex == tabCurI){return null;}
      tabs[tabCurI].removeClass('cur');
      tabs[targetIndex].addClass('cur');
      changeContent(tabUrls[targetIndex]);
      tabCurI = targetIndex;
    }catch(ex){}
  }
  
  function initTabs(){
    btns.each(function(i, _btn){
        _btn = btns[i] = jQuery(_btn);
        tabs[i]= jQuery(tabs[i]);
        _btn.attr("i", i);
        tabUrls[i] = _btn.attr("href");
        _btn.attr("href", "");
        _btn[tabEvent](function(ev){
            try{_btn[0].blur();}catch(ex){}
            chgTab(_btn.attr("i") || 0);
            return false;
          });
      });
  }
  initTabs();
}

/**
模块: 图像(水平翻页)滚动[imagePageView]
更新: 10:26 2007-2-27
参数: 
  @param  elm{String|Dom node}  需要添加滚动效果的模块
  @param  opt{Object}  动画效果的一些设置
    
    layout  水平或者垂直
    page    初始页数
    
    noBtn   不需要翻页按钮
    btnPrevExp  上一页按钮的选择表达式
    btnNextExp  下一页按钮的选择表达式
    
    noNavBtn      不需要页码小按钮
    navBtnBoxExp  页码小按钮容器的选择表达式
    
    autoscroll     是否自动翻页
    scrollduration 如果自动翻页，翻页间隔(单位 ms)
    
返回值: {Object}
功能: 将图片列表滚动起来(水平滚动)
页面结构限制: 
  在 div.image_list_box 之外添加id
  每个id 下面只能有1 个ul
  每个ul 下面的图片必须足够多(不能在1 行完全显示)才会滚动
*/
function ImagePageView(elmId, opt){
  var $ = jQuery;
  var elmRoot;
  if(typeof elmId === 'string'){
    elmRoot= jQuery('#'+elmId);
  }else{
    elmRoot= jQuery(elmId);
  }
  if(!elmRoot.length){return;}
  
  var scrollSpeed= 2;// 1s/500px 单位 ms/px
  
  var scrollPropName= 'left',
      itemSizePropName= 'offsetLeft',
      viewAreaSizePropName= 'width';
  
  var scrollH = true,
      initPage=0;
  if(opt){
    if(('layout' in opt) && (opt.layout == 'v')){
      scrollH= false;
      scrollPropName= 'top';
      itemSizePropName= 'offsetTop';
      viewAreaSizePropName= 'height';
    }
  }
  
  var scrollerW= elmRoot.children('div.image_list_box'),
      scroller= scrollerW.children('ul'),
      items= scroller.children('li'),//所有图片框的集合
      itemNum= items.length,
      item0= items[0],
      itemCur;
  
  scrollerW.css('position', 'relative');
  scrollerW.css('overflow', 'hidden');
  
	var itemSize= 0,
		viewAreaSize= scrollerW[viewAreaSizePropName]();
	if(itemNum>1){
		items[1][itemSizePropName]- item0[itemSizePropName];
	}
  if(scrollH){
    scroller.css('width', "9999px");
    scroller.css('float', "left");
    scroller.css('position', "relative");
  }else{
    scroller.css('position', "absolute");
  }
  
  scrollH && scrollerW.css(viewAreaSizePropName, viewAreaSize);
  
  
  if (itemSize==0) itemSize=viewAreaSize;//田铮 09年08月07日加 删除此行则恢复原版
  
  var totalScrollSize= itemSize * itemNum;
  
 
  // 计算每次翻页的个数
	var scrollPageNum = Math.floor(viewAreaSize/itemSize),
	//var scrollPageNum=  1,
	totalPageNum= Math.ceil(itemNum/scrollPageNum),
    scrollDuration= scrollSpeed * scrollPageNum * itemSize,
    curPageNum= 0;
  if(opt && ('page' in opt) && opt.page){
    var p=parseInt(opt.page);
    if(p !== NaN){initPage=Math.max(0,Math.min(p,totalPageNum-1))}
  }
  
  function _scroll(){
    if (navBtns) {
      navBtns.each(function(_,elm){$(elm).removeClass('current')});
      //console.log(navBtns.filter(".current"));
      $(navBtns[curPageNum]).addClass('current');
    }
    var scrollProp= {};
    scrollProp[scrollPropName]= -items[scrollPageNum * curPageNum][itemSizePropName];// 目标位置应该是 目标页的第一个 item 的左坐标
    scroller.stop().animate(scrollProp, {"duration": scrollDuration});
  }
  
  
  
  var btnPrev,
      btnNext;
  
  if (opt && opt.noBtn) {
  
  }
  else{
    if (opt) {
      if (opt.btnPrevExp) {
        btnPrev = elmRoot.find(opt.btnPrevExp);
      }
      if (opt.btnNextExp) {
         btnNext = elmRoot.find(opt.btnNextExp);
      }
    }
    if (!btnPrev) {
      btnPrev = jQuery('<a class="previous" style="top:15px;" href="">&lt;&lt;</a>');
      btnNext = btnPrev.clone().html('&gt;&gt;').attr('class', 'next');
      
      elmRoot.append(btnPrev).append(btnNext);
      btnPrev.css('left', -5);
      btnNext.css('left', elmRoot.width() - btnNext.width() + 5);
      btnNext.css('right', 'auto');
    }
  }
  
  if (btnPrev) {
    // 翻页按钮
    btnPrev.click(function(){//图像选择列表  前n 张，需要向左移动，则style.left 应该减小
      this.blur();
      if (curPageNum > 0) {
        curPageNum--;
        _scroll();
      }
      return false;
    });
  }
  if (btnNext) {
    btnNext.click(function(){//图像选择列表  前n 张，需要向左移动，则style.left 应该减小
      this.blur();
      if (curPageNum < (totalPageNum - 1)) {
        curPageNum++;
        _scroll();
      }
      return false;
    });
  }
  
  var navBtnW,
      _mh,
      navBtns;
  if (opt && opt.noNavBtn) {}
  else {
    var genNavW=true;
    if(opt && opt.navBtnBoxExp){
      navBtnW = elmRoot.find(opt.navBtnBoxExp);
      genNavW=false;
    }else{
      navBtnW = jQuery('<div class="image_page_view_nav" style="top:7px;"></div>');
    }
    if(navBtnW){
      navBtns = [];
      
      var i = 0;
      while (i < totalPageNum) {
        (function(i){
          var _item = jQuery('<a href=""></a>');
          navBtns.push(_item);
          if (curPageNum == i) {
            _item.attr('class', 'current');
          }
          _item.appendTo(navBtnW);
          _item.attr('i', i);
          _item.click(function(){
            curPageNum = parseInt(_item.attr('i')) || 0;
            _scroll();
            return false;
          });
        })(i);
        i++;
      }
      navBtns = jQuery(navBtns);
      
      if(genNavW){
        _mh = elmRoot.parents('div.md').children('div.md_hd');
        navBtnW.css('left', ((_mh[0].offsetWidth - navBtnW[0].offsetWidth) / 2));
        _mh.css('position', 'relative');
        _mh.append(navBtnW);
      }
    }
  }
  if(initPage!=0){
    curPageNum=initPage;
    _scroll();
  }
  
  var autoscroll = (opt && 'autoscroll' in opt) ? opt.autoscroll : false,
      scrollduration = (opt && 'scrollduration' in opt) ? opt.scrollduration : 5000,
      scroll_timer = null;
	function funShow(){
      curPageNum += 1;
      if(curPageNum >= totalPageNum){
        curPageNum = 0;
      }
      _scroll();
    }
  if(autoscroll){
    scroll_timer = setInterval(funShow, scrollduration);
	elmRoot.hover(function(){clearInterval(scroll_timer);},function(){scroll_timer = setInterval(funShow, scrollduration);});
  }
	if (opt) {
		if (opt.hasOwnProperty("hover")) {
		
			items.each(function(i, _item){
				jQuery(_item).hover(function(){
					jQuery(_item).addClass(opt["hover"]);
				}, function(){
					jQuery(_item).removeClass(opt["hover"]);
				})
			});
		}
	}

  
}

function imagePageView(elmId, opt){
	
  var _f= new ImagePageView(elmId, opt);
  _f= null;
}
function imagePageViewV(elmId, opt){
  opt = opt || {};
  (!opt.layout) && (opt.layout = 'v');
  var _f= new ImagePageView(elmId, opt);
  _f= null;
}
/*
模块: 图像水平滚动[imageScroll]
更新: 10:26 2007-2-27
参数: 
  @param  elm{String|Dom node}  需要添加滚动效果的模块 id
  @param  opt{Object}  动画效果的一些设置
返回值: {Object}
功能: 将图片列表滚动起来(水平滚动)
页面结构限制: 
  在 div.image_list_box 之外添加id
  每个id 下面只能有1 个ul
  每个ul 下面的图片必须足够多(不能在1 行完全显示)才会滚动
*/

function ImageScroll(elmId, opt){
  var elmRoot;
  if(typeof elmId === 'string'){
    elmRoot= jQuery('#'+elmId);
  }else{
    elmRoot= jQuery(elmId);
  }
  if(!elmRoot.length){return;}
  var scrollDir= 'l';
  var scrollSpeed= (opt&&opt.speed)?opt.speed:15;//1000/50 单位 ms/px

  var scrollPropName= 'left',
    itemSizePropName= 'offsetLeft',
    viewAreaSizePropName= 'width';

  var aviableDir= {'l':'l',
           'left':'l',
           'r':'r',
           'right':'r',
           'b':'b',
           'bottom':'b',
           't':'t',
           'top':'t'};
  if(opt){
    ('dir' in opt) && (opt.dir in aviableDir) && (scrollDir = aviableDir[opt.dir]);
  }
  var scrollH= (scrollDir === 'r' || scrollDir === 'l');
  if(!scrollH){
    scrollPropName= 'top';
    itemSizePropName= 'offsetTop';
    viewAreaSizePropName= 'height';
  }
  
  var items= elmRoot.find('> div > ul > li'),//所有图片框的集合
    itemNum= items.length,

    scroller= items.parent(),//存放图片的ul, 滚动动画就是靠控制它的位置来实现的(滚动的整体)
    scrollerW= scroller.parent(),
    item0= items[0],
    itemSize= items[1][itemSizePropName] - item0[itemSizePropName],//一个图片框的宽度,
    viewAreaSize= scrollerW[viewAreaSizePropName]();

  if(scrollH && (scroller.height() < (1.2 * items.height()))){//如果没有2 行，则返回
    return;
  }

  if(scrollH){
    scrollerW.css({ 'width':viewAreaSize,
            'position':'relative',
            'overflow':'hidden'});
    scroller.css({'width':9999, 'position':'relative'});
  }else{
    elmRoot.css('overflow', 'hidden');
    scroller.css('position', 'relative');
  }

  jQuery.each(items.slice(0, Math.ceil(viewAreaSize / itemSize)),
       function(i, _item){
         scroller.append(_item.cloneNode(true));
       });
  items= scroller.children('li');
  var scrollArea= [0, -items[itemNum][itemSizePropName]];
  // 如果是向 左 或是 下 滚动，则互换滚动值域
  if(scrollDir === 'r' || scrollDir === 'b'){
    scrollArea[2]= scrollArea[0];
    scrollArea[0]= scrollArea[1];
    scrollArea[1]= scrollArea[2];
    scrollArea.length= 2;
  }

  function getScrollDuration(){
    return Math.abs(scrollSpeed * ((parseInt(scroller.css(scrollPropName), 10) || 0) - scrollArea[1]));
  }
  
  // 这个地方比较诡异，需要注意
  var scrollProp= {};
  scrollProp[scrollPropName]= scrollArea[1];
  scroller.css(scrollPropName, scrollArea[0]);
  function _scroll(){
    scroller.animate(scrollProp,
             {"duration": getScrollDuration(),
              "easing": "linear",
              'complete': function(){scroller.css(scrollPropName, scrollArea[0]);_scroll();}
             });
  }
  
  function startScroll(start){
    scroller.stop();
    // 明确给定说 start 才 start
    (start === true) && _scroll();
  }
  scrollerW.hover(startScroll, function(){startScroll(true);});
  startScroll(true);
}

function imageScroll(elmId, opt){
  jQuery(function(){
    var _f= new ImageScroll(elmId, opt);
    _f= null;
  });
}
function imageScrollV(elmId, opt){
  jQuery(function(){
    if(!opt || !('dir' in opt)){
      opt= {'dir': 't'};
    }
    var _f= new ImageScroll(elmId, opt);
    _f= null;
  });
}
/**
模块: 图像浏览[imageView]
更新: 10:26 2007-2-27
参数: 
  @param  elmId{String|Dom node}  要添加动画的element
  @param  opt{Object}  一些属性设置
返回值: {Object}
功能: 缩略图滚动(水平)浏览，点击大图切换
*/

function ImageView(elmId, opt){

  var elmRoot;
  if(typeof elmId === 'string'){
    elmRoot= jQuery('#'+elmId);
  }else{
    elmRoot= jQuery(elmId);
  }
  if(!elmRoot.length){return;}
  var scrollSpeed= 1;// 1s/500px 单位 ms/px
  var scrollPropName= 'left',
    scrollH= true,
    itemSizePropName= 'offsetLeft',
    viewAreaSizePropName= 'width';
  if(opt){
    ('layout' in opt) && (opt.layout === 'v') && (scrollH= false);
  }
  
  if(!scrollH){
    scrollPropName= 'top';
    itemSizePropName= 'offsetTop';
    viewAreaSizePropName= 'height';
  }
  var btnPad = opt && ('btnPad' in opt) && opt.btnPad || 56;
  var scrollPart= elmRoot.children('div.pic_list_box'),
      items= scrollPart.find('li'),//所有图片框的集合
      itemNum= items.length,
		
      scroller= items.parent(),//存放图片的ul, 滚动动画就是靠控制它的位置来实现的(滚动的整体)
      scrollerW= scroller.parent(),
      item0= items[0],
      itemCur,
      itemSize= items[1][itemSizePropName]- item0[itemSizePropName],
      viewAreaSize= scrollPart[viewAreaSizePropName]()-btnPad;// 好像只有水平的用到了，垂直的用不到
  
  scrollerW.css(viewAreaSizePropName, viewAreaSize);
  if(scrollH){
    
  }else{
    scrollPart.css('overflow', 'hidden');
  }
  
  scroller.css('position', 'relative');
  
  var totalScrollSize= itemSize * itemNum;
  
  // 计算每次翻页的个数
  var scrollPageNum= Math.floor(viewAreaSize/itemSize),
      totalPageNum= Math.ceil(itemNum/scrollPageNum),
      scrollDuration= scrollSpeed * scrollPageNum * itemSize,
      curPageNum= 0,
	  curr=0;
	
  var dataShowPart= elmRoot.children('div.text_box');//大图片显示区域
  
  //console.log(dataShowPart);return;
  
  var dataShowPic= dataShowPart.find('img'),
    dataShowTxt= dataShowPart.find('div.text_data');
  
  var btnPrev= scrollPart.children('a.previous'),
    btnNext= scrollPart.children('a.next');
  
  function _scroll(){
    var scrollProp= {};
    scrollProp[scrollPropName]= -items[scrollPageNum * curPageNum][itemSizePropName];// 目标位置应该是 目标页的第一个 item 的左坐标
    scroller.animate(scrollProp, {"duration": scrollDuration});
  }
  
  // 翻页按钮
  btnPrev.click(function(){//图像选择列表  前n 张，需要向左移动，则style.left 应该减小
    this.blur();
    if(curPageNum > 0){
      curPageNum--;
      _scroll();
    }
    return false;
  });
  btnNext.click(function(){//图像选择列表  前n 张，需要向左移动，则style.left 应该减小
    this.blur();
    if(curPageNum < (totalPageNum - 1)){
      curPageNum++;
      _scroll();
    }
    return false;
  });
  function ShowImage(curr_){
	dataShowPic.attr("src",jQuery(items[curr_]).find("a").attr("href")).parent().attr("href",jQuery(items[curr_]).find("a").attr('title'));
	items.removeClass("cur");
	jQuery(items[curr_]).addClass("cur");
	curPageNum=Math.floor((curr_)/scrollPageNum);
	_scroll();
	dataShowTxt.html(jQuery(items[curr_]).find("div.hide").html());
	
}
	function funNext(curr_){
		var index=curr_;
		index+=1;
		if(index>itemNum-1) index=0;
		return index;
	}
  function funShow(){
	  ShowImage(curr);
	  curr=funNext(curr);
  }
  
  var autoscroll = (opt && 'autoscroll' in opt) ? opt.autoscroll : false,
      scrollduration = (opt && 'scrollduration' in opt) ? opt.scrollduration : 5000,
      scroll_timer = null;
  if(autoscroll){
	ShowImage(curr);
	curr=funNext(curr);
    scroll_timer = setInterval(funShow, scrollduration);
	elmRoot.hover(function(){clearInterval(scroll_timer);},function(){scroll_timer = setInterval(funShow, scrollduration);});
  }
  
  var datas= {};
  
  items.each(function(i, _item){
      _item= jQuery(_item);
      _item.attr('i', i);
	  //alert("dd");
      _item.hover(function(){_item.addClass('hover')}, function(){_item.removeClass('hover')});
      _item.click(function(){
          itemCur && itemCur.removeClass('cur');
          itemCur= _item;
          _item.addClass('cur');
          var itemData= datas[_item.attr('i')];
          dataShowPic.attr('src', itemData.img.attr('href')).parent().attr('href', itemData.img.attr('title'));
          dataShowTxt.html(itemData.txt);
		  if(autoscroll){
			curr=i;	  
		}
          return false;
        });
      
      (!itemCur) && (_item.attr('class').indexOf('cur') !== -1) && (itemCur= _item);
      
      datas[_item.attr('i')]= {
          'img': _item.children('a'),
          'txt': _item.children('div.hide').html()
        };// 这样做 key 不知是否会有问题
      _item.children('div.hide').remove();
    });
}

function imageView(elmId, opt){
	
  jQuery(function(){
  	
    var _f= new ImageView(elmId, opt);
    _f= null;
  });
}

function imageView_v(elmId, opt){
  jQuery(function(){
  	
    var _f= new ImageView(elmId, {'layout': 'v'});
    _f= null;
  });
}
/**
 图像(渐隐渐显)浏览
 */
function ImageTransform(elmId){
  var elmRoot;
  if (typeof elmId === 'string') {
    elmRoot = jQuery('#' + elmId);
  }
  else {
    elmRoot = jQuery(elmId);
  }
  if (!elmRoot.length) {
    return;
  }
  
  var items = elmRoot.children('div.image_list_box'), itemNum = items.length, iCur = 0;
  
  items.each(function(i, _item){
    _item = jQuery(_item);
    items[i] = _item;
    (i !== 0) && _item.css('display', 'none');
  });
  
  var item0 = items[0], item$ = items[itemNum - 1];
  
  var delayTime = 5000;
  function nextItem(){
    var ic = iCur;
    iCur += 1;
    if (iCur >= itemNum) {
      iCur = 0;
    }
    items[ic].animate({
      'opacity': 0.1
    }, {
      "duration": 700,
      'complete': function(){
        items[ic].css('display', 'none');
        items[iCur].css('display', '');
        items[iCur].animate({
          'opacity': 1
        }, {
          "duration": 700,
          'complete': function(){
            setTimeout(nextItem, delayTime);
          }
        });
      }
    });
  }
  setTimeout(nextItem, delayTime);
}

function image_transform(elmId, opt){
  jQuery(function(){
    new ImageTransform(elmId, opt);
  });
}
function ImageSlide2(a){
  var $ = jQuery;
  var elmRoot = $("#"+a),
    tbs = elmRoot.find("tbody");
  if(tbs.length < 2){
    return;
  }
  
  var datas = [],
    curIndex = 0,
    delayTime = 5000,
    autoSlide = true,
    hoverPause = false,
    isHover = false;
  var d_image = $("div.mainImage", tbs[0]),
    d_page = $("div.page", tbs[0]),
    d_text = $("div.textDesc", tbs[0]);
  datas.push([d_image.html(), d_text.html()]);
  $("tr", tbs[1]).each(function(a, b){
    var c = $("td", b);
    datas.push([c[0].innerHTML, c[1].innerHTML]);
  });
  tbs[1].parentNode.removeChild(tbs[1]);
  function buidPage(){
    btnsStr = [];
    for(var i = 0, iM = datas.length; i < iM; i++){
      var _i = i + 1;
      if(i == curIndex){
        btnsStr.push('<b>'+_i+'</b>');
      }else{
        btnsStr.push('<a href="#'+_i+'" onclick="'+btnEvFn+'('+i+');return false;">'+_i+'</a>');
      }
    }
    d_page.html(btnsStr.join(" "));
  }
  
  function show(targetIndex){
    if(autoSlide){
      clearTimeout(timer);
      timer = setTimeout(_slide, delayTime);
    }
    curIndex = targetIndex;
    (curIndex >= datas.length) && (curIndex = 0);
    (curIndex < 0) && (curIndex = datas.length - 1);
    d_image.html(datas[curIndex][0]);
    d_text.html(datas[curIndex][1]);
    buidPage();
  }
  var id = imageSlide2.instanceId++;
  imageSlide2[id] = {"show": show};
  var btnEvFn = 'imageSlide2[\''+ id +'\'].show';
  
  buidPage();
  var timer = null;
  function _slide(){
    if(hoverPause && isHover){
      clearTimeout(timer);
      timer = setTimeout(_slide, delayTime);
      return;
    }
    show(curIndex+1);
  }
  autoSlide && setTimeout(_slide, delayTime);
  
  elmRoot.hover(function(){isHover = true}, function(){isHover = false});
}
function imageSlide2(a){
  jQuery(function(){ImageSlide2(a)});
}
imageSlide2.instanceId = 0;

function accordion(elmId, opt){
  jQuery(function(){
    new Accordion(elmId, opt);
  });
}
function Accordion(elmId, opt){
  var elmRoot;
  if(typeof elmId === 'string'){
    elmRoot= jQuery('#'+elmId);
  }else{
    elmRoot= jQuery(elmId);
  }
  if(!elmRoot.length){return;}
  var btnExp= '> ul > li > h3',
    itemExp= '> ul > li',
    curClassName= 'cur',
    elmHover;
  if(opt){
    ('btnExp' in opt) && (btnExp = opt.btnExp);
    ('itemExp' in opt) && (itemExp = opt.itemExp);
    ('curClassName' in opt) && (curClassName = opt.curClassName);
    
    // {'elmExp': '> ul > li', 'className': 'hover'}
    ('hover' in opt) && (elmHover = opt.hover);
  }
  
  var items= elmRoot.find(itemExp),
    btns= elmRoot.find(btnExp),
    curItem,
    heightCur,
    heightNormal;
  
  if(elmHover && elmHover.elmExp){
    elmRoot.find(elmHover.elmExp).hover(function(){jQuery(this).addClass(elmHover.className)}, function(){jQuery(this).removeClass(elmHover.className)})
  }
  
  items.each(function(i, _item){
    _item= jQuery(_item);
    /*
    console.log('_item.height is: ' + _item.height());
    console.log('_item.css(\'height\') is: ' + _item.css('height'));
    console.log('_item[0].offsetHeight is: ' + _item[0].offsetHeight);
    */
    var btn= jQuery(btns[i]);
    btn.attr('i', i);
    _item.attr('i', i);
    _item.css('overflow', 'hidden');
    if(_item.attr('class')){
      if(!curItem && (_item.hasClass(curClassName))){
        curItem= _item;
        heightCur= _item.height();
      }
      if(!heightNormal && (!_item.hasClass(curClassName))){
        heightNormal= _item.height();
      }
    }else{
      if(!heightNormal){
        heightNormal= _item.height();
        // - (parseInt(_item.css('paddingTop')) || 0 + parseInt(_item.css('paddingBottom')) || 0 + parseInt(_item.css('borderTopWidth')) || 0 + parseInt(_item.css('borderBottomWidth')) || 0)
      }
    }
    var animateItem;
    btn.click(function(){
      if(curItem === _item){return;}
      animateItem && animateItem.stop();
      
      heightNormal = _item.height();
      heightCur = curItem.height();
      
      curItem.css('height', heightCur);
      _item.css('height', heightNormal);
      
      _item.addClass(curClassName);
      animateItem= curItem;
      curItem= _item;
      
      //console.log(heightCur, heightNormal);
      animateItem.animate({'height': heightNormal},
                {
                'step2': function(n){
                    _item.css('height', Math.max(Math.abs(heightCur + heightNormal - n), 0));
                  },
                'duration': 300,
                'complete': function(){
                    animateItem.removeClass(curClassName);
                    animateItem.css('height', '');
                    _item.css('height', '');
                  }
                });
        return false;
      });
    });
    
  //alert(heightCur);
  //alert(heightNormal);
}

function TextScroll(elmId, step, opt){
  
  var elmRoot= jQuery('#'+elmId);
  if(elmRoot.length == 0){return;}
  
  var scroller = elmRoot.find('> ul'),
    items = scroller.find('> li'),
    itemNum = items.length,
    iCur = 0;
  scroller.css('position', 'absolute');
  var ulh=scroller.height();
  scroller.html(scroller.html() + scroller.html());
  items= scroller.find('> li');
  
  var scHeight = elmRoot[0].offsetHeight;
  if(ulh<=scHeight) return;
  var step = (step)?step:50;
  function getScrollDuration(){
    return Math.abs(step * ((parseInt(scroller.css('top'), 10) || 0) - scrollArea[1]));
  }
  
  var scrollPropName = 'top';
  var scrollArea= [0, -items[itemNum].offsetTop];
  
  // 这个地方比较诡异，需要注意
  var scrollProp= {};
  scrollProp[scrollPropName]= scrollArea[1];
  scroller.css(scrollPropName, scrollArea[0]);
  function _scroll(){
    scroller.animate(scrollProp,
             {"duration": getScrollDuration(),
              "easing": "linear",
              'complete': function(){scroller.css(scrollPropName, scrollArea[0]);_scroll();}
             });
  }
  
  function startScroll(start){
    scroller.stop();
    // 明确给定说 start 才 start
    (start === true) && _scroll();
  }
  elmRoot.hover(startScroll, function(){startScroll(true);});
  startScroll(true);
}

function textScroll(elmId, step, opt){
  jQuery(function(){
    var _f= new TextScroll(elmId, step, opt);
    _f= null;
  });
}




function ImagePageViewAndScroll(rootid){
var jq=jQuery,
  inprogress = false,
  elmRoot = jq("#"+rootid),//div.image_page_view
  items = elmRoot.find("li"),//li
  itemNum = items.length,
  lastItem = items[itemNum-1],
  curPageNum = 0,
  
  p_item = elmRoot.find("ul"),//div.image_list_box>ul
  p_itemP0 = p_item[0].parentNode,//div.image_list_box
  p_itemP = jq(p_itemP0),
  leftMin = 0;

p_itemP.css({'position': 'relative', 'overflow': 'hidden', 'width': elmRoot[0].offsetWidth});
p_item.css({'width': '9999px', 'margin': '0'});

var leftMax = lastItem.offsetLeft + lastItem.offsetWidth,
  areaWidth = p_itemP0.offsetWidth,
  totalPageNum=Math.ceil(leftMax/areaWidth);

items.clone(true).appendTo(p_item);

if(!items.length || leftMax <= areaWidth){
  return;
}

var btnPrev = jq('<a class="previous" style="top:15px;" href="#"/>').html('&lt;&lt;'),
  btnNext = btnPrev.clone().html('&gt;&gt;').attr('class', 'next');
elmRoot.append(btnPrev).append(btnNext);
btnPrev.css('left', -5);
btnNext.css('left', elmRoot.width() - btnNext.width() + 5);
btnNext.css('right', 'auto');

var navBtnW = jq('<div class="image_page_view_nav" style="top:7px;"/>'),
  _md = elmRoot.parents('div.md'),
  _mh = _md.children('div.md_hd'),
  navBtns = [];
var _item,
  i = 0,
  basebtn=jq('<a href=""/>');
while (i < totalPageNum){
  (function(i){
  _item = basebtn.clone();
  navBtns.push(_item);
  if (curPageNum == i) {
    _item.attr('class', 'current');
  }
  _item.appendTo(navBtnW);
  _item.click(function(){
    this.blur();
    updatenav(i);
    _scrollto(areaWidth*i);
    return false;
  });
  })(i);
  i++;
}
navBtnW.css('left', ((_mh[0].offsetWidth - navBtnW[0].offsetWidth) / 2));
_mh.css('position', 'relative');
_mh.append(navBtnW);
navBtns = jq(navBtns);

function updatenav(idx){
  if(curPageNum==idx)return;
  navBtns.each(function(i, _btn){
  if(i==idx){
    jq(_btn).addClass('current');
  }else{
    jq(_btn).removeClass('current');
  }
  });
  curPageNum=idx;
}

function _scrollto(targetleft, auto_nav){
  var leftTarget = Math.min(leftMax, Math.max(leftMin, targetleft));
  if(p_itemP0.scrollLeft==leftTarget)return;
  if(auto_nav){
  updatenav(Math.floor(leftTarget/areaWidth));
  }
  p_itemP.stop();
  p_itemP.animate({"scrollLeft": leftTarget},
          {"duration": 400,
           "easing": "swing"}
          );
}
var leftCur;
btnPrev.click(function(ev){
  this.blur();
  if(curPageNum<=0){
  return false;
  }
  _scrollto((curPageNum - 1) * areaWidth, 1);
  return false;
});
btnNext.click(function(ev){
  this.blur();
  if(curPageNum>=(totalPageNum-1)){
  return false;
  }
  _scrollto((curPageNum + 1) * areaWidth, 1);
  return false;
});

function _autoScroll(r){
  if(inprogress){
  return;
  }
  if(r===true){
  p_itemP0.scrollLeft = leftMin;
  }
  inprogress = true;
  p_itemP.stop();
  p_itemP.animate({"scrollLeft": leftMax},
       {"duration": (leftMax - p_itemP0.scrollLeft) * 18,
        "easing": "linear",
        "step": function(){
          updatenav(Math.floor(p_itemP0.scrollLeft/areaWidth));
        },
        'complete': function(){
          inprogress = false;
          setTimeout(function(){_autoScroll(true);}, 0);
          }
       });
}

_md.hover(function(e){
  p_itemP.stop();
  inprogress = false;
},_autoScroll);

_autoScroll(true);
}

function imagePageViewAndScroll(){
var args = arguments;
jQuery(function(){
ImagePageViewAndScroll.apply(null, args);
});
}



function inputAutoClear(ipt){
  ipt.onfocus=function(){
  if(this.value==this.defaultValue){this.value='';}
  };
  ipt.onblur=function(){
  if(this.value==''){this.value=this.defaultValue;}
  };
  ipt.onfocus();
}


(function(jq){
if(jq.fn.TabMenusOpts){return}

jq.fn.extend({
TabMenusOpts: {
  activeEvent:"click",
  menusQuery:">*",
  contentsQuery:">*",
  menuOnCls:"cur",
  menuBeforeOnCls:"before_cur",
  contentOnCls:"cur",
  contentElm:null,
  handle_hoverIn:null,
  handle_hoverOut:null,
  handle_click:null,
  handle_menuon:null,
  handle_menuoff:null,
  initMenuOnIdx:0
},
TabMenus: function(opts){
  if(this.length != 1){
    this[0] && jq(this[0]).TabMenus(opts);
    return;
  }
  if(this.TabMenusInited){return}
  this.TabMenusInited=true;
  
  var o = this.TabMenusOpts = jq.extend({}, this.TabMenusOpts, opts);
  if(!o.contentElm)return;
  
  this.menuElm = this;
  this.menus = this.find(o.menusQuery);
  this.contentElm = o.contentElm;
  this.contents = this.contentElm.find(o.contentsQuery);
  
  if(!this.menus.length || !this.contents.length || this.menus.length != this.contents.length)return;
  
  this.menuOnIdx = null;
  this.menuActiving = false;
  
  var this_ = this;
  
  function fnempty(){}
  
  function activeMenu(idx){
    if(this_.menuActiving){return}
    this_.menuActiving = true;
    try{
    var m,c;
    if(this_.menuOnIdx !== null){
      if(this_.menuOnIdx==idx){this_.menuActiving = false;return}
      m = jq(this_.menus[this_.menuOnIdx]);
      c = jq(this_.contents[this_.menuOnIdx]);
      if(m && c){
        o.menuOnCls && m.removeClass(o.menuOnCls);
        o.contentOnCls && c.removeClass(o.contentOnCls);
        o.handle_menuoff && o.handle_menuoff(m, c, this_.menuOnIdx, this_);
        if(o.menuBeforeOnCls && (this_.menuOnIdx > 0)){jq(this_.menus[this_.menuOnIdx - 1]).removeClass(o.menuBeforeOnCls);}
      }
    }
    m = jq(this_.menus[idx]);
    m.addClass(o.menuOnCls);
    c = jq(this_.contents[idx]);
    c.addClass(o.contentOnCls);
    o.handle_menuon && o.handle_menuon(menuElm, c, idx, this_);
    if(o.menuBeforeOnCls && (idx > 0)){jq(this_.menus[idx - 1]).addClass(o.menuBeforeOnCls);}
    this_.menuOnIdx = idx;
    }catch(ex){}
    this_.menuActiving = false;
  }
  
  if(o.activeEvent){
    this.menus.each(function(idx, menu){
        var menuElm = jq(menu);
        
        try{
          if(o.activeEvent=='hover'){
            menuElm[o.activeEvent](function(ev){activeMenu(idx);o.handle_hoverIn && o.handle_hoverIn(ev)}, o.handle_hoverOut || fnempty);
          }else{
            menuElm.bind(o.activeEvent, function(ev){activeMenu(idx);ev.type=='click'&&o.handle_click&&o.handle_click(ev);return false;});
          }
        }catch(ex){}
      });
  }else{
    o.handle_click && this.menus.click(o.handle_click);
    (o.handle_hoverIn || o.handle_hoverOut) && this.menus.hover(o.handle_hoverIn || fnempty, o.handle_hoverOut || fnempty);
  }
  
  (o.initMenuOnIdx!==null) && this.menus[o.initMenuOnIdx] && activeMenu(o.initMenuOnIdx);
}
});

})(jQuery);
/**
专题脚本
*/
//kEvent.addEvent(window, "load", 
//				function(){
//					if(Dom.$id('nav_box')){
//						kStyle.fixPngBg("nav_box");
//					}
//				});
//kEvent.addEvent(window, "load", function(){kPage.initFixColsHeight({fixElm:'md_bd'});});