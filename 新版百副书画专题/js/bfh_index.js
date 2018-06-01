// JavaScript Document
$(function(){
	//自动淡入淡出
	var num=0;
	var timer=setInterval(autoPlay,10000);
	function autoPlay()
	{
		$("#con li").hide();
		$("#con li").eq(num).fadeIn(5000);
		num++;
		if(num>$("#con li").length-1)
		{
			num=0;
		};
	};

	
	//标题进入首页面
	$("#jrym").click(function(e) {
        $(this).parent().fadeOut(5000);
    });
});