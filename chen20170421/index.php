<?php
	  $useragent = addslashes($_SERVER['HTTP_USER_AGENT']);
        if(strpos($useragent, 'MicroMessenger') === false && strpos($useragent, 'Windows Phone') === false ){
        	include '2.html';
       }else{
       	include 'zhen.html';
       }

?>