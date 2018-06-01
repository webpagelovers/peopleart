// JavaScript Document
$(function(){
	//焦点图
	var num=0;
	$(".jdt_r_bottom li").mouseover(function(e) {
        var num03=$(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".jdt_r_top li").removeClass("current");
		$(".jdt_r_top li").eq(num03).addClass("current");
    });
	//摄影技巧
	$(".sy_zsd dd").click(function(e) {
        $(".sy_zsd dd").children().removeClass("current");
        $(this).children().addClass("current");
    });
	//作品赏析
	$(".zpsx_list").mouseover(function(e) {
        $(this).children("p").stop().animate({bottom:0,opacity:100},400);
    }).mouseout(function(e) {
        $(this).children("p").stop().animate({bottom:-29,opacity:0},400);
    });
	
	$(".zpsx dd").click(function(e) {
        $(".zpsx dd").removeClass("current");
        $(this).addClass("current");
    });
	
	//精彩活动
	$li1 = $(".apply_nav .apply_array");
	$window1 = $(".apply .apply_w");
	$left1 = $(".apply .img_l");
	$right1 = $(".apply .img_r");
	
	$window1.css("width", $li1.length*224);

	var lc1 = 0;
	var rc1 = $li1.length-5;
	
	$left1.click(function(){
		if (lc1 < 1) {
			alert("已经是第一张图片");
			return;
		}
		lc1--;
		rc1++;
		$window1.animate({left:'+=224px'}, 1000);
	});

	$right1.click(function(){
		if (rc1 < 1){
			alert("已经是最后一张图片");
			return;
		}
		lc1++;
		rc1--;
		$window1.animate({left:'-=224px'}, 1000);
	});

});