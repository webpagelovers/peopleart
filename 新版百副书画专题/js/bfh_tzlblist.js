// JavaScript Document
$(function(){
	
	//下拉列表
	$(".paixu_ul").hide();
	$(".paixu_h3").click(function(event){
		  $(".paixu_ul").show();
		  event.stopPropagation();
	})
	$(".paixu_ul li").click(function(){
		var a=$(this).html();
		$(".paixu_h3").html(a);
		$(".paixu_ul").hide();
	})
	$("body").click(function(){
		$(".paixu_ul").hide();
	})
	
	
	//图片显示大图
	$(".thumbnail02 img").css({opacity:0});
	var oDiv=document.getElementById("thumbnail");
	var aImg=oDiv.getElementsByTagName("img");
	var oDiv2=document.getElementById("thumbnail02");
	var aImg2=oDiv2.getElementsByTagName("img");
	var aThum=getByClass(oDiv2,'thum_con');
	
	for(var i=0;i<aImg.length;i++){
		aImg[i].index=i;
		aImg[i].onclick=function(){
			$(".thumbnail02 img").css({height:650,minHeight:600})
			$(".zhezhao").show();
			$(".section02_out").show();						
			$(".thumbnail02").eq(this.index).show().siblings().hide();
			var oThum=aThum[this.index];
			var oThumHeight=oThum.offsetHeight;
			var nowImg=aImg2[this.index];
			var oImgWidth=nowImg.offsetWidth;
			var oImgHeight=nowImg.offsetHeight;
			for(var i=0;i<aImg2.length;i++){
				aImg2[i].style.opacity="0";
				aThum[i].style.opacity="0";
			}
			startMove(oDiv2,{width:oImgWidth},function(){
				startMove(oDiv2,{height:oImgHeight},function(){
					startMove(nowImg,{opacity:100},function(){
						startMove(oThum,{opacity:100});
					});
				});
			});
		}
	}
	$(".section02_out .sp02").click(function(e) {
        $(".section02_out").fadeOut(1000);
		$(".zhezhao").fadeOut(1000);
		  event.stopPropagation();
    });
	
	
});