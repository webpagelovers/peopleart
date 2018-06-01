var t = n = 0, count = $("#play_list a").size();
var loop_mx =0;
var loop_mi =0;
$(function() {
    $("#play_list a:not(:first-child)").hide();
    $("#play_info").html($("#play_list a:first-child").attr('title'));
    $("#play_text li:first-child").css({"background-position": "-176px -78px"});
	$("#play_text li:first-child img").css({"border-color": "#c00"});
    $("#play_info").click(function() { window.open($("#play_list a:first-child").attr('href'), "_blank") });
    $("#play_text li").mouseenter(function() {
        var i = $(this).index();
        n = i;
        if (i >= count) return;
        $("#play_info").html($("#play_list a").eq(i).attr('title'));
        $("#play_info").unbind().click(function() { window.open($("#play_list a").eq(i).attr('href'), "_blank") })
        $("#play_list a").filter(":visible").fadeOut(50).parent().children().eq(i).fadeIn(100);
        $(this).css({"background-position": "-176px -78px"}).siblings().css({ "background-position": "300px -80px"});
		$(this).parent().find("img").css({ "border-color": "#999" });
        $(this).find("img").css({ "border-color": "#c00" });
    });
    t = setInterval("showAuto()", 6000);
})

function showAuto() {
    n = n >= (count - 1) ? n == (count - 1) ? 0 : 1 : ++n;
   // $("#play_text li").eq(n).trigger('mouseenter');
		 var i = $("#play_text li").eq(n).index();
         n = i;
        if (i >= count) return;
        $("#play_info").html($("#play_list a").eq(i).attr('title'));
        $("#play_info").unbind().click(function() { window.open($("#play_list a").eq(i).attr('href'), "_blank") })
        $("#play_list a").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
        $("#play_text li").eq(n).css({"background-position": "-160px -80px"}).siblings().css({ "background-position": "300px -80px"});
		$("#play_text li").eq(n).parent().find("img").css({ "border-color": "#999" });
        $("#play_text li").eq(n).find("img").css({ "border-color": "#c00" });
}
//**
function roll_qp(count1,size,roll_h){
	if(count1>=size){
		count1=1;
		$("#roll_qp ul").animate({top:"0"});
	}else{
		$("#roll_qp ul").animate({top:"-="+roll_h});
		++count1;
	}
}
$(function(){
	var roll_h=$("#roll_qp li").height();
	var size=$("#roll_qp li").size();
	var count1=1;
	roll_qp(count1,size,roll_h)
	loop_mx=setInterval(roll_qp,6000);
})
//****
function roll_hd(count2,size,roll_h){
	if(count2>=size){
		count2=1;
		$("#roll_hd ul").animate({top:"0"});
	}else{
		$("#roll_hd ul").animate({top:"-="+roll_h});
		++count2;
	}
}
$(function(){
	var roll_h=$("#roll_hd li").height();
	var size=$("#roll_hd li").size();
	var count=1;
	roll_hd(count,size,roll_h)
	loop_mi=setInterval(roll_hd,6000);
})
//陈勇添加 鼠标移动到图片上不在轮换
function stop_lunhuan(){
		clearInterval(t);
		clearInterval(loop_mx);
		clearInterval(loop_mi);
	}
function sart_lunhuan(){ 
		$(this).parent().trigger('mouseenter')
		t = setInterval("showAuto()", 6000);
		loop_mx=setInterval('roll_qp()',6000);
		loop_mi=setInterval('roll_hd()',6000);
	}
