// JavaScript Document
$(function(){
	//资讯list
	$(".xwzx_list_hd li").click(function(e) {
        var num=$(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".xwzx_list_bd").eq(num).addClass("current").siblings(".xwzx_list_bd").removeClass("current");
    });
	$(".xwzx_list_bd dl").mouseover(function(e) {
        
		$(this).addClass("current").siblings(".xwzx_list_bd dl").removeClass("current");
    });
	


});