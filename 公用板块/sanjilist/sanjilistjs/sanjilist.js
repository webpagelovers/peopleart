// JavaScript Document
$(function(){
	//三级列表图片页面特效
	$(".main_list dl").mouseenter(function(e) {
        $(this).css({background:"#333",color:"#fff"});
		$(this).find("a").css({color:"#fff"});
		$(this).find("dd").css({color:"#fff"});
    }).mouseleave(function(e) {
        $(this).css({background:"#efefef"});
		$(this).find("a").css({color:"#333"});
		$(this).find("dd").css({color:"#666"});
    });
	//三级列表文字页面特效
});

























