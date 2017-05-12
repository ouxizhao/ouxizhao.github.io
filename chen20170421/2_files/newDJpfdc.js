//js  瀹炵幇startWith endWith
String.prototype.startWith=function(str){     
  var reg=new RegExp("^"+str);     
  return reg.test(this);        
} 
String.prototype.endWith=function(str){     
  var reg=new RegExp(str+"$");     
  return reg.test(this);        
} 

//椤甸潰鐐瑰嚮璇勫垎
dianji();
//浣跨敤Ajax鎴栧叾浠栨柟寮忓彂閫佽瘎鍒嗙粨鏋� 
function sendRate(id,fen,url){
	var element = document.createElement("script");
	if(fen=="no"){
		element.src = "http://ia.apps.cntv.cn/act/platform/subGrade.jsp?articleId="+id+"&url="+url+"&type=yemian";
	}else{
		element.src = "http://ia.apps.cntv.cn/act/platform/subGrade.jsp?articleId="+id+"&gradeNum="+fen+"&url="+url+"&type=yemian";
	}
    element.type = "text/javascript";
    element.language = "javascript";
    //document.getElementsByTagName("head")[0].appendChild(element);
	var head = document.head || document.getElementsByTagName('head')[0];
		head.insertBefore(element, head.firstChild);
	if(document.all){
		element.onreadystatechange = function(){//IE鐢�
        var state = element.readyState;
        if (state == "loaded" || state == "interactive" || state == "complete") {
			if(fen=="no"){
				document.getElementById("fenshu").innerHTML = dafen;
				document.getElementById("fenshu1").innerHTML = dafen;
				disData();
			}else{
				//document.getElementById("fenshu").innerHTML = fen;
			}
			}
		}
} else {
        element.onload = function() {//FF鐢�
			if(fen=="no"){
				document.getElementById("fenshu").innerHTML = dafen;
				document.getElementById("fenshu1").innerHTML = dafen;
				disData();
			}else{
				//document.getElementById("fenshu").innerHTML = fen;
			}
        }
}
}

//鐐瑰嚮閲�
function dianji(){
	var element = document.createElement("script");
	var srcURL = "";
	//element.setAttribute("charset", "utf-8");
	if(domainname.indexOf(".")!=-1){
		var domain_dianji = domainname.substring(0,domainname.indexOf("."));
	}
	if(itemid1 == undefined || itemid1 == ''){
		itemid1 = 'ARTI';
	}
	var comType = itemid1.substring(0,4);
	srcURL="http://ia.apps.cntv.cn/act/platform/showMsg_utf8.jsp?url="+commentUrl.split(".shtml")[0]+".shtml&articleId="+itemid1+"&title="+commentTitle+"&type="+comType+"&sorts="+sorts_dianji+"&sysSource="+domain_dianji;
	srcURL=encodeURI(srcURL);
	srcURL=encodeURI(srcURL);
	element.src=srcURL;
	//element.src="http://ia.apps.cntv.cn/act/platform/showMsg.jsp?url="+commentUrl+"&articleId=VIDE00"+itemid1+"&title="+commentTitle+"&type=VIDE&sorts="+sub_column_id+"&sysSource="+domain_dianji;
    element.type = "text/javascript";
    element.language = "javascript";
    //document.getElementsByTagName("head")[0].appendChild(element);
	var head = document.head || document.getElementsByTagName('head')[0];
		head.insertBefore(element, head.firstChild);
	if(document.all){
		element.onreadystatechange = function(){//IE用
        var state = element.readyState;
        if (state == "loaded" || state == "interactive" || state == "complete") {
				//document.getElementById("video_player_number").innerHTML = clickNum;
			}
		}
} else {
        element.onload = function() {//FF用
			//document.getElementById("video_player_number").innerHTML = clickNum;
        }
}
}

function dojsp(id,type,url){
	var element = document.createElement("script");
	element.src = "http://ia.apps.cntv.cn/act/platform/subDCGrade.jsp?articleId="+id+"&oper="+type+"&url="+url+"&type=yemian";
    element.type = "text/javascript";
    element.language = "javascript";
    //document.getElementsByTagName("head")[0].appendChild(element);
	var head = document.head || document.getElementsByTagName('head')[0];
		head.insertBefore(element, head.firstChild);
		if(document.all){
        element.onreadystatechange = function(){//IE用
                var state = element.readyState;
                if (state == "loaded" || state == "interactive" || state == "complete") {
                       if(type==1 && isSucess==1){
							alert("顶成功！！！");
						}else if(type==1 && isSucess==2){
							alert("顶失败！！！");
						}else if(type==2 && isSucess==1){
							alert("踩成功！！！");
						}else if(type==2 && isSucess==2){
							alert("踩失败！！！");
						}
                }
        };

} else {
        element.onload = function() {//FF用
                if(type==1 && isSucess==1){
							alert("顶成功！！！");
						}else if(type==1 && isSucess==2){
							alert("顶失败！！！");
						}else if(type==2 && isSucess==1){
							alert("踩成功！！！");
						}else if(type==2 && isSucess==2){
							alert("踩失败！！！");
						}

        }
	}
}

function addBookmark(title,url) {//鍔犲叆鍒版敹钘忓す
		if (window.sidebar) {
			window.sidebar.addPanel(title, url,"");
			//return true;
		} else if( document.all ) {
			window.external.AddFavorite( url, title);
			//return true;
		} else if( window.opera && window.print ) {
			//return false;
		}
}
function copyTextToClipboard(copy){//鎷疯礉鍒板壀鍒囨澘
	if (window.clipboardData){
		window.clipboardData.setData("Text", copy);}
	else if (window.netscape){
		netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
	var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
	if (!clip) return;
		var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
	if (!trans) return;
		trans.addDataFlavor('text/unicode');
	var str = new Object();
	var len = new Object();
	var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
	var copytext=copy;
	str.data=copytext;
	trans.setTransferData("text/unicode",str,copytext.length*2);
	var clipid=Components.interfaces.nsIClipboard;
	if (!clip) return false;
	clip.setData(trans,null,clipid.kGlobalClipboard);}
	alert("宸插鍒舵湰椤垫爣棰樺拰閾炬帴锛岀幇鍦ㄦ偍鍙互鍙戠粰鎮ㄧ殑濂藉弸浜嗭紒")
	//return false;
}