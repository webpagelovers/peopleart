// JavaScript Document
$(function(){
	//焦点图
	var num=1;
	var timer=setInterval(autoplay,3000);
	
	function autoplay(){
		$(".jdt_r_bottom li").eq(num).addClass("current").siblings().removeClass("current");
		$(".jdt_r_top li").removeClass("current");
		$(".jdt_r_top li").eq(num).addClass("current");
		num++;
		if(num==5){
			num=0;
		}
	}
	$("#jdt").mouseover(function(e) {
		clearInterval(timer);
    }).mouseout(function(e) {
        timer=setInterval(autoplay,3000);
    });
	$(".jdt_r_bottom li").mouseover(function(e) {
		clearInterval(timer);
        var num03=$(this).index();
		num=num03;
		$(this).addClass("current").siblings().removeClass("current");
		$(".jdt_r_top li").removeClass("current");
		$(".jdt_r_top li").eq(num03).addClass("current");
    });
	//作品赏析
	$(".zpsx_list").mouseover(function(e) {
        $(this).children("p").stop().animate({bottom:0,opacity:100},400);
    }).mouseout(function(e) {
        $(this).children("p").stop().animate({bottom:-29,opacity:0},400);
    });
	
	//作品欣赏
	$(".zpxs_list").mouseenter(function(e) {
        $(this).children(".zpxs_list_p").hide();
        $(this).children(".zpxs_hover").show();
    }).mouseleave(function(e) {
        $(this).children(".zpxs_list_p").show();
        $(this).children(".zpxs_hover").hide();
    });
	//艺术展览
	$(".yszl_tt").mouseover(function(e) {
		var num04=$(this).index();
		$(this).addClass("yszl_listShow").siblings("span").removeClass("yszl_listShow");
        $(".yszl_list").eq(num04).addClass("yszl_listShow").siblings(".yszl_list").removeClass("yszl_listShow");
    });
});