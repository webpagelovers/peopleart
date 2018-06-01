//弹层
$(function(){
	var winWidth=$(window).width();
	var winHeight=$(document).height();
	var docHeight=$(window).height();
	var scrollTop=$(window).scrollTop();
	var videoTop=(parseInt(docHeight)-230)/2+parseInt(scrollTop);
	$(".popBg").css({"width":winWidth,"height":winHeight});
	$(window).scroll(function(){
		scrollTop=$(window).scrollTop();
		videoTop=(parseInt(docHeight)-230)/2+parseInt(scrollTop);
		$(".popbox").css("top",videoTop+"px");
		});
	$(".popbox").css("top",videoTop+"px");
	})
//关闭视频	
function popclose1(){
		$(".popbox").hide();
	}
function pop_ts(){
		$(".pop_ts").hide();
	}
//文字滚动
    $(function(){
        var rollH=$("#listTextRoll3").height();
        var listH=$("#listTextRoll3 .list").height();
        if(listH>rollH){
            var martop=0;
            $("#listTextRoll3 .list").clone().attr("class","").appendTo("#listTextRoll3");
            function rollText(){
                martop++;
            
                if(martop>listH){
                    martop=0;
                    $("#listTextRoll3 .list").css("margin-top",-martop);
                }
                else{
                    $("#listTextRoll3 .list").css("margin-top",-martop);
                }
            }
            var int=setInterval(rollText,100);
            $("#listTextRoll3").hover(
                function(){
                    clearInterval(int);
                },
                function(){
                    int=setInterval(rollText,100);
                }
            );
        }
    });
	
//焦点图
function Focus(focusBox,focusPic,focusTxt,focusNum,focusOn){
	$(focusPic).children().eq(0).show();
	$(focusTxt).children().eq(0).show();
	var len = $(focusNum).children().length;
	var index= 0;
	//数字索引显示图片
	$(focusNum).children().mouseover(function(){
		index = $(focusNum).children().index(this);
		showImg(index);
	});
	//鼠标经过图片区域停止播放
	$(focusBox).hover(function(){
		if(palyImg){
			clearInterval(palyImg);
		}
	},function(){
		palyImg = setInterval(function(){
			showImg(index);
			index++;
			if(index==len) {index=0}
		},3000);	
	});
	//自动播放
	var palyImg = setInterval(function(){
		showImg(index);
		index++;
		if(index==len) {index=0}
	},3000);
	function showImg(i){
		$(focusPic).children().eq(i).stop(true,true).fadeIn().siblings().fadeOut();
		$(focusTxt).children().eq(i).stop(true,true).fadeIn().siblings().fadeOut();
		$(focusNum).children().eq(i).addClass(focusOn).siblings().removeClass(focusOn);
	}
}
//视频背景
$(function(){
	var winWidth=$(window).width();
	var winHeight=$(document).height();
	var docHeight=$(window).height();
	var scrollTop=$(window).scrollTop();
	var videoTop=(parseInt(docHeight)-530)/2+parseInt(scrollTop);
	$(".popBg").css({"width":winWidth,"height":winHeight});
	$(window).scroll(function(){
		scrollTop=$(window).scrollTop();
		videoTop=(parseInt(docHeight)-530)/2+parseInt(scrollTop);
		$(".playVideo").css("top",videoTop+"px");
		$(".playPic").css("top",videoTop+"px");
		});
	$(".playVideo").css("top",videoTop+"px");
	$(".playPic").css("top",videoTop+"px");
	})
//视频播放
$(function(){
	$(".videoimg a").click(function(){
			$(".popBg,.playVideo").show();
			var video_dibbling_link =$(".videoimg a").attr("title");
			var flashvars = {};
			var params = {};
			params.menu = "false";
			params.quality ="high";
			params.wmode = "transparent";
			params.allowFullScreen = "true";
			var attributes = {};
			swfobject.embedSWF(video_dibbling_link, "video-dibbling-play", "800", "450", "9.0.0","", flashvars, params, attributes);
			return false;
		});
	})
$(function(){
	$(".video").click(function(){
			$(".popBg,.playVideo").show();
			var video_dibbling_link =$(".video span").attr("title");
			var flashvars = {};
			var params = {};
			params.menu = "false";
			params.quality ="high";
			params.wmode = "transparent";
			params.allowFullScreen = "true";
			var attributes = {};
			swfobject.embedSWF(video_dibbling_link, "video-dibbling-play", "800", "450", "9.0.0","", flashvars, params, attributes);
			return false;
		});
	})
$(function(){
	$(".video8 a").click(function(){
			$(".popBg,.playVideo").show();
			var video_dibbling_link =$(".video8 a").attr("title");
			var flashvars = {};
			var params = {};
			params.menu = "false";
			params.quality ="high";
			params.wmode = "transparent";
			params.allowFullScreen = "true";
			var attributes = {};
			swfobject.embedSWF(video_dibbling_link, "video-dibbling-play", "800", "450", "9.0.0","", flashvars, params, attributes);
			return false;
		});
	})
//关闭视频	
function popclose(){
		$(".popBg,.playVideo,.playPic").hide();
		$(".PicContent").empty();
		};