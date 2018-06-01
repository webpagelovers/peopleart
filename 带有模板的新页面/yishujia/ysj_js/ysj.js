// JavaScript Document
$(function(){
	<!-- 作品推荐 -->
	$(".hd_tab a").click(function(e) {
        $(this).addClass("current").siblings().removeClass("current");
    });
	$(".ddShowImg img").mouseenter(function(e) {
		var oWidth=$(this).width();
		var oHeight=$(this).height();
        $(this).stop().animate({marginLeft:-10,width:oWidth*1.07,height:oHeight*1.07},300);
        $(this).mouseout(function(e) {
        $(this).stop().animate({marginLeft:0,width:oWidth,height:oHeight},300);
        }); 
	});
});
